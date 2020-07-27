// set local storage item

// localStorage.setItem('name', 'Jhon');
// localStorage.setItem('age', '30');

// // set session storage item

// sessionStorage.setItem('name', 'John');

// // remove from storage
// localStorage.removeItem('name');

// // get from local storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(age);
// console.log(name);

// // clear local storage
// localStorage.clear();

// add task to local storage

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const task = document.getElementById('task').value;
    let tasks;

    if (localStorage.getItem('task') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('task saved');
});

// loop thru array: 
// 
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
    console.log(task);
});
