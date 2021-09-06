/*
Arrays
https://www.w3schools.com/jsref/jsref_obj_array.asp
*/
//What is an array?
//has [] brackets
//can hold multiple data types
//arrays can list data types in an ordered, numbered way
//How do we access an individual value within an array? Square bracket notation

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:    0         1           2       3   4   5       6
console.log(typeof students)//typeof doesn't tell me my variable is an array -> object
console.log(students instanceof Array);//Instanceof tells me my array is an array
console.log(students[2]);
console.log(students[6]);

let name = students[6][1];
console.log(`Hello ${name}, you look nice today.`);

//recall for-of loop -> gives the values of the array
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// for (f of food){     //where did f come from?
//     console.log(f + ' is amazing!');
// }

//Array Methods
//https://www.w3schools.com/js/js_array_methods.asp

food.push('Pizza'); //.push allows us to add to the end of an existing array 
console.log(food);
food.splice(1, 1, 'Bananas'); //.spice inserts, removes and replaces elements
console.log(food);
food.splice(2, 0, 'Sweet Potato Pie');
console.log(food);
food.pop(); //removes the last element of an array
console.log(food);

food = food.slice(2, 4); //the first number is the first element to slice from the array, while the second number is the stop position(not to be included)
console.log(food);

//forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers. The forEach array method takes multiple parameters.  Two parameters you may use in a forEach callback include an index variable and an element value variable.

food.forEach((f) => console.log(f)); //callback function uses an existing function inside it

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}`);
    
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];
movies.push('The Force Awakens');
console.log(movies);
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');//want to change the movie in position 3, remove 1 item with "blah"

movies.forEach(movie => console.log(movie)); //where did movie come from?
console.log(movies.length);

//let's do the following with an array:
//we will check if we are working with an array
//flip the values within the array(what was in index 4, is now in 0, 3 to 1, etc)
//using a method only, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log (numbers));
}



