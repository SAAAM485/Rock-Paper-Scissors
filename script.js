function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
      return "You lose! Paper beats Rock!"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      return "You won! Rock beats Scissors!"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      return "You lose! Scissors beat Paper!"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
      return "You won! Paper beats Rock!"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
      return "You lose! Rock beats Scissors!"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      return "You won! Scissors beat Paper!"
    } else {
      return "TIES! Try again!";
    }
  }
function getComputerChoice() {

}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));