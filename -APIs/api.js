//https://rapidapi.com/blog/how-to-use-an-api-with-javascript/

//eventListeners allow for a callback function once the specific event has been triggered on an html element.

const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);  //stops the default of the submit button event which makes the website refresh when you hit the submit button

function fetchSpace(e){         //The purpose of fetch() is to talk with a URL endpoint and grab data from that server.  fetch() returns a promise.
    e.preventDefault()  
    
    fetch(baseURL)      //asynchronous promise
        .then(result => result.json())          //takes callback function   
        .then(json => {
            console.log(json);
            displayRockets(json);       //gets called
         })
}

function displayRockets(rockets){       //gets defined
    rockets.forEach(r => {              //for each loop. r is each rocket
        let rocket = document.createElement('li');  //createElement() creates an HTML element and places it at the top of the body of your HTML
        rocket.innerText = r.name; 
        spaceShips.appendChild(rocket);
    })
}