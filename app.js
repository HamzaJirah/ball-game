// Get DOM element
const playerAScore = document.querySelector('.player-a-score');
const playerBScore = document.querySelector('.player-b-score');
const scoreMessage = document.querySelector('.score-message > p');
const balls = document.getElementsByTagName('img');

// Loop through balls and Add event listener
function loopThroughBalls(){
  let allBalls;
  for(let i = 0; i < balls.length; i++){
    allBalls = balls[i].addEventListener('click', playGame);
  }
  return allBalls;
}
 loopThroughBalls();

// playGame 
function playGame(){

}




