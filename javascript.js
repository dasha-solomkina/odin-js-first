// ask the player's name and update the name on the page
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
// generate Computer choice
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

// update the Total Score
// and show the current score on the page
let correntPlayerScore = 0;
let correntComputerScore = 0;
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
const roundStatus = document.querySelector("#status-update-text");
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
        getComputerChoice();
        showPlayerChoice(playerChoice);
        showComputerChoice(computerRoundChoice);
        roundResult = compareChoices(playerChoice, computerRoundChoice);
        updateCount(roundResult.scorePlayer, roundResult.scoreComputer);
        roundStatusUpdate(roundResult.scorePlayer, roundResult.scoreComputer);
        if(correntPlayerScore == 5) {
            alert("you won!"); 
        } else if (correntComputerScore == 5) {
            alert("sorry, you lost")
        };
    });
});

