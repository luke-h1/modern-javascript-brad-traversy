import { http } from './http';
import { ui } from './ui';

// GET POSTS ON DOM LOAD
document.addEventListener('DOMContentLoaded', getPosts);

// LISTEN FOR POST
document.querySelector('.post-submit').addEventListener('click', submitPost);

// LISTEN FOR DELETE
document.querySelector('#posts').addEventListener('click', deletePost);

// GET POST
function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

// ADD A POST
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const data = {
    title,
    body,
  };
  // CREATE POST REQ
  http
    .post('http://localhost:3000/posts', data)
    .then((data) => {
      ui.showAlert('post added', 'alert alert-success');
      ui.clearFields();
      getPosts();
    })
    .catch((err) => console.log(err));
}

// DELETE A POST
function deletePost(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('delete')) { 
    const id = e.target.parentElement.dataset.id;  
    if(confirm('Delete Post?')){
      http.delete(`http://localhost:3000/posts/${id}`) 
        .then(data => {
          ui.showAlert('Post Deleted', 'alert alert-success');  
          getPosts();  
        })
        .catch(err => console.log(err)); 
        
    }
  }
}
