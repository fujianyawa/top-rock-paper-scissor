const computerPlay = (randomPick) => {
    const choices = ["rock", "paper", "scissor"];
    const randomPick = Math.floor(Math.random() * choices.length);
    console.log(randomPick, choices[randomPick]);
}
