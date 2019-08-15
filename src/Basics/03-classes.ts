class Person {

    protected age : number;

    //Multiple constructors are not Allowed
    constructor(private readonly firstName : string, private readonly lastName: string) {
        
    }

    greet() {
        return "Hello";
    }

    getFullName() : string {
        return this.firstName + " " + this.lastName;
    }

    getFirstName()  {
        return this.firstName;
    }

    getLastName = () =>  this.lastName;
    
}

class Programmer extends Person {
    // constructor(firstName: string, lastName : string) {
    //     super(firstName, lastName);
    // }
    greet() {
        let age = this.age;
        return "Hello World";   
    }

    greetLikeNormalPeople() {
        return super.greet();
    }
}

var person : Person;
person = new Person("Sri Harsha", "Ghanta");
//Below Line gives an error
// person = "Test";

console.log(person);
//Below Line gives an error as Age is protected
//person.age = 38;
console.log(person.getFullName());
console.log(person.getLastName());

var programmer = new Programmer("Sri Harsha", "Ghanta");
console.log(programmer.greet());
console.log(programmer.greetLikeNormalPeople());
