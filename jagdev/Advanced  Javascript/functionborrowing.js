var person = {
	firstName : "john",
	lastName : "doe",
	getfullName : function(){
		var fullName = 	this.firstName+ " "+ this.lastName;
		return fullName;
		}
}

var logName = function(lang1,lang2){
	console.log("logged : "+ this.getfullName());
	console.log("logged : "+lang1+" "+lang2);
	console.log(".......................");
}.bind(person);
logName();
logName.call(person,"es","en");
logName.apply(person,["es","en"]);
(function(lang1,lang2){
	console.log("logged : "+ this.getfullName());
	console.log("logged : "+lang1+" "+lang2);
	console.log(".......................");
}).apply(person,["es","en"]);

//Function borrowing
var person2 = {
	firstName:"Jane",
	lastName:"Doe"
}
console.log(person.getfullName.apply(person2));
//Function currying
var multiply = function(a,b){
	return a*b;
}
var multiplyby2 = multiply.bind(this,3);
console.log(multiplyby2(10));