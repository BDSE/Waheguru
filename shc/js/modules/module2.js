import $ from '../../lib/jquery/dist/jquery.js';
$('body').addClass("testPage");
const myfun2 = (...args) => {
    console.log("mymodule 2..sourcemaps work");
    let str = "";
    for (let x in args) {
        str = str + args[x];
    }
    return str;
};

export default myfun2;