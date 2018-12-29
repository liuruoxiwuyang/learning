var http=require('http');

var urls=['http://www.qq.com','http://www.baidu.com','http://www.laoshanlaoxie.com'];

function fetchPage(url){
	var start=new Date();
	http.get(url,function(res){
		console.log('Got respone from '+ url);
		console.log('Request time : '+ (new Date()-start)+ "ms");
	});
}

for(var i=0;i<urls.length;i++){
	fetchPage(urls[i]);
}