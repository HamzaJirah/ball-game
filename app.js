// Get DOM element
let playerAScore = document.querySelector('.player-a-score');
let playerBScore = document.querySelector('.player-b-score');
const scoreMessage = document.querySelector('.score-message > p');
const balls = document.getElementsByTagName('img');

// Loop through balls and Add event listener
function loopThroughBalls(){
  // let allBalls;
  for(let i = 0; i < balls.length; i++){
    balls[i].addEventListener('click', playGame);
  }
}
loopThroughBalls();


// playGame 
function playGame(){
  let  
}




