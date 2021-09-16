//A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
//A promise allows Javascript to handle 'asynchronous' code, which takes an indeterminate amount of time. Once the async process has run, the promise resolves or rejects.

//https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1
//https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


// setTimeout(() => console.log('this is a test of timeouts!'), 1000);

let promise = new Promise(function(resolve, reject){        //callback function inside promise
    setTimeout(() => {
        if (false){     //true= success, false= failure
            resolve('success');
        } else {
            reject('failure');
        }
    }, 3000);   //waits 3 seconds and prints 3rd
})

promise         //.then handles a resolved promise and processes the value passed along from the promise. .catch handles a 
                //rejected promise and the value passed to it.
    .then(blah => console.log(blah))   //blah - 'success'
    .catch(err => console.log(err));    //err -'failure'


console.log('this code is after our promise  .then chain!'); //prints first the success/failure

function playFunc(){
    return 5;
}

console.log(playFunc()); //prints second