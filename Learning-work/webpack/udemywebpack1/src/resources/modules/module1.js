import $ from '../lib/jquery/dist/jquery.js';
$('body').addClass("anotherTest");
window.SHC = {a:20};// global variable can be accessed in al the modules
 const myfun = (...args)=> {
     console.log("mymodule 1 it is..sourcemaps work");
    let sum = 0;
    for(let x in args){
        sum = sum+args[x];
    }
    return sum;
};

function multiply(a,b){
    return a*c;
}

//export {myfun, myfun2};
 export default myfun;