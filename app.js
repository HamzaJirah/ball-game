// Get DOM element
const playerAScore = document.querySelector('.player-a-score');
const playerBScore = document.querySelector('.player-b-score');
const scoreMessage = document.querySelector('.score-message > p');
const balls = document.getElementsByTagName('img');

// Loop through balls and Add event listener
function loopThroughBalls(){
  for(let i = 0; i < balls.length; i++){
    balls[i].addEventListener('click', playGame);
  }
}
loopThroughBalls();

// playGame 
function playGame(){
  
}




