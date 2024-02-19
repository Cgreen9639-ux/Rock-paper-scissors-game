let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultDiv = document.getElementById('result');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateScore(result);
    displayResult(result, playerSelection, computerSelection);
  });
});

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'win';
  } else if (playerSelection === computerSelection) {
    return 'draw';
  } else {
    return 'lose';
  }
}

function updateScore(result) {
  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

function displayResult(result, playerSelection, computerSelection) {
  let message = '';
  switch (result) {
    case 'win':
      message = `You win! ${playerSelection} beats ${computerSelection}.`;
      break;
    case 'lose':
      message = `You lose! ${computerSelection} beats ${playerSelection}.`;
      break;
    case 'draw':
      message = `It's a draw! You both chose ${playerSelection}.`;
      break;
  }
  resultDiv.textContent = message;
}
