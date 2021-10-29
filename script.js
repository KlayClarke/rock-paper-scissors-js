function game() {
  let games = prompt("How many games would you like to play?");
  let playerPoints = 0;
  let computerPoints = 0;

  for (let i = 0; i < games; i++) {
    let playerSelection = prompt(
      "Please enter either rock, paper or scissors to begin"
    ).toUpperCase();
    let computerChoice = ["ROCK", "PAPER", "SCISSORS"];
    let computerSelection =
      computerChoice[Math.floor(Math.random() * computerChoice.length)];
    let round = playRound(playerSelection, computerSelection);
    if (round === "WIN") {
      playerPoints++;
      console.log("You win");
      console.log(playerPoints, computerPoints);
    } else if (round === "LOSS") {
      computerPoints++;
      console.log("You lose");
      console.log(playerPoints, computerPoints);
    } else if (round === "TIE") {
      console.log("TIED");
      console.log(playerPoints, computerPoints);
    }
  }

  if (playerPoints < computerPoints) {
    console.log(`The computer beat you ${computerPoints} to ${playerPoints}`);
  } else if (playerPoints > computerPoints) {
    console.log(
      `Congratulations. You beat the computer ${playerPoints} to ${computerPoints} `
    );
  } else {
    console.log(`The game ended in a draw`);
  }
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK") {
      if (computerSelection == "ROCK") {
        return "TIE";
      } else if (computerSelection == "PAPER") {
        return "LOSS";
      } else if (computerSelection == "SCISSORS") {
        return "WIN";
      }
    }
    if (playerSelection == "PAPER") {
      if (computerSelection == "PAPER") {
        return "TIE";
      } else if (computerSelection == "SCISSORS") {
        return "LOSS";
      } else if (computerSelection == "ROCK") {
        return "WIN";
      }
    }
    if (playerSelection == "SCISSORS") {
      if (computerSelection == "ROCK") {
        return "LOSS";
      } else if (computerSelection == "PAPER") {
        return "WIN";
      } else if (computerSelection == "SCISSORS") {
        return "TIE";
      }
    }
  }
}

game();
