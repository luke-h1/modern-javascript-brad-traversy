// MAPS  = key-value pairs - can use ANY type as a key or a value 

const map1 = new Map(); 

// set keys 
const key1 = 'Some String',
      key2 = {},
      key3 = function(){};

// set map values by key 
map1.set(key1, 'Value Of Key One');
map1.set(key2, 'Value Of Key two');
map1.set(key3, 'Value Of Key three');


// get values by key 
console.log(map1.get(key1), map1.get(key2), map1.get(key3)); 

// count values inside of map 
console.log(map1.size) // 3 key value pairs inside map1 

// iterating through maps (for of )
// loop using for..of to get keys and values 
for(let [key,value] of map1){
  console.log(`${key} = ${value}`); 
}


// get just the keys iteration 
for(let key of map1.keys()){
  console.log(key); 
}

// get just the values 
for(let value of map1.values()){
  console.log(value);
}

// use forEach to iterate 
map1.forEach(function(value, key){
  console.log(`${key} = ${value}`);
})


// Convert to an ARRAY 

// create array of the key value pairs 
const keyValArr = Array.from(map1); 
console.log(keyValArr);  



// create array of the values 
const valArr = Array.from(map1.values()); 
console.log(valArr);  


// create array of keys 
const keyArr = Array.from(map1.keys()); 
console.log(valArr);  