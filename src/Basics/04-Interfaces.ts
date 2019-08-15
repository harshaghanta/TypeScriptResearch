interface IPerson {
    firstName : string;
    lastName : string;
    getFullName() : string 
}

class Test implements IPerson {
    
    firstName: string;
    lastName: string;
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

let p1 : IPerson = new Test();
let obj1 = {
    firstName : "Test",
    lastName :  "Teest",
    getFullName : () => "Test"
}

//Allowed as long as the RHS has all the properties matching on the LHS
p1 = obj1;
