// Constructor function

function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
      const diff = Date.now() - this.birthday.getTime(); 
      const ageDate = new Date(diff);  
      return Math.abs(ageDate.getUTCFullYear() - 1970); 
    };
}

const luke = new Person('luke', '05-06-1999');
console.log(luke);
console.log(luke.calculateAge())

// const luke = new Person('Luke', 21);
// const john = new Person('John', 9005);

// console.log(luke.age)
// console.log(john.age)

