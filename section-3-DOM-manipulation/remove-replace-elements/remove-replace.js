// replace element

// create element
const newHeading = document.createElement('h2');

// add id
newHeading.id = 'task-title';

// new text node
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('task-title');

// parent
const cardAction = document.querySelector('.card-action');

// replace
cardAction.replaceChild(newHeading, oldHeading);

// remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item:
lis[0].remove();

// remove child element
list.removeChild(lis[3]);

// classes 
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val1;
val1 = link.className;
val1 = link.classList;
val1 = link.classList[0];

//  add class of test to the first li.children (at index 0)
link.classList.add('test');

//  remove class of test from the first li.chidren (at index 0)
link.classList.remove('test');
val1 = link;


// attributes:
val1 = link.getAttribute('href'); //get href 

val1 = link.setAttribute('href', 'https://duckduckgo.com' ) //set new href 

val1 = link.hasAttribute('href'); // returns true as their is a href set there 
val1 = link.hasAttribute('title'); // returns false as their is no title attribute set
link.setAttribute('title', 'helloworrlllld!') // now returns true as a title has been set 
console.log(link)

link.removeAttribute('title'); //remove title attribute 
// add title attribute 

console.log(val1)