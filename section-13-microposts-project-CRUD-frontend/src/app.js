import { http } from './http';
import { ui } from './ui';

// GET POSTS ON DOM LOAD
document.addEventListener('DOMContentLoaded', getPosts);

// LISTEN FOR POST
document.querySelector('.post-submit').addEventListener('click', submitPost);

// LISTEN FOR DELETE
document.querySelector('#posts').addEventListener('click', deletePost);

// LISTEN FOR EDIT STATE
document.querySelector('#posts').addEventListener('click', enableEdit);

// LISTEN FOR CANCEL
document.querySelector('.card-form').addEventListener('click', cancelEdit);

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
  const id = document.querySelector('#id').value;
  const data = {
    title,
    body,
  };

  if (title === '' || body === '') {
    ui.showAlert(' Please Enter a valid value', 'alert alert-danger');
  } else {
    if (id === '') {
      http
        .post('http://localhost:3000/posts', data)
        .then((data) => {
          ui.showAlert('post added', 'alert alert-success');
          ui.clearFields();
          getPosts();
        })
        .catch((err) => console.log(err));
    } else {
      // PUT REQ
      http
        .put(`http://localhost:3000/posts/${id}`, data)
        .then((data) => {
          ui.showAlert('Post Updated', 'alert alert-success');
          ui.changeFormState('add');
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}

// DELETE A POST
function deletePost(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm('Delete Post?')) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert('Post Deleted', 'alert alert-success');
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}

// ENABLE EDIT STATE
function enableEdit(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const data = {
      id,
      title,
      body,
    };
    ui.fillForm(data);
  }
}

// CANCEL EDIT STATE
function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
  e.preventDefault();
}
