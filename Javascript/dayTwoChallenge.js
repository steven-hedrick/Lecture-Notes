// CHALLENGE 1
// Who's name is longer?
​
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
*/

// to create a variable, use var or let
// var is legacy
// let is what you should use
let steven = "Steven";
let chyna = "Chyna";

console.log(steven.length);
console.log(chyna.length);
​
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/

if (steven.length > chyna.length) {
    console.log('${ steven } is longer than ${ chyna }');
} else {
console.log('${ chyna } is longer than ${ steven }');
}
​
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/
Collapse


let myNameLength = steven.length;
let myOtherName = chyna.length;

if (steven.lenth > chyna.length) {
    console.log('${ steven } is longer than ${ chyna } by ${ myNameLength } characters');
}



// CHALLENGE 2
// Types Challenge
​
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/
​
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let myVariable = {
    firstValue: "I am a string",
    secondValue: 9001,
    thirdValue: false,
    fourthValue: {}
}

let valueToCheck = myVariable.potato;

//typeof -> tells you the TYPE of something
//if it is a string -> console.log('It is a STRING')
if (typeof valueToCheck === "string") {
    console.log("It is a STRING");
} else if (typeof valueToCheck === "number") {
    console.log("It is a NUMBER");
} else if (typeof valueToCheck === "boolean") {
    console.log("it os a BOOL");
} else if (typeof valueToCheck === "object") {
    console.log("It is an OBJECT");
} else {
    console.log("Who Are you??");
}
