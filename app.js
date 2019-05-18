// Get DOM element
const playerAScore = document.querySelector('.player-a-score');
const playerBScore = document.querySelector('.player-b-score');
const scoreMessage = document.querySelector('.score-message > p');
const balls = document.getElementsByTagName('img');

// Add event listener to balls
balls.addEventListener('click', playGame);
for(let i = 0; i < balls.length; i++){
  console.log(balls[i]);
}


