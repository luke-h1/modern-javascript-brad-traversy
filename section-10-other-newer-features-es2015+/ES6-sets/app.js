// SETS - store unique values of any type 

const set1 = new Set(); 

// add values to set 
set1.add(100); 
set1.add('A string ');
set1.add({name: 'John Doe'}); 
set1.add(true); 
set1.add(100); 


// const set2 = new Set([1,true,'A string']);
// console.log(set2); 
console.log(set1);

// get count 
console.log(set1.size);

// check for values: 
console.log(set1.has(100)); 



// delete from the set 
set1.delete(100);
console.log(set1);

// iterate thru the set 

// for..of 

for(let item of set1){
  console.log(item); // returns a string, object & true 
} 

// forEach() 

set1.forEach((value) => { 
  console.log('i', value);
})

// convert set into array 
const setArr = Array.from(set1); 
console.log(setArr);