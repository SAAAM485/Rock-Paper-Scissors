let playerWon = 0;
let comWon = 0;
let result;

function getPlayerSelction(event) {
  let playerSelection;
  
  console.log(event.target.innerHTML);
  switch(event.target.innerHTML){
    case "Rock":
      playerSelection = "rock";
      break;
    case "Paper":
       playerSelection = "paper";
      break;
    case "Scissors":
       playerSelection = "scissors"
      break;
  }

  return playerSelection;
}


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

function getComputerSelection() {
  let arr = ["Rock", "Paper", "Scissors"];
  return arr[Math.floor(Math.random()*3)];
}

const sub = document.querySelector("#sub")
const card = document.querySelector(".card");
let score = document.createElement("div");

sub.addEventListener("click", (event) => {
  bo9Games(event);
});

function bo9Games(event) {
  if (playerWon < 5 && comWon < 5) {
    let playerSelection = getPlayerSelction(event);
    let computerSelection = getComputerSelection();
    score.textContent = playRound(playerSelection, computerSelection) + ` It's ${playerWon} to ${comWon} now.`;
    card.appendChild(score);
  } else if (playerWon === 5) {
    result = `${playerWon} to ${comWon}, You won!`;
    score.textContent = result;
    card.appendChild(score);
  } else if (comWon === 5) {
    result = `${playerWon} to ${comWon}, You lose!`;
    score.textContent = result;
    card.appendChild(score);
  }
  
}

