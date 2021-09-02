/*
FUNCTIONS
https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99

1. A function is a reusable block of code that groups together a sequence of statements to perform a specific task.
2. To call a function in your code, you type the function name followed by parentheses.
3. This function call executes the function body, or all of the statements between the curly braces in the function declaration.
4. We can call the same function as many times as needed.
5. When declaring a function, we can specify its parameters. We use parameters as placeholders for information that will be passed to the function when it is called.
6. Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.
7. To pass back information from the function call, we use a return statement. To create a return statement, we use the return keyword followed by the value that we wish to return.
*/

//General ideas: at their broadest level, functions do the following:
//1) They take some input which the function will handle/process
//2) they process the input given to them
//3) they usually, but not always, return some value
//4) they can be invoked (used) as many times as we want, cutting down on code repetition

/*TYPES of Functions:
    -function declaration
    -function expression
    -anonymous function*/

//ex 1

function newFunc(num){
    return num + 1;
}

console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//ex 2
function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}
console.log(sentence('Jonathan', 'Huer'));
console.log(sentence('Renee', 'Godby'));
let superImportantSentence = sentence('Nicky', 'Disborough');
console.log(superImportantSentence);

//example 3: let's build a function that takes a complex type -- an array in this case, and console.logs each item in the input array

let arr = [1, true, {key: 'string'}, [false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10];

function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);

declaration();

function declaration(){
    console.log("I'm a Function Declaration.");
}

// Function expression: cannot be hoisted and are stored in a variable
// We use the variable name to run the function
let expression = function(){   //<-- an example of an anonymous function
    console.log("I'm a Function Expression.")
}
expression();

//Function Declaration as well
function myName(name){
    console.log(`My name is ${name}`);
}
myName("Renee");

//More examples
//example 1
function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

//example 2
function subtractTwoNumbers (firstNum, secondNum){
    console.log(firstNum-secondNum);
}
subtractTwoNumbers(5, 7);
subtractTwoNumbers(10, 3);

//example 3
function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91)); 

//example 4
function fullName (firstName, lastName){
    let myName = firstName + " " + lastName;
    return myName;
}
console.log(fullName ("Renee", "Godby"));

//example 5
function priceIndiana (quantity, price){
let totalPrice = 1.07 * quantity * price;
return totalPrice;
}
console.log(priceIndiana(18, 2));

//example 6
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  sayThanks('Cole');

  //example 7 Default parameters
  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  makeShoppingList('tortillas', 'ham');


   //example 8
  function monitorCount( rows, columns){
    return rows * columns;
  }
  const numOfMonitors = monitorCount(5, 4);
  console.log(numOfMonitors);

  //example 9
  function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200
  };
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost);

  //example 10 Arrow Functions
  const plantNeedsWater = function (day){ //const plantNeedsWater = (day) => {}
    if (day==='Wednesday'){
    return true;
    } else {
      return false;
    }
  };
  const waterCheck = plantNeedsWater('Tuesday');
    console.log(waterCheck);

  //const plantNeedsWater = day => day === 'Wednesday' ? true: false; ((concise body))

    //quiz question
  function greet(name){

      return "Hello " + name
  
  };
  var myName = "Jack";
  
  result = greet(myName);
  
  console.log(result);

  //ex 11

  function myCurrentAge (birthYear, currentYear){
    let years = currentYear - birthYear;
    return years;
  }
  console.log(myCurrentAge(1983, 2021));


  function helloWorld(){
    console.log('Hello, World!');
}






