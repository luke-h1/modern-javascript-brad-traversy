// ES5 syntax
const sayHello = function (name) {
    console.log('hello ' + name + '!');
};
sayHello('luke');

// ES6 arrow function syntax
const sayHelloArrow = (name) => {
    console.log('hello ' + name + ' this is an arrow function !');
};
sayHelloArrow('luke');

// 1 liner function does not need braces 
const sayHelloArrowAlt = (name) => console.log('hello ' + name + ' this is an arrow function 1!');
sayHelloArrowAlt('luke')


// return object literal 
const sayHello2 = () => ({ msg: 'hello' });  
console.log(sayHello2());

// A single parameter does not need parantheses 
const sayHello3 = name => console.log(`hello ${name}`);
sayHello3('luke') 

// multiple params need paraentheses
const sayHello4 = (fname, lname) => console.log(`Hello ${fname} ${lname}`)
sayHello4('luke', 'howsam')



const users = ['nathan', 'john', 'william'] 
const nameLengths = users.map((name) => { 
  return name.length; 
}); 

console.log(nameLengths);

function getTextData(){
  fetch('test.txt') 
    .then(res => res.json()) 
    .then(data => {
      document.getElementById('output').innerHTML = data; 
    })
    .catch((err) => {
      console.log(err);
    })
  }

