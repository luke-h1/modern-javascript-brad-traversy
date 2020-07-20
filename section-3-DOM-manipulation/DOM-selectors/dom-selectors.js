document.getElementById;

// get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// define variable to clean up code
const taskTitle = document.getElementById('task-title');
// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';

//change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red;">Task List</span>';

console.log(document.querySelector('.card-title'));

console.log(document.querySelector('h5')); // gets first h5 it can find

document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'hello world!';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
