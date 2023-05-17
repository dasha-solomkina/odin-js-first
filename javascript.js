 // Function to return Computer choice
 function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random()* 3)
    return options[index]
}

console.log(getComputerChoice())