let re; 


/*----------------- 
  Character sets & 
  quantifiers 
-------------------*/ 

/*
-----------------------------\
brackets [] - character sets \
-----------------------------\
*/

re = /gr[ae]y/i; // must either be an "a" or an "e"
re = /gr[^ae]y/i; // matches anything except an a or an e 
re = /[A-Z]ray/i; // matches any uppercase letter 
re = /[a-z]ray/i; // matches any lowercase letter 
re = /[A-Za-z]ray/ // matches any letter of any case 


/*
-----------------------------\
Braces {} - quantifiers      \
-----------------------------\
*/

re = /Hel{2}o/i; // must occur exactly {x} amount of times 


re = /Hel{2,4}o/i; // matches a range of numbers 

re = /Hel{2,}o/i; // must occur at least 2 or more times 



/*
-----------------------------\
parentheses () -   grouping    \
-----------------------------\
*/

re = /([0-9]x){3}/i; 



const str = '3x3x3x';
const result = re.exec(str); 
console.log(result) 

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`) 

  }else { 
    console.log(`${str} does not match ${re.source}`)
  }
}

reTest(re, str); 