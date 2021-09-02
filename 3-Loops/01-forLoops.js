/*
LOOPS
https://www.digitalocean.com/community/tutorials/for-loops-for-of-loops-and-for-in-loops-in-javascript

3-loops
    01-forLoops.js

    A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached.
*/

/*
Loops offer a quick and easy way to do something repeatedly

There are many different kinds of loops but they all do roughly the same thing:
    For statement
    do while
    while
    labeled
    break
    continue
    for in
    for of
    .forEach
    .map
*/

//Loop structure:
//a) creation of an indexing variable //let i = 0//
//b) a run/stopping condition //i <= 10//
//c) change to the indexing variable //i++//

//count to 10 from 0 and log the numbers:
for (let i = 0; i <= 10; i++){
    console.log(i);
}

//loops can run infinitely
// for (let i = 0; ; i++){
//     console.log(i);
// }

/*Loops allow us to repeatedly execute a block of code until a condition is met.
1.  initialExpression sets the starting value of a loop control variable (LCV).  In the example following, i is the LCV.
2. condition is evaluated, if true, stay in the loop, otherwise exit the loop. condition is i<= 10.
3. incrementExpression updates the LCV.  i++ adds 1 to i.
ex: for (let i = 1, i <= 10; i++){
    console.log("Number:", i);
}*/

//counts to -25 by -3, starting from 2, logs the numbers

for (let i = 2; i >= -25; i = i -3){
    console.log(i);
}

//display the letters in a name individually
let name = 'Kinkade';

for (let i =0; i < name.length; i++){
    console.log(name[i]);//[] is used in arrays
}

//for loops can use lots of variables:
let start = 2;
let stop = Math.floor(Math.random()*30); //random gives us a number between 0 and 1// floor shaves off decimals//
let increment = 3;

for (let i = start; i <= stop; i = i + increment){
    console.log(i);
}

// codecademy ex

const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}