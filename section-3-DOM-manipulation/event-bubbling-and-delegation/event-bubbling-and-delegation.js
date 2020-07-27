// EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', function (e) {
//     e.preventDefault()
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function (e) {
//     e.preventDefault()
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function (e) {
//     e.preventDefault()
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function (e) {
//     e.preventDefault()
//     console.log('col');
// });

// EVENT DELEGATION

// situation in which you would need to use event delegation

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    console.log(e.target);
    if (e.target.parentElement.className === 'delete-item secondary-content') {
    }
}
