const http = new easyHTTP();

// GET posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if(err){
//     console.log(err);
//   }else {
//     console.log(posts);
// }});

// get SINGLE POST
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
//   if(err){
//     console.log(err);
//   }else {
//     console.log(post);
// }});

// POST REQUEST
const data = {
    userId: 1, 
    title: 'custom post',
    body: 'this is a custom post',
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if (err){
//     console.log(err); 
//   }else  { 
//     console.log(post); 
//   } 

// });



// PUT REQUEST 
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
//   if (err){
//     console.log(err)
//   }else { 
//     console.log(post)
//   }
// });


// DELETE REQUEST 
http.delete('https://jsonplaceholder.typicode.com/posts/5', function (err, response) {
  if(err){
    console.log(err);
  }else {
    console.log(response);
}});
