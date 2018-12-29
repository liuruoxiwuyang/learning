function Stack(){
	this.items=[];
	this.pop=0;
}

Stack.prototype={
	constructor:Stack,
	push:push,
	pop:pop,
	size:size,
	empty:empty,
	peek:peek,
	clear:clear

}

//实现push() pop() size() empty() peek() clear()

function push(item){
	this.items[this.pop++]=item;
}

function pop(){
	if(this.pop==0){
		return;
	}else{
		var item=this.items[this.top-1];
		this.items.length=--this.top;
		return item;
	}
}
function size(){
	return this.top;
}
function empty(){
	return this.top==0;
}
function peek(){
	return this.items[this.top-1];
}
function clear(){
	this.items=[];
	this.top=0;
}


function fac(n){
	var s=new Stack();
	result=1;
	while(n>1){
		s.push(n--);
	}
	while(s.size()>0){
		result*=s.pop();
	}

	return result;
}

console.log(fac(5));