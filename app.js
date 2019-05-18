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
function playGame(e){
  for (let i = 0; i < balls.length; i++) {
      let ballASelection = Math.floor(Math.random(balls[0]) * 11);
      let ballBSelection = Math.floor(Math.random(balls[1]) * 11);
      let ballCSelection = Math.floor(Math.random(balls[2]) * 11);
      playerAScore.textContent = ballASelection
      playerAScore.textContent = ballBSelection
      playerAScore.textContent = ballCSelection
      
  }
}
playGame();




