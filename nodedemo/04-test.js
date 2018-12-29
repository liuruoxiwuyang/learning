/*
class User extends CI_Controller{
	private $date;
	public $aa;

	public function __construct(){
		parent::__construct();
		$this->date=1999;
	}
}*/



function Demo(name){
	var date=19;
	this.aa=name;
	this.bb=function(){
		console.log(date);
	}
}

//Demo (function---new Function()  Class   __construct())

//console.log(typeof(demo));

var demo=new Demo('laoshan');
//console.log(typeof(demo));
console.log(demo.bb());



// var aa=function(){
// 	console.log(456);
// }

// aa();

// function aa(){
// 	console.log(456);
// }
//var bb=undefined;
// console.log(bb);
// var bb=123;
// console.log(bb);