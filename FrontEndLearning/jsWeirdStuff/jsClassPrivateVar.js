class commonPersonObj {
    formalgreet() {
        console.log("formal greet", this.name);
    }
}

var Person = (function () {

    var _privateVar = 20; //private variable.

    var _privateFunction = function () {
        return "I am a private JS function";
    }

    class Person extends commonPersonObj {

        constructor(name) {

            super();
            this.name = name;
            this.age = _privateVar;

            //this.a will get the below sayHello as the sayHello from the constructor is not yet assigned.
            this.a = this.sayHello;

            //this overwrites the below sayhello or it takes precedence over the below one
            this.sayHello = function () {
                console.log("from constructor..", this.name);
            }

        }

        sayHello() {
            console.log("Hello..", this.name);
        }

        //this method uses the private function as there is no other way to use this proivate function
        usePrivateFunction() {
            _privateFunction();
        }

        //this is how you can mimic encapsulation in js
        //getter and setter for the private variables
        getPrivateVar() {
            return _privateVar;
        }
        setPrivateVar(a) {
            _privateVar = a;
        }

    }

    return Person;

})();

var me = new Person("Amar");


me.sayHello(); //this will output from constructor wala...
me.formalgreet(); //this will out put formal greet wala
me.a(); // this will out put hello.. wala ...

me.setPrivateVar(34334);
console.log("private variablle", me.getPrivateVar());

/////////////////////////*******************/////////////////////////////
function Obj() {
    this.a = 10;
    this.b = this.a + 454; //this is OK
}

var ob = new Obj

var obj = {
    a: 20,
    b: this.a + 3 //but this is not OK
    //b: function(){return this.a+3;} //right way to do it
}

console.log(obj.b());

console.log(ob.b);
