
//  array of game options
// var to keep track of scores
var options = ['rock', 'paper', 'scissors'],
    r = options[0], p = options[1], s = options[2],
    playerScore = 0,
    computerScore = 0,
    playerChoice,
    computerChoice,
    gameStatus,
    tie = 'Game is a Tie',
    playerWon = 'You Won',
    computerWon = 'You Lost';

// function to generate random computer choice
function randomChoice() {
  // Function to return even distrobution of numbees between 0 and 2
  return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
}

//activate game function on click of even
$('button').click(function() {
  playerChoice = $(this).attr('id');
  console.log( "Player Choice: " + playerChoice);
  computerChoice = options[randomChoice()];
  console.log('Compuer Choice: ' + computerChoice);

  calculateWinner();
  updateScore();
});

function calculateWinner() {
  if (playerChoice === computerChoice) {
    gameStatus = tie;
  } else if (playerChoice === r && computerChoice === s) {
    playerScore = playerScore + 1;
    gameStatus = playerWon;
  } else if (playerChoice === r && computerChoice === p) {
    computerScore = computerScore + 1;
    gameStatus = computerWon;
  } else if (playerChoice === s && computerChoice === p) {
    playerScore = playerScore + 1;
    gameStatus = playerWon;
  } else if (playerChoice === s && computerChoice === r) {
    computerScore = computerScore + 1;
    gameStatus = computerWon;
  } else if (playerChoice === p && computerChoice === r) {
    playerScore = playerScore + 1;
    gameStatus = playerWon;
  } else if (playerChoice === p && computerChoice === s) {
    computerScore = computerScore + 1;
    gameStatus = computerWon;
  }

}

function updateScore() {
  $('#humanScore').text(playerScore);
  $('#computerScore').text(computerScore);
  $('#status').text(gameStatus);
  $('#computerSelect').text('Computer selected ' + computerChoice);
}
