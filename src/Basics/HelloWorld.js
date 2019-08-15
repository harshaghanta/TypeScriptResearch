var fn = function () { return "Hello  World"; };
//Basic DataTypes
var a;
var b;
var c;
//Arrays
var numbers;
//Tuples
var tuple11;
//Functions & OptionalParameters
function test(a, b, c, d) {
    if (c === void 0) { c = 5; }
    if (d !== undefined) {
        console.log('d value is :' + d);
    }
    return a + b + c;
}
a = 10;
b = true;
c = 'test';
numbers = [1, 2, 3];
tuple11 = [1, 'test'];
var sum = test(1, 2, 3);
console.log(sum);
sum = test(1, 2);
console.log(sum);
sum = test(1, 2, 3, 4);
console.log(sum);
