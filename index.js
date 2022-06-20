const choices = ["rock", "paper", "scissor"];
const computerSelection = computerPlay();
const playerSelection = playerPlay();

function computerPlay() {
  const randomPick = Math.floor(Math.random() * choices.length);
  return (randomPick, choices[randomPick]);
}

function playerPlay() {
  const playerPick = prompt("Choose one: rock, paper, or scissors? ");
  return playerPick;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
      return "It's a tie"
  } else if ((playerSelection == "rock" && computerSelection == "scissor") || 
             (playerSelection == "paper" && computerSelection == "rock")   || 
             (playerSelection == "scissor" && computerSelection == "paper")) {
      return "You win! ${playerSelection} beats the ${computerSelection}"
  } else {
      return "You lost! ${playerSelection} beats the ${computerSelection}"
  }
}

    // refactor
    // if ((playerSelection == "rock" && computerSelection == "paper") || 
    // (playerSelection == "paper" && computerSelection == "rock")) {
    //     return ("You lose, Paper beats Rock") || ("You win, Rock beats Paper")
    // } 
    // else if ((playerSelection == "scissor" && computerSelection == "rock" ) || 
    // (playerSelection == "rock" && computerSelection == "scissor")) {
    //     return ("You lose, Rock beats Scissor") || ("You win, Rocks beats Scissor")
    // }
    // else if ((playerSelection == "paper" && computerSelection == "scissor" ) || 
    // (playerSelection == "scissor" && computerSelection == "paper")) {
    //     return ("You lose, Scissor beats Paper") || ("You win, Scissor beats Paper")
    // } else {
    //     (playerSelection == computerSelection)
    //     return ("It's a tie")
    // }


// const playerSelection = "rock";
// console.log(playRound(playerSelection, computerSelection));