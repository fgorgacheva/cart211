// init our variable
let name = document.querySelector('#myText').value;
// console.log(name);
const displaymsg = document.querySelector('#display');
// console.log(displaymsg);

const checker = document.querySelector('#check');
checker.onclick = function() {
  myPassFunction();
}

function myPassFunction() {
  name = document.querySelector('#myText').value;

  if (name === 'Santo') {
    displaymsg.textContent = 'Welcome ' + name;
  } else if (name === 'Trinity') {
    displaymsg.textContent = 'Welcome ' + name + ', where is Neo?';
  } else {
    displaymsg.textContent = 'Beat it ' + name;
  }


}
