let re; 

/* 
-------------------
literal characters 
-------------------*/ 
// re = /hello/i;
// re = /hello/;


/* 
-------------------------
Meta character symbols 
-------------------------*/ 
re = /^h/i; // starts with 
re = /world$/i; // must end with 
re = /^hello$/i;  // must start with and end with 
re = /^h.llo$/i; // matches any ONE character 
re = /h*llo/i; // matches any character 0 or more times. 
re = /gre?a?y/i;  // optional e and a 
re = /gre?a?y\?/i;// escape characters 


// string to match 
const str = 'Gray?'; 
// log results 
const result = re.exec(str);
console.log(result); 

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`)
  }else { 
    console.log(`${str} does not match ${re.source}`) 
  }
}

reTest(re, str);