// object.prototype
// person.prototype

// person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

// calculate age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// get full name prototype
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

// get DOB prototype
Person.prototype.getbirthday = function () {
    return `${this.birthday}`;
};

// gets married

Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
};

const john = new Person('john', 'doe', '8-12-90');
console.log(john.calculateAge());

const luke = new Person('luke', 'howsam', '05-06-99');
console.log(luke.calculateAge());

const mary = new Person('mary', 'doe', '05-06-87');
console.log(mary.getFullName());

const bob = new Person('bob', 'doe', '05-28-56');
console.log(bob.birthday);

// mary gets married
mary.getsMarried('smith');
console.log(mary.getFullName());



// hasOwnProperty  // returns true 
console.log(mary.hasOwnProperty('firstName'))

// returns false 
console.log(mary.hasOwnProperty('getFullName'))