// // iterator example

// function nameIterator() {
//     let nextIndex = 0;
//     return {
//         next: function () {
//             return nextIndex < names.length
//                 ? { value: names[nextIndex++], done: false }
//                 : { done: true };
//         },
//     };
// }

// // create array of names

// const namesArr = ['jack', 'jill', 'john'];
// const names = nameIterator(namesArr);

// // init iterator & pass in names array

// console.log(names.next().value);
// console.log(names.next().value);


// Generator example 
// * to define a generator function 

function* sayNames(){
  yield 'Jack'; 
  yield 'luke'; 
  yield 'jill'; 
}

const name = sayNames();

console.log(name.next())
console.log(name.next())
console.log(name.next())



// ID creator 
function* createIds(){
  let index = 0; 
  while(true){
    yield index++; 
  }
}

const gen = createIds(); 
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)