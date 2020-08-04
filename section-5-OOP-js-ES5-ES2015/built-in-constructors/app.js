// strings

// sets a primitive value to the variable name1
const name1 = 'Luke';

// get string as an object
const name2 = new String('luke'); // primitive value as the key
// luke as the value

name2.foo = 'bar';

console.log(name1);
console.log(name2);

console.log(typeof name1);

if (name1 === 'Luke') {
    console.log('yes');
} else {
    console.log('no');
}

// number
const num1 = 5;
const num2 = new Number(5);

// boolean
const bool1 = true;
const bool2 = new Boolean(true);

// functions
const getSum1 = function (x, y) {
    return x + y;
};
// console.log(getSum2(1, 1));
// const getSum2 = new Function('x', 'y', 'return 1 + 1');

// objects
const john = { name: 'john' };
console.log(john);
const john2 = new Object({ name: 'John' });


// arrays 
const arr1 = [1,2,3,4]; 
const arr2 = new Array(1,2,3,4); 
console.log(arr2)


// regex 
const re1 = /\w+/; 
const re2 = new RegExp('\\w+') // two backslash to escape chars 
console.log(re2)