var CounterObj = {
    sayHello: function () {
        return "Hello World!";
    }
};

// class CounterObj {
//     constructor(x) {
//         this.count = x || 0;
//     }
//     inc(by) {
//         return this.count + by || ++this.count;
//     }
//     dec(by) {
//         return this.count - by || --this.count;
//     }
//     setCounter(to) {
//         this.count = to || 0;
//     }
//     getCounter() {
//         return this.count;
//     }
// }
export default CounterObj;