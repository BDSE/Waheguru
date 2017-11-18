import $ from './lib/jquery/dist/jquery.js';
import arr from './array';
import fun1 from './modules/module1';
import fun2 from './modules/module2';
import './modules/image-viewer';
import './sass/main.scss';
//import './css/main.css';
console.log("sum.....",fun1(2,345,56,7));
console.log("str......",fun2(...arr));

console.log(process.env.ASSET_PATH);

for(var x in arr){
    console.log(arr[x]+" : "+x);
}