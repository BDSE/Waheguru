 const myfun = (...args)=> {
     console.log("mymodule 1 it is..sourcemaps work");
    let sum = 0;
    for(let x in args){
        sum = sum+args[x];
    }
    return sum;
}

 

//export {myfun, myfun2};
 export default myfun;