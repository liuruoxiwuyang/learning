define(function(){
	function Person(name){
		this.name=name;
	}

	Person.prototype.sayHello=function(){
		console.log(this.name + ' say hello');
	};

	//return new Person('lisi');
	//return Person;
	return {
		Person:Person
	}
	/*
	return {
		name:'lisi',
		sayHello:function(){
			console.log(this.name + ' say hello');
		}
	}*/
});