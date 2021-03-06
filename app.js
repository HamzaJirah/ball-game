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
      // generate random numbers for every ball selection by Player A
      let playerA_BallA = Math.floor(Math.random(balls[0]) * 11);
      let playerA_BallB = Math.floor(Math.random(balls[1]) * 11);
      let playerA_BallC = Math.floor(Math.random(balls[2]) * 11);
      // playerA random scores from the three balls
      let playerA_Ball_A_Score = playerAScore.textContent = Number(playerA_BallA);
      let playerA_Ball_B_Score = playerAScore.textContent = playerA_BallB;
      let playerA_Ball_C_Score = playerAScore.textContent = playerA_BallC;
      // generate random numbers for every ball selection by Player B
      let playerB_BallA = Math.floor(Math.random(balls[0]) * 11);
      let playerB_BallB = Math.floor(Math.random(balls[1]) * 11);
      let playerB_BallC = Math.floor(Math.random(balls[2]) * 11);
      // playerA random scores from the three balls
      let playerB_Ball_A_Score = playerBScore.textContent = playerB_BallA;
      let playerB_Ball_B_Score = playerBScore.textContent = playerB_BallB;
      let playerB_Ball_C_Score = playerBScore.textContent = playerB_BallC;
      // Compare player A and player B scores when Ball A is selected
      
      
  }
}
playGame();




