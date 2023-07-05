// Ask the player for the name and update the name on the page
/*let playerName = prompt("what is your name?")
const playerNameJ = document.querySelector("#player-score");
playerNameJ.textContent = playerName + ":"; 
*/

const choices = document.querySelectorAll(".column");
const iconP = document.querySelector("#player-choice-img");
const iconC = document.querySelector("#computer-choice-img");

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

// change Computer Icon based on the choice
function showComputerChoice(a){
    if (a == "Paper") {
        iconC.src = "paperw.png";
    } else if (a == "Rock") {
        iconC.src = "rockw.png";
    } else {
        iconC.src = "scissorsw.png";
    }
};

let computerRoundChoice;
// Generate Computer choice
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random()* 3);
    computerRoundChoice = options[index];
    return computerRoundChoice;
};

//let computerChoice = getComputerChoice();

// funciton to compare the choices and 
function compareChoices(player, computer) {
    if (player === computer) {
        scorePlayer = 0;
        scoreComputer = 0;
    } else if ((player == "Rock" && computer == "Paper") || (player == "Scissors" && computer == "Rock") || ((player == "Paper" && computer == "Scissors"))) {
        scorePlayer = 0;
        scoreComputer = 1;
    } else if ((player == "Rock" && computer == "Scissors") || (player == "Paper" && computer == "Rock") || (player == "Scissors" && computer == "Paper")) {
        scorePlayer = 1;
        scoreComputer = 0;
    } else {
        scorePlayer = 0;
        scoreComputer = 0;
    };
    return {scorePlayer, scoreComputer};
};

// Update the Total Score
// and Show the current score on the page
let correntPlayerScore = 0;
let correntComputerScore = 0;

// XXXXXXXXXXXXXXXXXXX HERE
const playerScoreN = document.querySelector("#player-score-n");
const computerScoreN = document.querySelector("#computer-score-n");

function updateCount(a, b) {
    correntPlayerScore += a;
    correntComputerScore += b;
    playerScoreN.textContent = correntPlayerScore;
    computerScoreN.textContent = correntComputerScore;
    return [correntPlayerScore, correntComputerScore];
};

// update the status
const roundStatus = document.querySelector("#status-update");
function roundStatusUpdate(scoreP, scoreC) {
    if ((scoreP == 1) && (scoreC == 0)) {
        roundStatus.textContent = "Here you go!";
    } else if (scoreP == scoreC){
        roundStatus.textContent = "Ah, it's a draw";
    } else {
        roundStatus.textContent = "Ups, try again";        
    };
};

// listen to the PLayers choice and show the choice on the page
choices.forEach((column) => {
    column.addEventListener("click", () => {
        playerChoice = column.innerText; // returns the name of the Choice
        getComputerChoice(); // try to regenerate the choice
        console.log(computerRoundChoice);
        showPlayerChoice(playerChoice);
        showComputerChoice(computerRoundChoice);
        roundResult = compareChoices(playerChoice, computerRoundChoice);
        console.log(updateCount(roundResult.scorePlayer, roundResult.scoreComputer));
        roundStatusUpdate(roundResult.scorePlayer, roundResult.scoreComputer);
    });
});








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