import objt from './obj1';
import CounterObj from './counter';

var counter = new CounterObj();
counter.inc();
counter.inc();
counter.inc();
counter.dec();

console.log(objt);
console.log("counter......", counter.getCounter());
objt.a = "changed from obj2.js";
console.log(objt);