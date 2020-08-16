// try {
//   myFunction(); // produce a ReferenceError
// } catch (e) {
//   console.log(e);
//   console.log(e.message);
//   console.log(e.name);
//   console.log(e instanceof ReferenceError); //true
//   console.log(e instanceof TypeError); //false

// }
// console.log('Program continues...')

// try {
//   null.myFunction();   // produce a TypeError
//   eval('hello world') // syntax error
//   decodeURIComponent('%')   // uri error
//   myFunction();
// } catch (e) {
//     console.log(e);
// }finally {
//   console.log('I run regardless of the outcome above!')
// }

// create your own error
const user = { email: 'jdoe@gmail.com' };

try {
    if (!user.name) {
        // throw 'User has no name!';
        throw new SyntaxError('USER HAS NO NAME!');
    }
} catch (e) {
    console.log(`User error: ${e.message}`);
} finally {
    console.log(`I run regardless of the results`);
}
