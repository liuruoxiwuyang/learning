define(function(require,exports,module){
	function Person(name){
		$this.name=name;
	}

	Person.prototype.sayHello=function(){
		console.log(this.name + " say Hello ");
	}

	module.exports=Person;
});