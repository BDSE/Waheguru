import $ from '../lib/jquery/dist/jquery.js';
$('body').addClass("testPage");
console.log(SHC);// this the global variable..can be accessed anywhere without importing.
const myfun2 = (...args) => {
    console.log("mymodule 2 it is..sourcemaps work");
    let str = "";
    for(let x in args){
        str = str+args[x];
    }
    return str;
};

export default myfun2;