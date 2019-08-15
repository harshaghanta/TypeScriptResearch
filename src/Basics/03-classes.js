var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //Multiple constructors are not Allowed
    function Person(firstName, lastName) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.getLastName = function () { return _this.lastName; };
    }
    Person.prototype.greet = function () {
        return "Hello";
    };
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(firstName: string, lastName : string) {
    //     super(firstName, lastName);
    // }
    Programmer.prototype.greet = function () {
        var age = this.age;
        return "Hello World";
    };
    Programmer.prototype.greetLikeNormalPeople = function () {
        return _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
var person;
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
