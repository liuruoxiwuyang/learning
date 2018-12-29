//模块：（1：自定义模块  2：系统模块   3：第三方模块）mysql
var http=require('http');

http.createServer(function(req,res){
	//1:返回包头（status code，content-type）
	res.writeHead(200,{'Content-type':'text/plain'});

	//2:返回包体 （包体内容 文件传输编码）
	//res.write('hello world','utf-8');
	//3：结包
	res.end('laoshan');
}).listen(3000);

console.log('server start port 3000');

//bootstrap  npm install bootstrap

nodejs开发 大量的使用到第三方包 
包管理系统  npm安装 针对当前项目安装包  node_modules npm install mysql
                    针对于全局进行安装 npm install -g supervisor

linux  redhat（RHEL、CentOS、Fedora） yum install gcc
       debian（ubuntu、debian）apt-get install gdb
//console.log(http);
//http://localhost:3000/
//http://localhost:3000/reg
//http 接收请求的对象  request  req
//     返回请求的对象  respones res
//404 503 200 
