let val1;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val1 = listItem;
val1 = list;


// get child nodes
val1 = list.childNodes;


val1 = list.childNodes[3].nodeType // list out type of node for element on index 3 

va1 = list.childNodes[0];

va1 = list.childNodes[0].nodeName;

va1 = list.childNodes[0].nodeType;


// get children element nodes

val1 = list.children; 
val1 = list.children[1];
val1 = list.children[1].textContent = 'hello worlllllld!'


// children of children 
val1 = list.children[3].children[0].id = 'test-link';


// first child 
val1 = list.firstChild;

// first element child 
val1 = list.firstElementChild; 


// last child 
val1 = list.lastChild; 

// last element child 
val1 = list.lastElementChild; 


// count child elements 
val1 = list.childElementCount




// get parent node: 
val1 = listItem.parentNode 



// get parent of parent element 
val1 = listItem.parentElement.parentElement;

// get next sibling 

val1 = listItem.nextSibling

val1 = listItem.nextElementSibling

// get previous sibling 
val1 = listItem.previousElementSibling  // null because first li item. 
console.log(val1)