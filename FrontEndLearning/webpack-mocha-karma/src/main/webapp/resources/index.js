//JS 
import './js/modules/obj2';
import obj from './js/modules/obj1';
import arr from './js/modules/array';
import fun1 from './js/modules/module1';
import fun2 from './js/modules/module2';
import './js/modules/image-viewer';

//CSS ans SASS
import './sass/main.scss';
//import './css/main.css';

console.log("sum.....", fun1(2, 345, 56, 7));
console.log("str......", fun2(...arr));

console.log(process.env.ASSET_PATH);

console.log("obj.......", obj);

for (var x in arr) {
    console.log(arr[x] + " : " + x);
}

obj.a = "modified from index.js";