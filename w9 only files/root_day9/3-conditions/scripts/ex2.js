const trig = document.querySelector('#trigger');
const closer = document.querySelector('#close');

trig.addEventListener('click', showFunction);
closer.addEventListener('click', hideFunction);

function showFunction() {
  document.querySelector("#display_me").style.opacity = 1;
}
function hideFunction() {
  document.querySelector("#display_me").style.opacity = 0;
}
