const spaceVid = document.querySelector('#bgvid1');
const cloudVid = document.querySelector('#bgvid2');
const circle = document.querySelector('#btn');
// im using a boolean to determine if the element has been moved
let mover = true;
console.log(mover);

circle.onclick = function() {
  // when determining if a boolean is true, just use its name and nothing else
  if (mover) {
    this.style.left = '90vw';
    this.style.background = 'cadetblue';
    mover = false;
    cloudVid.style.opacity = 1;
  } else {
    this.style.left = '0';
    this.style.background = 'crimson';
    mover = true;
    cloudVid.style.opacity = 0;
  }
  console.log(mover);
}
