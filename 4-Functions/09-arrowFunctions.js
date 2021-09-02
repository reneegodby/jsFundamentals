/*
ARROW FUNCTIONS
https://javascript.info/arrow-functions-basics

/*
-Also called Fat Arrow Functions
-They are NOT (function) declarations 
-Do NOT get hoisted
-Two types:
    -Concise Body --> Return is automatic
    -Block Body --> Return is NOT automatic
-A concise way to write function expressions
 */


//normal function declaration for named function
function coffee(){
    return 'coffee is good';
}

//normal function expression for unnamed function
let tea = function(){   //anonymous function
    return 'tea is healthy';
}

console.log(coffee()); //to call or invoke a function you need ()
console.log(tea());

//arrow functions are ALWAYS anonymous and cannot be hoisted
//arrow function expression:
let hotChocolate = () => {       // arrow replaces the word "function"
    return 'hot chocolate is king';
}

console.log(hotChocolate()); //call the function by using the variable with parentheses at the end

let animals = (kittens, puppies) => {
    return `I have ${kittens} cat(s) and ${puppies} dog(s)`};
    console.log(animals(3, 2))
    console.log(animals(0, 0));

//concise vs. block body for arrow functions

//concise body

//ex 1
let apples = x => `There are ${x} apples`; //removes the word function and return and curly braces
console.log(apples(10));

//ex 2
let speak = (name) => console.log(`The ${name} goes woof!`);

speak('dog');

//ex 3
let firstName = "Peter";
let lastName = "Parker";

let concatName = (first, last) => `${first} ${last}`;
let fullName = concatName(firstName, lastName);
console.log(fullName);

//block body
//ex 1
let bananas = (x) => {
    return `There are ${x} bananas`;
}
console.log(bananas(5));

//return must be explicitly written in a block body arrow function
//ex 2
let func = () => 'hi';

console.log(func());

let secondFunc = () => 'hi'; //keep it all on one line

console.log(secondFunc())

//ex 3
let speakAgain = name => {
    console.log(`The ${name} goes woof!`);
}
speakAgain('dog');

//ex 4
let concat = (first, last) => {
    return `${first} ${last}`
}

let newFullName =concat(firstName, lastName);
console.log(newFullName);

//ex 5
let x = 27;
let y = 47;

let sum = (num1, num2) => {
    return num1 + num2
}
let returnedValue = sum(x, y);
console.log(returnedValue);
