let winsNeeded = prompt(
  "How much wins should one need to be declared victorious?"
);

let round = 1;
let scoreWindow = document.querySelector(".scores");

let playerScore = 0;
let computerScore = 0;
let ties = 0;

let choices = ["rock", "paper", "scissors"];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

const rock = document.querySelector("#rock"),
  paper = document.querySelector("#paper"),
  scissors = document.querySelector("#scissors");

rock.addEventListener("click", function () {
  let playerSelection = "rock";
  game(playerSelection);
});

paper.addEventListener("click", function () {
  let playerSelection = "paper";
  game(playerSelection);
});

scissors.addEventListener("click", function () {
  let playerSelection = "scissors";
  game(playerSelection);
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "lose round";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "win round";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "win round";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "lose round";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "lose round";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "win round";
  } else {
    return "tied round";
  }
}

function gameResults() {
  if (playerScore == winsNeeded || computerScore == winsNeeded) {
    if (playerScore < computerScore) {
      alert("YOU LOSE");
      location.reload();
      return `YOU LOSE`;
    } else if (playerScore > computerScore) {
      alert("YOU WIN");
      location.reload();
      return `YOU WIN`;
    }
  }
}

function game(playerSelection) {
  console.log(`ROUND ${round}`);
  console.log(playerSelection);
  let computerSelection = computerPlay();
  console.log(computerSelection);
  let roundResults = playRound(playerSelection, computerSelection);
  console.log(roundResults);
  if (roundResults == "win round") {
    round++;
    playerScore++;
  } else if (roundResults == "lose round") {
    round++;
    computerScore++;
  } else {
    round++;
    ties++;
  }
  scoreWindow.innerHTML =
    "Player:" +
    playerScore +
    " " +
    "Computer:" +
    computerScore +
    " " +
    "Ties:" +
    ties;
  console.log(
    `Player Wins: ${playerScore}; Computer Wins: ${computerScore}; Ties: ${ties}`
  );
  gameResults();
  console.log(gameResults());
}
