// General definition of hoisting:
// lifting something up.

// var is hoisted
// let is not
// function is hoisted

console.log(whenCanISeeThis);

var whenCanISeeThis = 'Right now';

console.log(whenCanISeeThis);

sayHello();

function sayHello () {
    console.log('hello');
}

// function expression

let someFunction = () => {
    console.log('I am a function expression');
}

someFunction()