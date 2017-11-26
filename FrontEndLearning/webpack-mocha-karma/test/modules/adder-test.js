import adder from '../../src/main/webapp/resources/js/modules/adder';

describe('Test', function () {
    it('should return Hello World From adder', function () {
        assert.equal(adder.sayHelloFromAdder(), "Hello World From Adder");
    });
});
