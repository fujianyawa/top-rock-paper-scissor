const selection = ["rock", "paper", "scissor"];
const computerSelection = computerPlay();
const playerSelection = playerPlay();
playerScore = 0;
computerScore = 0;

function computerPlay() {
  const randomPick = Math.floor(Math.random() * selection.length);
  return (randomPick, selection[randomPick]);
}

function playerPlay() {
  const playerPick = prompt("Choose one: rock, paper, or scissors? ");
  return playerPick;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie"
  } else if ((playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")) {
    playerScore += 1;
    return `You win! ${playerSelection} beats the ${computerSelection}`
  } else {
    computerScore += 1
    return `You lost! ${playerSelection} beats the ${computerSelection}`
  }
}

function playGame(playerSelection, computerSelection) {
  for (let i = 0; i < 5; i++) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    console.log(`Players choose : ${playerSelection} \nComputer choose: ${computerSelection}`)
    results = (playRound(playerSelection, computerSelection))
    console.log(`--- Score --- \n Player:  ${playerScore} \n Computer ${computerScore}\n--------------`)
  }
    if (playerScore > computerScore) {
      return "You win!!!!"
    } else if (playerScore< computerScore){
      return "You lose :("
    }
}