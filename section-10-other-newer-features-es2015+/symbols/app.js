// create a symbol 

// const sym1 = Symbol();
// console.log(sym1)

// console.log(Symbol() === Symbol())

// console.log(Symbol('123') === Symbol('123')) // results in false 

// unique object keys 

const myObj = {}; 

myObj[Key1] = 'Prop1'; 
myObj[Key2] = 'Prop2'; 
myObj.key3 = 'Prop3'; 
myObj.key4 = 'Prop4';

// console.log(myObj[Key1]); 

// symbols are not enumarable in for in ...

for(let i in myObj){
  console.log(`${i}: ${myObj[i]}`)
}

// symbols ignored when you use json.stringify() 
// json.stringify() turns object literals into json objects 

console.log(JSON.stringify({key: 'prop'})); 
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); 