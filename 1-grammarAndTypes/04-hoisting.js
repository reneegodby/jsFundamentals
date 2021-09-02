/*
HOISTING
https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1

/*
Two General Phases when we run code:
- Creation Phase:
    Any variable (let, var, const) and function in our code are stored to memory.
-Execution Phase:
    Values are assigned to the variable and functions that were stored to memory during the create phase

The left of the assignment operator (=) is stored to memory, right side is assigned during execution. 
*/

/*
(    create  )  (execute)
let variable = value;
*/ 

//1. 'num' has been hoisted - JS recognized our variable, it knows it exists
//2. JS reads top to bottom, when we called our console.log first, it doesn't get the value of 'num'
// console.log(num);
// let num = 12;

/*Not a best practice!

1 grammarAndTypes
    04-hoisting.js
*/

//Example 1
console.log(scissors);
var scissors = 'blue'; 

//example 1 breakdown:
var scissors; //variable gets hoisted to the top
console.log(scissors);
scissors = 'blue';

//example 2:
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

//breakdown of ex 2

function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();

sayHi();

function sayHi() {
    console.log('Hello');
    let hi = 'Hola';
    console.log(hi);
}

varFunc();

let varFunc = function(){
    console.log('Anything');
}