var fs=require('fs');
var http=require('http');
var url=require('url');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	//console.log(__dirname);
	var readpath=__dirname+'/'+url.parse('index.html').pathname;
	var indexPage=fs.readFileSync(readpath);
	res.end(indexPage);
	//console.log(readpath);
	//console.log(url.parse('index.html'));
	//site_url()  base_url()
}).listen(3000);

console.log('server start');

