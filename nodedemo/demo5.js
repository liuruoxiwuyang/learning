//同步&异步 内存  磁盘I/O 网络I/O
//var ss=require('./05-test.js');

//var mysql=require('mysql');   mysql.js  mysql/index.js
var fs=require('fs');

/*
var data=fs.readFileSync('file.txt','utf-8');
console.log(data);
console.log('end');*/

fs.readFile('file.txt','utf-8',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});
console.log('end');


//fs.readFile(filename, [options], callback)
//fs.readFileSync(filename, [options])

