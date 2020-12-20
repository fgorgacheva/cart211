const closer = document.querySelectorAll(".close");
//console.log(closer);
Array.from(closer).forEach(function(c) {
  //console.log(c);
  c.addEventListener("click", function() {
    this.style.display = "none";
  });
});

// show function on one button
const trig = document.querySelector("#trigger");
trig.addEventListener("click", function() {
  //use the same array from the constant above
  Array.from(closer).forEach(function(c) {
    //change the display on each in the array
    c.style.display = "block";
  });
});
