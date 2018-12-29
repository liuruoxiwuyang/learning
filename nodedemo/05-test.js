var invisible = function () {
  console.log("invisible");
}

exports.message = "hi";

exports.say = function () {
  console.log(exports.message);
}

//console.log(exports.message);





/*
function demo(name){
	this.name=name;
	this.bb=function(){
		console.log('kill'+this.name);
	}
}*/

//var dd=new demo('laoshan');
//dd.bb();

/*
function demo(){
	this.aa=function(){
		console.log('ok');
	}
}*/

//readFile  openFile writeFile

//module.exports=demo;
/*
exports.demo={
	aa:function(){
		console.log('error');
	}
}*/

/*
var invisible = function () {
  console.log("invisible");
}

exports.demo={
	'message':'hi',
	say:function(){}
}

exports.message = "hi";

exports.say = function () {
  console.log(123);
}*/

/*
{
	invisible:function(){

	},
	message:'hi',
	say:function(){

	}
}*/

/*
function aa(){
	this.a=123;
	this.bb=function(){
		console.log(678);
	}
}

var a=123;
var aa={
	a:123,
	bb:function(){
		console.log(678);
	}
}*/






/*
1.js

function Demo(){
	this.aa=123;
	this.bb=function(){
		console.log('456');
	}
}

var demo = new Demo();
console.log(demo.bb());

2.js

var demo = new Demo();
console.log(demo.bb());

1.php

class ss{
	public function aa(){

	}
}

2.php
include '1.php';
$ss=new ss();
$ss.aa();
*/


/*
var fun=new Function();

console.log(typeof(fun));  */ //function

/*
function Demo(){
	this.aa=123;
}

var demo=new Demo();
console.log(typeof(demo));*/

//Array  Object  Function ----
/*
function aa(){

}

console.log(Function instanceof Object);
console.log(Object instanceof Function);

var a=new Array();
var fun=new Function();
console.log(a instanceof fun);*/



//console.log(typeof(Function.prototype));
/*
res = db.query('SELECT * from some_table');
res.output();

db.query('SELECT * from some_table', function(res) {
	res.output();
});
db.esits();*/



