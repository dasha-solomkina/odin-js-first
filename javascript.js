 // Function to return Computer choice
 function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()* 3)
    return options[index]
}




// function with the string
/*
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = "It is a draw, please play once more";
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock") || ((playerSelection == "paper" && computerSelection == "scissors"))) {
        result = "You lost, sorry, " + computerSelection + " beats " + playerSelection
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        result = "you WON! " + playerSelection + " beats " + computerSelection;
    } else {
        result = "something went wrooooong";
    }
return result;
} */

let result;
let scorePlayer;
let scoreComputer;

// Redo the function to return the number and not the string
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        scorePlayer = 0;
        scoreComputer = 0;
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock") || ((playerSelection == "paper" && computerSelection == "scissors"))) {
        scorePlayer = 0;
        scoreComputer = 1;
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        scorePlayer = 1;
        scoreComputer = 0;
    } else {
        result = "something went wrooooong";
    }
return {scorePlayer, scoreComputer, result};
}




// Function game - 5 games - loop test





for (let i = 0; i < 5; i++) {
    //choose one option for Computer and Players imput
    let message = prompt("Type: Rock, Paper or Scissors");
    let playerSelection = message.toLocaleLowerCase();
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    let outputTest = playRound(playerSelection, computerSelection);
    console.log(outputTest.scorePlayer); // convert it to the numbers and make ++
      





  }






