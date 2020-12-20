const closer = document.querySelectorAll(".close");
//console.log(closer);
Array.from(closer).forEach(function(c) {
  //console.log(c);
  c.addEventListener("click", function() {
    this.style.display = "none";
  });
});
