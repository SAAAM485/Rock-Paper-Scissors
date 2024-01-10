function playRound(playerSelection, computerSelection) {
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

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("Scissors");

rock.addEventListener("ckick", getPlayerSelction(this.id))
paper.addEventListener("ckick", getPlayerSelction(this.id))
scissors.addEventListener("ckick", getPlayerSelction(this.id))

function getPlayerSelction(playerSelection) {
  return playerSelection.toLowerCase();
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