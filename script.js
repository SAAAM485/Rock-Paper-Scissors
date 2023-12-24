function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock" && computerSelection == "Paper") {
    return "You lose! Paper beats Rock!"
  } else if (playerSelection == "rock" && computerSelection == "Scissors") {
    return "You won! Rock beats Scissors!"
  } else if (playerSelection == "paper" && computerSelection == "Scissors") {
    return "You lose! Scissors beat Paper!"
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    return "You won! Paper beats Rock!"
  } else if (playerSelection == "scissors" && computerSelection == "Rock") {
    return "You lose! Rock beats Scissors!"
  } else if (playerSelection == "scissors" && computerSelection == "Paper") {
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
  let choice = prompt("Please choose Rock, Paper or Scissors:");
  choice = choice.toLowerCase();
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    return choice;
  } else {
    alert("You need to enter Rock, Paper or Scissors! Try again");
    getPlayerSelction();
  }
}
   
let playerSelection = getPlayerSelction();
let computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));