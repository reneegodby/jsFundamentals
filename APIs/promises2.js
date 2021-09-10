/* Notes:
	1. written like synchronous code
    2. compatible with try/catch blocks
    3. avoids chaining .then statements
    4. async functions always return a promise
    5. function pauses on each await expression
    6. A non promise value is converted to 
       Promise.resolve(value) and then resolved

       Async and await both identify functions and expressions, respectively that return promises. Await, additionally, allows async code to be run as if it happens sequentially, guaranteeing that the await body of the code finishes before running later code. 

       https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
*/





// fetch('https://api.artic.edu/api/v1/artworks')    //fetch returns a promise
// .then(res => res.json())        //callback function in concise body returns a promise
// .then(json => console.log(json))

// async function slowResult(){
//     await fetch('https://api.artic.edu/api/v1/artworks')
//         .then(res => res.json())
//         .then(json => console.log (json))
//     console.log('this is a message!')
// }

// slowResult();       //calling function but won't happen immediately

async function slowResult(){
    await fetch('https://api.artic.edu/api/v1/artworks')
        .then(res => res.json())
        .then(json => {json.lolProperty = 'this is a random property!'; return json;})
        .then(json => console.log(json))
    console.log('this is a message!')
}

slowResult();