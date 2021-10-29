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
      alert("You win");
      console.log("WIN");
      console.log(playerPoints, computerPoints);
    } else if (round === "LOSS") {
      computerPoints++;
      alert("You lose");
      console.log("LOSE");
      console.log(playerPoints, computerPoints);
    } else if (round === "TIE") {
      alert("TIED");
      console.log("TIE");
      console.log(playerPoints, computerPoints);
    }
  }

  if (playerPoints < computerPoints) {
    alert(`The computer beat you ${computerPoints} to ${playerPoints}`);
  } else if (playerPoints > computerPoints) {
    alert(
      `Congratulations. You beat the computer ${playerPoints} to ${computerPoints} `
    );
  } else {
    alert(`The game ended in a draw`);
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
