import objt from './obj1';
import CounterObj from './counter';

const obj2 = {
    showObj1: function () {
        return objt.b;
    }
};


var counter = new CounterObj();
counter.inc();
counter.inc();
counter.inc();
counter.dec();

console.log(objt);
console.log("counter......", counter.getCounter());
objt.a = "changed from obj2.js";
console.log(objt);

export default obj2;