// Define UI variables:
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
    form.addEventListener('submit', addTask); // add task event
    taskList.addEventListener('click', removeTask); // remove task event
    clearBtn.addEventListener('click', clearTasks); // clear task event
}



// add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('add a task');
    }
    const li = document.createElement('li'); // create LI
    li.className = 'collection-item'; // add classname to LI
    li.appendChild(document.createTextNode(taskInput.value)); // create text node and append to li
    const link = document.createElement('a'); // create new link element
    link.className = 'delete-item secondary-content'; // add classname
    link.innerHTML = '<i class="fa fa-remove"</i>'; // add icon html (x)
    li.appendChild(link); // append link to li
    taskList.appendChild(li); // append li to u
    taskInput.value = ''; // clear input
    e.preventDefault();
    storeTaskInLocalStorage(taskInput.value); // store in local storage
}

// store task

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// if(confirm('are you sure?')){

// removes li
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

// clear task function
function clearTasks() {
    // taskList.innerHTML = '';
    // while loop:
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

