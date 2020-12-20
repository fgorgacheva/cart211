// https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

// initialize a variable ES6 introduced let and const
const myHeading = document.querySelector('#headDisplay');
myHeading.textContent = 'JavaScript';

// Variables are containers that store values. You start by declaring a variable with the var (less recommended) or the let keyword, followed by the name you give to the variable:

let myString = 'Bob'; // String
console.log(myString);

let myNumber = 10; // Number
console.log(myNumber);

let myBoolean = true; // Boolean
console.log(myBoolean);

let myArray = [99,'Bob','Steve',10];
// Refer to each member of the array like this: myArray[0], myArray[1], ect.
console.log(myArray[0]);
console.log(myArray[1]);


/* ====================== */
/* ====== OPERATORS ===== */
/* ====================== */

// ADDITION
// 6 + 9;
// 'Hello ' + 'world!';

// SUBTRACTION, MULTIPLY AND DEVIDE
// 9 - 3;
// 8 * 2; // multiply in JS is an asterisk
// 9 / 3; // divide is a forward slash

// ASSIGNMENT
// let myVariable = 'Bob';
// one = assigns values

// EQUALITY
// myVar === 4;
// IS MyVar EQUAL TO 4?

// NOT, DOES-NOT-EQUAL
// let myVariable = 3;
// myVariable !== 3;


/* ====================== */
/* ====== EVENTS ===== */
/* ====================== */

// document.querySelector('html').onclick = function() {
//     // alert('Ouch! Stop poking me!');
//     myHeading.textContent = 'Ouch! Stop poking me!';
// }



/* ===================================== */
/* ====== AN IMAGE CHANGER EXAMPLE ===== */
/* ===================================== */

let myImage = document.querySelector('#changeMe');
let myFigure = document.querySelector('figure');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    // if starts a conditional statement
    if(mySrc === 'img/night.jpg') {
      myImage.setAttribute('src','img/day.jpg');
      myHeading.textContent = 'Daytime!';
      myFigure.style.width = '30%';
    } else {
      myImage.setAttribute('src','img/night.jpg');
      myHeading.textContent = 'Nighttime!';
      myFigure.style.width = '20%';
    }
}
