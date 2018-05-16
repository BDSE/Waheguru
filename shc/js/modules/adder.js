
const adder = (function () {
    var adder = function (plusBy) {

        return function (x) {
            return x + plusBy;
        };
    };
    var sayHelloFromAdder = function () {
        return "Hello World From Adder";
    };

    return {
        adder: adder,
        sayHelloFromAdder: sayHelloFromAdder
    };
})();
export default adder;
