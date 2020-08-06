class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        // just for customer class
        this.phone = phone;
        this.membership = membership;
    } 

    static getMembershipCost(){
      return 500;
    }
}

const john = new customer('john', 'doe', '555-555-555', 'standard') 
console.log(john.greeting())
console.log(customer.getMembershipCost());
console.log(john);
