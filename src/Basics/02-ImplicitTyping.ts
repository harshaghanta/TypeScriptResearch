//Implicit Typing
var d = "testString";
//Below Line gives error
//d = 5;
d = "10";
var numbersColl = [5,6,7];
//Below line gives error
//numbersColl = [5, "Test"];
numbersColl = [7,8,9];
var tuple2 = [5, "Test"];
//Below Line gives error
// tuple1 = ["10","5"];
tuple2 = [5,""];
var obj = { Id : 1, Name : "Test" };
//Below Line gives error
//obj = { Id : 5, Name : 1};
obj = { Id : 5, Name : "1"};

function TestFunction() {
    return "Test";
}

var t1 = TestFunction();
var t2;
t2 = TestFunction();
//Below is allowed Since t2 type is not specified at declaration time it gets defined as any
t2 = 10;

var numberOrBool : number | boolean;
numberOrBool = 10;
numberOrBool = false;
//Below Line gives error
//numberOrBool = "Test";
//Below Line gives error
// numberOrBool = Test();
//Below Line gives error
//numberOrBool = [];

