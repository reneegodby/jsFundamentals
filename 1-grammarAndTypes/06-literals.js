/*
LITERALS

1-grammarAndTypes
    06-literals.js

/*
Literals represent value in JS.
Literals are the literal value we give our variables.


*/
//variable declaration
let potato;
//String literal
//keyword
let potato = "My favorite food.";
// variable is potato; "my favorite food" is the value

//Numeric Literal
let x = 0;

//Boolean Literal
let y = true;

//Object Literal
let movie = {
    title: 'Elf', 
    rating: "PG",
    release: 'Nov 7th, 2003'
}

//Array Literal
let groceryList = ['apples', 'milk', 'bread', 'cheese'];

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//                    0           1       2           3           4
                 
console.log(weekDays.toString());
console.log(weekDays[3]);

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}
console.log(soup.c);

//array and object literals can hold primitive and 'complex' types (arrays, object, functions)
let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
//                        0       1       2       3           4               5
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);


let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', arr: [1,2,3], obj: {key: 'test'}, func: function(){return 'yes'}};
console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr);

