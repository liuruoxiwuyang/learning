define(function(){
	//alert('laoxie');
	//业务逻辑代码
	function Person(options){
		this.name=options.name;
		this.container=options.container;
		this.width=options.width;
		this.oImg=new Image();
	}
	Person.prototype.sayHello=function(){
		console.log(this.name);
	}

	//var person=new Person();
	return Person;
	/*
	return {
		'name':'laoshan',
		sayHello:function(){
			console.log(this.name);
		}
	}*/
});