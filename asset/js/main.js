let clown = document.querySelector('#clown')
let intervalClown = null;
let mainWidth = document.querySelector('main').clientWidth
let mainHeight = document.querySelector('main').clientHeight
let scoreDisplay = document.querySelector('#score');
let score = 0;
let partyEasy = document.querySelector('#easy');
let partyMedium = document.querySelector('#medium');
let partyHard = document.querySelector('#hard');
clown.style.display= 'none';
scoreDisplay.style.display='none';
let replay = document.querySelector('#replay');
replay.style.display='none'


function startParty(difficult) {
  let time;
  switch (difficult) {

    case 1:
      time = 2000
      break;
  
    case 2:
      time = 1000
      break;

    case 3:
       time = 500
       break
  }
      attack()
      clown.style.display='block';
      partyEasy.style.display='none';
      partyMedium.style.display='none';
      partyHard.style.display='none';
      scoreDisplay.style.display='block';
      replay.style.display='none'
      

      intervalClown = setInterval(() => {
        let randX = randomize(0, (mainWidth - clown.clientWidth)) 
        let randY = randomize(0, (mainHeight - clown.clientHeight))
        clown.style.transform = `translate(${randX}px,${randY}px)`
        clown.style.transition = `transform linear 1s`
        console.log(randX,randY);
      }, time);
      
}

function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function attack() {
      score ++
      Result()
      if (score >= 15 ) {
        scoreDisplay.innerHTML = score + " Points Bien joué ! "
        replay.style.display='block'
        clown.style.display='none'
        }
        
}
attack()


function Result() {
  scoreDisplay.innerHTML = score -2 + " POINTS";
  }
Result()

function replayGame(replayGame) {
      score = +1;
      clown.style.display='none';
      partyEasy.style.display='block';
      partyMedium.style.display='block';
      partyHard.style.display='block';
      scoreDisplay.style.display='none';
      replay.style.display='none'
}

