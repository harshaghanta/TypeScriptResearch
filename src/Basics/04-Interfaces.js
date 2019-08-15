var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Test;
}());
var p1 = new Test();
var obj1 = {
    firstName: "Test",
    lastName: "Teest",
    getFullName: function () { return "Test"; }
};
//Allowed as long as the RHS has all the properties matching on the LHS
p1 = obj1;
