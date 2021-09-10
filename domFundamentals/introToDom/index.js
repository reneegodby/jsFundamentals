// const header = document.getElementById('header');
// console.log(header);

// header.style.color = "pink";
// header.innerText = "Hello World";

// const aboutMe = document.getElementById('about-me');

// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList);

// errorList[1].innerText = "I changed error 2";

//Ex 1: for loop
// for (let i = 0; i< errorList.length; i++){       
//     errorList[i].style.color = "red"
// }

//Ex 2: for of loop
// for(error of errorList){
//     error.style.color = "green";
// }

//Ex 3: for each loop does not work

//errorList.forEach((error) => (error.style.color = "purple"));

//ex getElementsByTagName

// const tags = document.getElementsByTagName("p");
// console.log(tags);

// tags[0].innerText = "I changed the paragraph by using getElementsByTagName!"

// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

//change li to italic
// listItems[0].style.fontStyle ="italic";
// listItems[1].style.fontStyle ="italic";
//create for loop to loop through it instead of typing out each occurrence 

// for (let i = 0; i < listItems.length; i++){
//     listItems[i].style.fontStyle = "italic";
// }


const header = document.querySelector('#header');
console.log(header);

const errorList = document.querySelector(".error-list");
console.log(errorList);

const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)"); //copy selector from chrome
console.log(errorList2);

const headerTags = document.querySelectorAll('h1');
console.log(headerTags);

console.log(headerTags[1]);

//forEach loop
headerTags.forEach(h => {       //callback function
    h.style.color = "blue";
});

const listItems = document.querySelectorAll(".error-list")
console.log(listItems);

listItems.forEach(li => {
    li.style.fontStyle = "italic"
});