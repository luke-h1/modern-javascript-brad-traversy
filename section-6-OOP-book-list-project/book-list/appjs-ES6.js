class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${book.title}</td> 
      <td>${book.author}</td> 
      <td>${book.isbn}</td> 
      <td><a href="#" class="delete">X</a></td>  
      `;

        list.appendChild(row);
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form); // insert alert before div & form at top of page
        window.setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000); // set timeout for 3 seconds
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// LOCAL STORAGE CLASS

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();
        books.forEach((book) => {
            const ui = new UI();
            // add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                console.log(index);
                books.splice(index, 1); // replaces the [i] with nothing (1 = replace )
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}
// DOM LOAD EVENT
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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

        // add book to local storage
        Store.addBook(book);

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

    // remove from local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent); // get isbn num
    // show alert after deleting book
    ui.showAlert('Book Deleted ', 'success');
});
