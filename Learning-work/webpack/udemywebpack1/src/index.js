import arr from './array';
import fun1 from './modules/module1';
import fun2 from './modules/module2';
import './sass/main.scss';
//import './css/main.css';

console.log(fun1);

console.log("sum.....",fun1(2,345,56,7));
console.log("str......",fun2(...arr));

for(var x in arr){
    console.log(arr[x]+" : "+x);
}