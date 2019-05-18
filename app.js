// Get DOM element
let playerAScore = document.querySelector('.player-a-score');
let playerBScore = document.querySelector('.player-b-score');
const scoreMessage = document.querySelector('.score-message > p');
const balls = document.getElementsByTagName('img');

// Loop through balls
function loopThroughBalls(){
  // iteration and added event listener
  for(let i = 0; i < balls.length; i++){
    balls[i].addEventListener('click', playGame);
  } 
}
loopThroughBalls();


// Created playGame function defined above. 
function playGame(){
  for (let i = 0; i < balls.length; i++) {
      // generate random numbers for every ball selection made
      let ballASelection = Math.floor(Math.random(balls[0]) * 11);
      let ballBSelection = Math.floor(Math.random(balls[1]) * 11);
      let ballCSelection = Math.floor(Math.random(balls[2]) * 11);
      // playerA random scores
      playerAScore.textContent = ballASelection
      playerAScore.textContent = ballBSelection
      playerAScore.textContent = ballCSelection
      // playerA random scores
      playerBScore.textContent = ballASelection
      playerBScore.textContent = ballBSelection
      playerBScore.textContent = ballCSelection   
  }
}
playGame();




