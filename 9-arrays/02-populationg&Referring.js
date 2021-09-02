/*
Arrays
*/
//What is an array?
//has [] brackets
//can hold multiple data types
//arrays can list data types in an ordered, numbered way

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

for (f of food){
    console.log(f + ' is amazing!');
}

//array methods