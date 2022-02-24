function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random(options) * options.length);
  return options[choice]
}

function playerPlay() {
  let playerChoice = prompt("Would you like to pick 'Rock', 'Paper' or 'Scissors'?").toLowerCase();
  if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
    return playerChoice
  } else {
    alert(`"${playerChoice}" is not a valid choice, please choose again.`);
    return playerPlay()
  }
}

function winnerIs(playerMove, computerMove) {
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

function playRound() {
  let playerSelection = playerPlay();
  let computerSelection = computerPlay();

  console.log(`Player: ${playerSelection} - Computer: ${computerSelection}.`);

  let winner = winnerIs(playerSelection, computerSelection);

  let computerChoice = computerSelection[0].toLocaleUpperCase() + computerSelection.slice(1);
  let playerChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1);

  if (winner == "player") {
    alert(`You win! ${playerChoice} beats ${computerChoice}.`);
  } else if (winner == "computer") {
    alert(`You lose! ${computerChoice} beats ${playerChoice}.`);
  } else if (winner == "draw") {
    alert("This game is a draw!");
  }
  return winner
}

function game() {
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


game()
