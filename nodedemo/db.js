//var mysql=require('mysql');

//console.log(mysql);


//new Function.__proto__=Function.prototype

var fun=new Function;
console.log(typeof(fun));

function Object(){

}

function Function(){

}

Function.prototype=Object.prototype.__proto__



