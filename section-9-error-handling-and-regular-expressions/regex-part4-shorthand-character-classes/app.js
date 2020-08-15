
let re; 
// shorthand character classes 

re = /\w/; // word character - alphanumeric or _ 
re = /\w+/;  // + = one or more  
re = /\W/; // none word characters anything but a letter, number or underscore 
re = /\d/; // match any digit 
re = /\d+/; // match any digit 0 or more times  
re = /\D/;  // match any non-digit 
re = /\s/; // match whitespace characters 
re = /\S/; // match non whitespace characters 
re = /Hell\b/i; // word boundary - matches a single word / the specific word  



// assertions 
re = /x(?=y)/; // match x only if followed by y 
re = /x(?!y)/; // match x only if NOT followed by y 



const str = 'xy';
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str); 
