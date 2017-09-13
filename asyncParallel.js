var async = require("async");

// //With Array
var stack = [];

var functionOne = function(callback) {
    callback(null,"First Function Result");
}

var functionTwo = function(callback) {
    callback(null,"Second Function Result");
}

var functionThree = function(callback) {
    callback(null,"Third Function Result");
}

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

async.parallel(stack, function(err, result) {
    console.log("Async parallel with Array", result);
});

// With Object

var stackObject = {};

stackObject.userName = function(callback) {
    callback(null, "Bob");
}

stackObject.age = function(callback) {
    callback(null,"28");
}

stackObject.gender = function(callback) {
    callback(null,"Male");
}

async.parallel(stackObject, function(err, result) {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Async parallel with object", result);
});
