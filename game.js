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

function playRound() {
  // Play one round Rock, Paper, Scissors.
  let playerSelection = getPlayerMove();
  let computerSelection = getComputerMove();
  // Track what each play played in the console.
  console.log(`Player: ${playerSelection} - Computer: ${computerSelection}.`);
  // Variable returns who the winner is as a string.
  // String can then be used to add to play/computer scores, etc.
  let winner = getWinner(playerSelection, computerSelection);
  // Alert winner.
  alertWinner(winner, playerSelection, computerSelection);
  return winner
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  const maxRounds = 9;

  for (i = 0; i < maxRounds; i++) {
    let roundWinner = playRound();
    if (roundWinner == "player") {
      playerScore += 1;
    } else if (roundWinner == "computer") {
      computerScore += 1;
    }
  }
  scoreMessage = `You scored: ${playerScore}. The computer scored: ${computerScore}`;
  if (playerScore > computerScore) {
    alert(`You win! ${scoreMessage}`)
  } else {
    alert(`You lose! ${scoreMessage}`)
  }
}


playGame()
