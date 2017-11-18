$('body').addClass("anotherTest");
window.SHC = {};// global variable can be accessed in al the modules
 const myfun = (...args)=> {
     console.log("mymodule 1 it is..sourcemaps work");
    let sum = 0;
    for(let x in args){
        sum = sum+args[x];
    }
    return sum;
};

var obj = {
    a:20,
    b:23
};

//export {myfun, myfun2};
 export default myfun;