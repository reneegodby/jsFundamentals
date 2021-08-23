//IF ELSE

let weather = 75;

if (weather < 70){
    console.log('wear a jacket');
} else {
    console.log('No jacket necessary!');
}

//you can blend complex conditionals and if-else statements based upon your need:
if (weather > 70 && typeof weather === 'number'){
    console.log('This weather is amazing!');
} else{
    console.log('Either the temperature is cool, the variable is not a string, or both');
}

//ELSE IF

//if-elseif statement can be chained

let age = 30;

if (age >= 25){
    console.log('Yay! you can rent a car!');
} else if (age >= 21){
    console.log('Yay! you can drink!');
} else if (age >= 18){
    console.log('Yay! You can vote!');
} else {
    console.log('Sorry, you are too young to do anything fun');
}

//PRACTICE

let elevatorUp = true;
let elevatorDown = true;
let elevatorBroken = true;
let elevatorStuckWhileWeAreOnIt = true;
let elevatorNumber = 13;
if (elevatorUp === true) {
    console.log('Going up');
} else{
    console.log('Going down');
}
if (elevatorBroken = true) {
    console.log("Bummer. Let's take the stairs.")
} else{
    console.log('Which floor?')
}
if (elevatorStuckWhileWeAreOnIt = true) {
    console.log("Oh no! We're stuck!")        
} else{
    console.log("This elevator is fast.");
}

//test