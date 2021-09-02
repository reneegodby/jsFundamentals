/* 
SCOPE
https://scotch.io/tutorials/understanding-scope-in-javascript

1-grammarAndTypes
    03-scope.js
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope
*/
// 'Example 1'
var x = 12; //this exists in the global scope

function scope(){ //this variable only exists within the local scope
    var x = 33;
    var y = 10;
    console.log(x);
}
scope(); //logs 33
// console.log(y); //gives error due to only existing in the local scope
console.log(x); //logs 12

// Example 2

var x =12;

function scope(){
    x = 33; //variable reassignment
    console.log(x);
}

scope()
console.log(x);

//Example 3

var x =1;

function scope(){
    var x = 2;
    function scope(){
        var x = 3;
        console.log(x); //3
    }
    scopeInner();
    console.log(x); //2
}
scope();
console.log(x); //1

//Example 4

var x = 12;

function scope(){
    var x = 33;
    if(true){
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

scope();
console.log(x);

//Example 5
var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x);
    }
    console.log(x); //45 bc VAR doesn't obey 'block' scope
}
scope();
console.log(x);