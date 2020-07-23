const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
taskInput.value = ''; // clear form input

form.addEventListener('submit', runEvent);

// Key down // when a key is pressed on the input element 
taskInput.addEventListener('keydown', runEvent); 

// Key up // when a key is released on the input element
taskInput.addEventListener('keyup', runEvent); 

//  focus  // when you click inside of the input
taskInput.addEventListener('focus', runEvent);

// blur // when you click in and then click out of the input
taskInput.addEventListener('blur', runEvent);

// cut  // when a user reomves text from  the input.
taskInput.addEventListener('cut', runEvent);

// paste //when a user pastes text into the input.
taskInput.addEventListener('paste', runEvent);

// input event. Listens for all input.
taskInput.addEventListener('input', runEvent);

// change event // logs when the user changes the value of the select element
select.addEventListener('change', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value); // logs everything that is typed.
    heading.innerText = e.target.value; //displays input on h5
    console.log(taskInput.value); // get input value
}
