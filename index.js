playerScore = 0;
computerScore = 0;
const selection = ["👊🏻 Rock", "🖐🏻 Paper", "✌🏻 Scissor"];
const roundResults = document.querySelector('#results-round');
const selectionButtons = document.querySelectorAll('div.choices button');
const rePlayGameButton = document.querySelector('#replay-btn');

selectionButtons.forEach(button => {button.addEventListener('click', playerPlay)});
rePlayGameButton.addEventListener('click',() => location.reload())
rePlayGameButton.style.display = 'none'

function computerPlay() {
  const randomPick = Math.floor(Math.random() * selection.length);
  return (randomPick, selection[randomPick]);
}

function playerPlay(e) {
  let playerSelection = (e.target.innerText);
  playerChoice = e.target.innerText;
  playRound(playerSelection, computerPlay);
}

function playRound(playerSelection, computerSelection) {
  // playerSelection = playerPlay();
  computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    roundResults.innerText = `It's a tie \n\nPlayer:  ${playerScore}\nComputer: ${computerScore}`
    if (playerScore === 5 || computerScore === 5) {
      roundResults.innerText = `Round Draw \nPlayer:  ${playerScore}\nComputer: ${computerScore}`
    }
  } else if (
    (playerSelection === "👊🏻 Rock" && computerSelection === "✌🏻 Scissor") ||
    (playerSelection === "🖐🏻 Paper" && computerSelection === "👊🏻 Rock") ||
    (playerSelection === "✌🏻 Scissor" && computerSelection === "🖐🏻 Paper")) {
    playerScore += 1;
    roundResults.innerText = `You win! ${playerSelection} beats the ${computerSelection} 
    \nPlayer:  ${playerScore}\nComputer: ${computerScore}`
    if (playerScore === 5) {
      roundResults.innerText = 'Game Over, You Win !!!!!'
      rePlayGameButton.style.display = 'block'
      disableButtons()
    }
  } else {
    computerScore += 1
    roundResults.innerText = `You lost! ${playerSelection} beats the ${computerSelection}
    \nPlayer:  ${playerScore}\nComputer: ${computerScore}`
      if (computerScore === 5){
        roundResults.innerText = 'Game Over, You Lost :('
        rePlayGameButton.style.display = 'block'
        disableButtons()
    }
  }
}

function disableButtons() {
  selectionButtons.forEach(elements => {
      elements.disabled = true
  })
}
