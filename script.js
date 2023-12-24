function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock" && computerSelection == "Paper") {
    comWon++;
    return "You lose! Paper beats Rock!"
  } else if (playerSelection == "rock" && computerSelection == "Scissors") {
    playerWon++;
    return "You won! Rock beats Scissors!"
  } else if (playerSelection == "paper" && computerSelection == "Scissors") {
    comWon++;
    return "You lose! Scissors beat Paper!"
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    playerWon++;
    return "You won! Paper beats Rock!"
  } else if (playerSelection == "scissors" && computerSelection == "Rock") {
    comWon++;
    return "You lose! Rock beats Scissors!"
  } else if (playerSelection == "scissors" && computerSelection == "Paper") {
    playerWon++;
    return "You won! Scissors beat Paper!"
  } else {
    return "TIES! Try again!";
  }
}

function getComputerChoice() {
  let arr = ["Rock", "Paper", "Scissors"];
  return arr[Math.floor(Math.random()*3)];
}

function getPlayerSelction() {
  let choice = prompt("Please choose Rock, Paper or Scissors:", "");
  choice = choice.toLowerCase();
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    return choice;
  } else {
    alert("You need to enter Rock, Paper or Scissors! Try again");
    getPlayerSelction();
  }
}

let playerWon = 0;
let comWon = 0;
let result;

function game() {
  let flag = true;

  while (flag) {
    let playerSelection = getPlayerSelction();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection) + ` It's ${playerWon} to ${comWon} now.`);
    if (playerWon === 3) {
      result = `${playerWon} to ${comWon}, You won!`;
      flag = false;
    } else if (comWon === 3) {
      result = `${playerWon} to ${comWon}, You lose!`;
      flag = false;
    }
  }
  console.log(result);
}

game();