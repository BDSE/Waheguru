/**
*  For this to work, we need to use babel
*   currently browsers donot support this
*/

import * as myMod3 from './mymodule3.js';
import myModDefault from './mymodule1.js';
import {add, subtract} from './mymodule2.js';


myMod3.sayHello();

myMod3.sayHello2("Amarfateh..mod3");

myModDeafult("Amar...default function");

console.log(add(2,3,4,5,6));
console.log(subtract(4,3));