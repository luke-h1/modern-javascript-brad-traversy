// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('hello'), 1000);
//     });
//     const error = true
//     if(!error){
//       const res = await promise;  // wait unitl promise is resolved
//       return res;
//     }else {
//       await Promise.reject(new Error('Something went wrong'))

//     }

// }
// myFunc().then((res) => console.log(res))
// .catch((err) => console.log(err))

// async with await & arrow functions 
// await response of the fetch call 
// only proceed once it's resolved 
// only proceed once second promise is resolved. 
const API_URL = `https://jsonplaceholder.typicode.com/users`;
async function getUsers() {
    const response = await fetch(API_URL);
    const results = await response.json();
    return results;
}
getUsers().then((users) => console.log(users))