// Book constructor
// handles create book object




// =========================
// ES5 STYLE 
// =========================
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
// will contain prototype methods

function UI() {}

// add book to list
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    // create tr element (table row)
    const row = document.createElement('tr');
    // insert columns
    row.innerHTML = `
    <td>${book.title}</td> 
    <td>${book.author}</td> 
    <td>${book.isbn}</td> 
    <td><a href="" class="delete">x</td>
  `;

    list.appendChild(row);
};

// showAlert

UI.prototype.showAlert = function (message, className) {
    // create div
    const div = document.createElement('div');
    // add classname
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent & insert into dom
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form); // insert alert before div & form at top of page
    // timeout
    window.setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000); // 3 seconds
};

// delete book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
};

// clear fields

UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

// event listener for adding a book
document.getElementById('book-form').addEventListener('submit', function (e) {
    // get form values
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // instantiate book
    const book = new Book(title, author, isbn);

    // instantiate UI
    const ui = new UI();
    console.log(ui);

    // validation
    if (title === '' || author === '' || isbn === '') {
        // error alert element
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // console.log(ui)
        // add book to list
        ui.addBookToList(book);

        // show success
        ui.showAlert('Book submitted', 'success');

        // clear fields
        ui.clearFields();
    }
});

// event lisetener for delete item
document.getElementById('book-list').addEventListener('click', function (e) {
    e.preventDefault();
    const ui = new UI();
    // delete book
    ui.deleteBook(e.target);
    // show alert after deleting book
    ui.showAlert('Book Deleted ', 'success');
});
