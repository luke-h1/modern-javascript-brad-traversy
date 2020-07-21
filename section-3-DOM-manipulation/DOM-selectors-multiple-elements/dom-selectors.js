// let items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'hello world!';
const listItems = document
    .querySelector('ul')
    .getElementsByClassName('collection-item'); //only collection-items that are inside the ul
// attach to specific elements rather than completely global.
console.log(listItems);

// document.getElementsByTagName()
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'green';
lis[3].textContent = 'hello!';

// convert HTML collection into array:
// lis = Array.from(lis);
// lis.reverse();
// console.log(lis);
// lis.forEach(function (li, index) {
//     li.textContent = `${index}: hello!`
// });

// document.querySelectorAll()

const items = document.querySelectorAll('ul.collection li.collection-item');

console.log(items);

items.forEach(function (item, index) {
    item.textContent = `${index}: Hello!`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
    li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';
}
