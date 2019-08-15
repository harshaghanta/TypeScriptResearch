var fn = () => "Hello  World";
//Basic DataTypes
var a : number;
var b : boolean;
var c : string;
//Arrays
var numbers : number[];
//Tuples
var tuple11 : [number, string];  
//Functions & OptionalParameters
function test(a: number, b: number, c :number = 5,  d?: number) : number{
    if(d !== undefined) {
        console.log('d value is :' + d);
    }
    return a + b + c;
}



a = 10;
b = true;
c = 'test';
numbers = [1,2,3];
tuple11 = [1,'test'];
var sum = test(1,2,3);
console.log(sum);
sum = test(1,2);
console.log(sum);
sum = test(1,2,3,4);
console.log(sum);