/*var peopleFactory = function(name, age, state){

	var temp = {};
	//var temp = new Object();

	temp.age = age;
	temp.name = name;
	temp.state = state;

	temp.printPerson = function(){
		console.log(this.name + ", " + this.age + ", " + this.state);
	}

	return temp;
}

var person1 = peopleFactory("john", 23, "CA");
var person2 = peopleFactory("kim", 27, "SC");

person1.printPerson();
person2.printPerson();*/


//constructor pattern
/*var peopleConstructor = function(name, age, state){

	this.name = name;
	this.age = age;
	this.state = state;

	this.printPerson = function(){
		console.log(this.name + ", " + this.age + ", " + this.state);
	}
}

var person1 = new peopleConstructor("john", 23, "CA");
var person2 = new peopleConstructor("kim", 27, "SC");

person1.printPerson();
person2.printPerson();*/


//dynamic prototype pattern
var peopleDynamicProto = function(name, age, state){
	this.age = age;
	this.name = name;
	this.state = state;

	// create function only once
	if(typeof this.printPerson !== "function"){
		peopleDynamicProto.prototype.printPerson = function(){
			console.log(this.name + ", " + this.age + ", " + this.state);
		}
	}
}

var person1 = new peopleDynamicProto("John", 24, "CA");
var person2 = new peopleDynamicProto("Yu", 23, "ZJ");

console.log("name" in person1);
console.log(person1.hasOwnProperty("name"));

person1.printPerson();
person2.printPerson();
