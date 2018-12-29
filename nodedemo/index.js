require(["./fs","./person"],function(file,person){
	//console.log(fs);
	//file.read();
	//file.write();
	var newPerson=require('./person');
	var person1=person;
	var person2=newPerson;
	person1.sayHello();
});