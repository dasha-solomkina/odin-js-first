// Ask the player for the name and update the name on the page
/* let playerName = prompt("what is your name?")
const playerNameJ = document.querySelector("#player-score");
playerNameJ.textContent = playerName + ":"; 
*/

const choices = document.querySelectorAll(".column");
const iconP = document.querySelector("#player-choice-img");

// change the Player Icon based on the choice
function showPlayerChoice(a){
    if (a == "Paper") {
        iconP.src = "paperw.png";
    } else if (a == "Rock") {
        iconP.src = "rockw.png";
    } else {
        iconP.src = "scissorsw.png";
    }
};

// listen to the PLayers choice and show the choice on the page
choices.forEach((column) => {
    column.addEventListener("click", () => {
        playerChoice = column.innerText; // returns the name of the Choice
        showPlayerChoice(playerChoice);
    });
});



 // Function to return Computer choice
 function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()* 3)
    return options[index]
};
console.log(getComputerChoice())



/* 
let result;
let scorePlayer;
let scoreComputer;

// Function to play 1 round and return the number based on the win
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
        scorePlayer = 0;
        scoreComputer = 0;
    }
return {scorePlayer, scoreComputer, result};
}


// Function for the game of 5 rounds (loop)
let countWinsPlayer = 0;
let countWinsComputer = 0;

for (let i = 0; i < 5; i++) {
    let message = prompt("Type: Rock, Paper or Scissors");
    let playerSelection = message.toLocaleLowerCase();
    console.log("Players choice: " + playerSelection);
    const computerSelection = getComputerChoice();
    console.log("Computer`s choice: " + computerSelection);
    let scorePlayerN = Number(playRound(playerSelection, computerSelection).scorePlayer);
    let scoreComputerN = Number(playRound(playerSelection, computerSelection).scoreComputer);

    if (scorePlayerN == 1) {
        countWinsPlayer = countWinsPlayer + 1;
    } else if (scoreComputerN == 1) {
        countWinsComputer = countWinsComputer + 1;
    }

    console.log("Players score: " + countWinsPlayer);
    console.log("Conputer score: " + countWinsComputer);
  }

// Alert the winner

if (countWinsPlayer > countWinsComputer) {
    alert("You have won the game. Congrats!")
} else if (countWinsComputer > countWinsPlayer) {
    alert("Sorry, you lost :(")
} else {
    alert("It is a draw, play one more time to determine the winner")
}

*/