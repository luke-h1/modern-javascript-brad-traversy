// destructuring assignment 

let a, b; 
[a, b] = [100,200]; // a = 100 and b = 200  

// rest pattern 
[a, b,c, ...rest] = [100,200,300,400,500]; 
console.log(rest); 

/* rest returns: 
(3) [300, 400, 500]
0: 300
1: 400
2: 500
length: 3
*/ 

// object destructuring 
({ a, b } = { a: 100, b:200, c:300, d:400, e:500 });  
({ a, b, ...rest } = { a: 100, b:200, c:300, d:400, e:500 });  
console.log(a,b);
console.log(rest); 

// // Array destructuring: 
// const people = ['John', 'beth', 'Mike']; 
// const [person1,person2,person3] = people; 
// console.log(person1, person2,person3);

// parse array returned from function 

function getPeople(){
  return ['John', 'beth', 'Mike']; 
}

let person1,person2,person3; 
[person1,person2,person3] = getPeople();
console.log(person1, person2,person3);


// object destructuring 
const person = {
  name: 'John Doe',
  age: 22,
  city: 'Miami',
  gender: 'Male', 
  sayHello: function(){console.log('hello')}
}

// new ES6 destructuring 
const { name, age, city, sayHello } = person;  
console.log(person);

sayHello()

// Old ES5 method 
// const name = person.name,
//       age = person.age, 
//       city = person.city, 
//       gender = person.gender; 


