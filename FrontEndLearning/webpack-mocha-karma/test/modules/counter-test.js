import CounterObj from '../../src/main/webapp/resources/js/modules/counter';

describe('Test', function () {
    it('should return Hello World!', function () {
        var result = CounterObj.sayHello();
        assert.equal(result, "Hello World!");
    });
});
