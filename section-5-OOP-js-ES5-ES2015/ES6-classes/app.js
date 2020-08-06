class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello ${this.firstName}, ${this.lastName} welcome`;
    } 

    calculateAge(){
      const diff = Date.now() - this.birthday.getTime(); 
      const ageDate = new Date(diff); 
      return Math.abs(ageDate.getUTCFullYear() - 1970); 
    }

    getsMarried(newLastName){
      this.lastName = newLastName; 

    } 

    static addNumbers(x, y){
      return x + y 
    }
}

const mary = new Person('mary', 'williams', '11-13-1980');
console.log(mary);
console.log(mary.greeting());
console.log(mary);
console.log(mary.calculateAge())
mary.getsMarried('bob'); 
console.log(mary); 

console.log(Person.addNumbers(5, 5 ))