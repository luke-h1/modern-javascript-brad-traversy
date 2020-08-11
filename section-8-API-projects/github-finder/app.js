import github from './Github'; 

// search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    e.preventDefault();
    const userText = e.target.value;
    if (userText !== '') {
        github.getUser(userText).then((data) => {
            console.log(data);
        });
    } else {
    }
});
