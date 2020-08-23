/*
=======================
common JS MODULE SYNTAX
=======================
*/ 
// const person = require('./common-js');  
// console.log(person)  





/*
=======================
ES2015 MODULE SYNTAX 
=======================
*/ 
// import { person , sayHello} from './es2015-modules'; 
// import * as mod from './es2015-modules'; // IMPORT EVERYTHING 
// console.log(mod.person) 
// console.log(mod.sayHello());

import greeting from './es2015-modules'; 

console.log(greeting);