const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    },
};

const mary = Object.create(personPrototypes);
mary.firstName = 'mary';
mary.lastName = 'williams';
mary.age = 30;
console.log(mary.greeting());
mary.getsMarried('Thompson')
console.log(mary.greeting());


const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'}, 
  lastName: {value: 'traversy'}, 
  age: {value: '36'}   
})

console.log(brad)

console.log(brad.greeting())