var ss=require('./05-test.js');
//console.log(ss);
//ss.say();
//console.log(ss);
//var demo=new ss();
//demo.aa();

ss.say();


MVC    controller-->model  

$this->load->model('user_model'); 
$this->user_model->get_name();

class user_model extends CI_Model{

	public function __construct(){
		parent::__construct();
	}

	public function get_name(){

	}
}

user.js
var user_model=require('./user_model.js');
var user_model=new user_model();
user_model.get_name('xx',function(){

});

user_model.js

function user_model(id,name){
	this.id=id;
	this.name=name;
	
}

user_model.prototype.get_name=function(){

}


module.exports=user_model;

function parent(){

}

function aa(){
	super();   
	this.aa=function(){

	}
}

aa.prototype=new parent(); -> aa.super_=parent



//var user_model=new user_model(1,'laoshan');