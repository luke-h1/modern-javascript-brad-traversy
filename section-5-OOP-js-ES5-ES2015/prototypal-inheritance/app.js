// person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// greeting prototype method
Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('bob', 'smith');

// console.log(person1.greeting())

// customer constructor

function customer(firstname, lastname, phone, membership) {
    Person.call(this, firstname, lastname);
    this.phone = phone;
    this.membership = membership;
}

// inherit the person prototype methods
customer.prototype = Object.create(Person.prototype);

// make customer.prototype return customer()
customer.prototype.constructor = customer;

// create customer
const customer1 = new customer('Tom', 'smith', '555-555-555', 'Standard');
console.log(customer1);

// customer greeting overwrite
customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};

console.log(customer1.greeting());
