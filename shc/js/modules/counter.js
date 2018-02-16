class CounterObj {
    constructor(x) {
        this.count = x || 0;
    }
    inc(by) {
        this.count = this.count + by || ++this.count;
        return this.count;
    }
    dec(by) {
        this.count = this.count - by || --this.count;
        return this.count;
    }
    setCounter(to) {
        this.count = to || 0;
    }
    getCounter() {
        return this.count;
    }
    sayHello(name) {
        return "Hello There " + name;
    }
}
export default CounterObj;