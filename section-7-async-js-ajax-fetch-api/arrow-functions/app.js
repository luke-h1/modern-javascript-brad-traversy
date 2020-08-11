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


const sayHelloArrowAlt = (name) => console.log('hello ' + name + ' this is an arrow function 1!');
sayHelloArrowAlt('luke')