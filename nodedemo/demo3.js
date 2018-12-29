require(['./demo4'],function(Person){
	//demo4.sayHello();
	//console.log(demo4);
	//var person1=new demo4();
	//var person2=new demo4();
	//console.log(typeof(person));
	var oContainer=document.getElementById('container');
	for(var i=0;i<4;i++){
		var options={
			'name':Math.random()*50,
			'width':50,
			'container':oContainer,
		}
		var person=new Person(options);
		//person.name=Math.random()*50;
		console.log(person.container);
	}

	/*
	var person1=new Person();
	var person2=new Person();
	person1.name="laoshan";
	console.log(person1.name);
	console.log(person2.name);*/

});