import $ from '../../lib/jquery/dist/jquery.js';
$('body').addClass("anotherTest");

const myfun = (...args) => {
    console.log("mymodule 1..sourcemaps work");
    let sum = 0;
    for (let x in args) {
        sum = sum + args[x];
    }
    return sum;
};


//export {myfun, myfun2};
export default myfun;