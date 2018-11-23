var oBigImg = document.getElementById("big-img");
var aBigPic = oBigImg.getElementsByTagName("img");
var oSmallImg = document.getElementById("small-img");
var aSmallPic = oSmallImg.getElementsByTagName("img");
var oPrev = document.getElementById("pre");
var oNext = document.getElementById("next");
var oInfo = document.getElementById("info");
var oCurrentPage = document.getElementById("current-page");
var oContainer = document.getElementById("container");
var iNow = 0;
for(var i=0 ;i<aSmallPic.length;i++){
    aSmallPic[i].idx = i;
    aSmallPic[i].onmouseover = function(){
        animate(this,{
            opacity:100
        })
    }
    aSmallPic[i].onmouseout = function(){
        if(this.idx != iNow){
            animate(this,{
                opacity:30
            })
        }
    }
}
oNext.onclick = oPrev.onclick = function(){
    if(this == oNext){
    
            iNow=(iNow+1)%aBigPic.length;
            changeImg(iNow);
    }else{
        if(iNow == 0){
            iNow = aBigPic.length-1;
        }else{
            iNow--;
        }
        changeImg(iNow);
    }
};
function changeImg(idx){
    for(var i=0;i<aBigPic.length;i++){
        animate(aBigPic[i],{
            opacity:0
        })
        animate(aSmallPic[i],{
            opacity:30
        })
    }
    aBigPic[idx].style.zIndex=3;
    animate(aBigPic[idx],{
        opacity:100
    });
    animate(aSmallPic[idx],{
        opacity: 100
    });
    var ileft = -((idx-1)*aSmallPic[0].offsetWidth);
    if(iNow==0){
        ileft = 0;
    }
    if(iNow==aBigPic.length-1||iNow==aBigPic.length-2){
        ileft = -(aBigPic.length-4)*aSmallPic[0].offsetWidth;
    }
    animate(oSmallImg,{
        left: ileft
    });
   
    oCurrentPage.innerHTML = idx+1;
    iNow = idx;
}
var timer;
function run(){
    timer = setInterval(function(){
        oNext.onclick();
    },1000);
}
run();
oContainer.onmouseover = function(){
    clearInterval(timer);
}
oContainer.onmouseout= function(){
    run();
}