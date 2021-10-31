let playerName = prompt("What is your name?");

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerSelection = choices[Math.floor(Math.random() * choices.length)];

let computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "lose";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "win";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "win";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "lose";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "lose";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "win";
  } else {
    return "tied";
  }
}

function gameResults() {
  if (playerScore == computerScore) {
    return "Game Results In Tie";
  } else if (playerScore < computerScore) {
    return `${playerName} loses`;
  } else if (playerScore > computerScore) {
    return `${playerName} wins`;
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    if (result == "win") {
      playerScore++;
    } else if (result == "lose") {
      computerScore++;
    }

    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    alert(`${playerName}: ${playerScore}; Computer: ${computerScore}`);
    console.log(`${playerName}: ${playerScore}; Computer: ${computerScore}`);
  }
  alert(gameResults());
  console.log(gameResults());
}

game();
