function getComputerMove() {
  // Randomly select a move for the computer.
  let moveList = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random(moveList) * moveList.length);
  return moveList[randomChoice]
}

function getPlayerMove() {
  // Ask the player what they would like to choose for their move.
  let playerChoice = prompt("Would you like to pick 'Rock', 'Paper' or 'Scissors'?").toLowerCase();
  if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
    return playerChoice
  } else {
    alert(`"${playerChoice}" is not a valid choice, please choose again.`);
    return getPlayerMove()
  }
}

function getWinner(playerMove, computerMove) {
  // Determine and return who the winner is.
  if (playerMove == "rock" && computerMove == "scissors") {
    return "player"
  } else if (playerMove == "scissors" && computerMove == "paper") {
    return "player"
  } else if (playerMove == "paper" && computerMove == "rock") {
    return "player"
  } else if (playerMove == computerMove) {
    return "draw"
  } else {
    return "computer"
  }
}

function alertWinner(winner, playerSelection, computerSelection) {
  // Alert player as to who has won the round.

  // Formatting the player and computer move strings to have a capital letter.
  let computerChoice = computerSelection[0].toLocaleUpperCase() +
      computerSelection.slice(1);
  let playerChoice = playerSelection[0].toUpperCase() +
      playerSelection.slice(1);
  // Alert logic.
  if (winner == "player") {
    alert(`You win! ${playerChoice} beats ${computerChoice}.`);
  } else if (winner == "computer") {
    alert(`You lose! ${computerChoice} beats ${playerChoice}.`);
  } else if (winner == "draw") {
    alert("This game is a draw!");
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(move) {
  // Play one round Rock, Paper, Scissors.
  let playerSelection = move;
  let computerSelection = getComputerMove();

  // Track what each play played in the console.
  // console.log(`Player: ${playerSelection} - Computer: ${computerSelection}.`);

  // Variable returns who the winner is as a string.
  // String can then be used to add to play/computer scores, etc.
  let winner = getWinner(playerSelection, computerSelection);

  if (winner === 'player') playerScore += 1;
  else if (winner === "computer") computerScore += 1;

  console.log(`Player: ${playerSelection}, Computer: ${computerSelection}, Winner: ${winner}`);

  return(winner);
}

// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;
//   const maxRounds = 9;
//
//   let roundWinner = playRound();
//   if (roundWinner == "player") {
//     playerScore += 1;
//   } else if (roundWinner == "computer") {
//     computerScore += 1;
//     }
//   scoreMessage = `You scored: ${playerScore}. The computer scored: ${computerScore}`;
//   if (playerScore > computerScore) {
//     alert(`You win! ${scoreMessage}`)
//   } else {
//     alert(`You lose! ${scoreMessage}`)
//   }
// }

const buttons = document.createElement('div');
buttons.style.display = 'flex';
buttons.style.justifyContent = 'center';

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorsBtn.textContent = 'Scissors';

rockBtn.addEventListener('click', () => {
  winner = playRound('rock');
  console.log(winner);});
paperBtn.addEventListener('click', () => {
  winner = playRound('paper');
  console.log(winner);});
scissorsBtn.addEventListener('click', () => {
  winner = playRound('scissors');
  console.log(winner);});

const scoreBoard =  document.createElement('p');
scoreBoard.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

function gameScore() {
  if (playerScore > 4) {
    scoreBoard.textContent = 'Game over. You win';
  } else if (computerScore > 4) {
    scoreBoard.textContent = 'Game over. You lose';
  } else {
    scoreBoard.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  }
}

rockBtn.addEventListener('click', gameScore);
paperBtn.addEventListener('click', gameScore);
scissorsBtn.addEventListener('click', gameScore);

buttons.appendChild(rockBtn);
buttons.appendChild(paperBtn);
buttons.appendChild(scissorsBtn);

document.body.appendChild(buttons);
document.body.appendChild(scoreBoard);
