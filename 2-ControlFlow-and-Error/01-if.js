/*
IF CONDITIONALS

https://www.javascript.com/learn/conditionals
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

Conditionals check conditions in your program. They have the power to alter the state or flow of your application based on certain conditions being met or unmet, true or false.
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==
-There are three logical operators:
1. the and operator (&&)
2. the or operator (||)
3. the not operator, otherwise known as the bang operator (!)
*/

let isOn = true;

if (isOn == true){
    console.log('The light is on!');
}

if (isOn){ //same thing as above just shorthand
    console.log('The light is on, yay!');
}

let weather = 65;

if (weather < 70){
    console.log('Wear a jacket!')
}

let string = 'Tyler';

if (string === 'Tyler' || false){
    console.log('if statements and conditionals are powerful!');
}

//Practice

let vacationSpot = 'Beach';
if (vacationSpot = 'Beach')
console.log('Lets go to Jamaica!');

let favoriteMovie = typeof string;
if (favoriteMovie = 'The Usual Suspects');
console.log('Let\'s have movie night!');

let mood = 'I don\'t want to leave my house today';
if (mood = 'Go bowling!');
console.log ('Go without me!')

let toppings = 'pepperoni';
if (toppings = 'pepperoni' || 'mushrooms' || 'peppers');
console.log('I\'ll eat a slice!');

let weatherToday = 80;
if (weather > 75);
console.log('Let\s go to the pool!');




