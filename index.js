const choices = ["rock", "paper", "scissor"];

function computerPlay() {
    const randomPick = Math.floor(Math.random() * choices.length);
    return (randomPick, choices[randomPick]);
}

function playRound(playerSelection, computerSelection) {
     playerSelection,
     computerSelection = choices;

    if ((playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock")) {
        return ("You lose, Paper beats Rock") || ("You win, Rock beats Paper")
    } 
    else if ((playerSelection == "scissor" && computerSelection == "rock" ) || 
    (playerSelection == "rock" && computerSelection == "scissor")) {
        return ("You lose, Rock beats Scissor") || ("You win, Rocks beats Scissor")
    }
    else if ((playerSelection == "paper" && computerSelection == "scissor" ) || 
    (playerSelection == "scissor" && computerSelection == "paper")) {
        return ("You lose, Scissor beats Paper") || ("You win, Scissor beats Paper")
    } else {
        (playerSelection == computerSelection)
        return ("It's a tie")
    }
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));