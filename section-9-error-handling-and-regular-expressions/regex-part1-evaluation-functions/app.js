let re; // regex
//re = /hello/g; // global search - will look at the entire character string not just the first one it finds
re = /hello/i; // case insensitive
// // console.log(re);
// // console.log(re.source); // results in hello

// // functions used to evaluate regular expressions

// // exex() - return reuslt in an array if there is a match or return null if there is no match
// // pass in whatever you want it to match to
// const result = re.exec('hello world ')
// console.log(result)
// // first character starts at index 0 of the array
// // expression
// // index which the matching characters are at
// // the string that has been passed in

// // log first value in the array (that matches the string);
// console.log(result[0])

// // get index value
// console.log(result.index)

// // get search string
// console.log(result.input)

// the test() function -What test does is it returns a boolean value true if there is a match or false if there isn’t a match.

// const result = re.test('hello world!')
// console.log(result) // results in true

// the match function

// const str = 'Hello There' // what is to be matched
// const result = str.match(re); // pass in your regex here
// console.log(result) // console.log() the result
// the search() function

// the search function - returns the index of the first match and if not found returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result)

// the replace function - replace will return a new string with some or all matches of a given pattern.

// first option pass in your regex
// second option pass in what you want to replace it with
const str = 'Hello There';
const newStr = str.replace(re, 'hiiiiii');
console.log(newStr);
