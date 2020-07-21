// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('hello!!!');
// });

// Event target element

val1 = e.target;
val1 = e.target.id;
val1 = e.target.className;
val1 = e.target.classList;

// event type

val1 = e.type; // can see what type of event it was

// timestamp
val1 = e.timestamp; // get timestamp

// coordinates relative to the window. Y axis = vertical axis
val1 = e.clientY;

// x axis = horizontal axis
val1 = e.clientX;

// coords event relative to the element
val1 = e.offsetY; //vertical
val1 = e.offsetX; //horizontal

// example event listeners (from other projects):

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});
