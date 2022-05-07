function computerPlay(){
    const rpsChoice = ["rock", "paper", "scissors"]
    return rpsChoice[Math.floor(Math.random()*rpsChoice.length)]
}

function pickWinner(computerSelection, playerSelection){
    var winningMessage = "You win! Computer chose " + computerSelection
    var losingMessage = "You lose! Computer chose " + computerSelection
    switch (computerSelection){
        case "rock":
            return (playerSelection==="paper") ? console.log(winningMessage) : console.log(losingMessage);
        case "paper":
            return (playerSelection==="scissors") ? console.log(winningMessage) : console.log(losingMessage);
        case "scissors":
            return (playerSelection==="rock") ? console.log(winningMessage) : console.log(losingMessage);
  }
}

function playRound() {
    let playerSelection = prompt("Enter a number", "");
    let computerSelection = computerPlay();
    console.log(playerSelection)

    console.log(computerSelection)
    if(computerSelection===playerSelection){
        return console.log("tie")
    }
    
    pickWinner(computerSelection, playerSelection);
}

for (let i = 0; i < 5; i++) {
    playRound();
 }



