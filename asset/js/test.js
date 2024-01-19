let clown = document.querySelector('#clown');
let scoredisplay = document.querySelector('#score');
let intervalTime = 1000; 
let score = 0;

function moveClown() {
    let maxX = window.innerWidth - clown.clientWidth;
    let maxY = window.innerHeight - clown.clientHeight;
    let newX = Math.floor(Math.random() * maxX);
    let newY = Math.floor(Math.random() * maxY);
    clown.style.left = `${newX}px`;
    clown.style.top = `${newY}px`;
  }
//   function updateScore() {
//     scoredisplay.innerHTML = score
// }
//   function handleClick() {
//     score++;
//     playClickEffect();
//     moveClown();
//     updateScore();
//   }


moveClown();

setInterval(moveClown, intervalTime);

