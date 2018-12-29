function waitFive(name,function_name){
	var pus=0;
	var currtime=new Date();
	while(pus<5000){
		var now=new Date();
		pus=now-currtime;
	}

	function_name(name);
}

function echo(name){
	console.log(name);
}

waitFive('sword',echo);
console.log('its over');