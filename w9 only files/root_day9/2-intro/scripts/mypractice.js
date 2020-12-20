// this is a js comment

// Variables are containers that store values. You start by declaring a variable with the var (less recommended) or the let keyword, followed by the name you give to the variable:

let myString = 'Bob'; // String literal
console.log(myString);

let myNumber = 10; // Number
console.log(myNumber);

let myBoolean = true; // Boolean
console.log(myBoolean);

let myArray = [99,'Bob','Steve',10];
// Refer to each member of the array like this: myArray[0], myArray[1], ect.
console.log('the first var in the array is: ' +  myArray[1]);


//initialize some Variables
const myHeading = document.querySelector('#headDisplay');
const myImg = document.querySelector('#changeMe');
const myFigure = document.querySelector('figure');


myImg.onclick = function() {
  let mySrc = myImg.getAttribute('src');

  if (mySrc === 'img/night.jpg') {
    myImg.setAttribute('src','img/day.jpg');
    myFigure.style.width = '30%';
  }else{
    myImg.setAttribute('src','img/night.jpg');
    myFigure.style.width = '20%';
  }

}
