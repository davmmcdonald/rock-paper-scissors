// Here we define the score variables for each player and the computer choice options
let playerScore=0;
let computerScore=0;
const computerOptions = ['rock','paper','scissors'];

// This function collects input from the user, randomly calculates the computer's choice, and determines which wins
function playRound() {
    let playerMove = prompt("Enter ROCK, PAPER, OR SCISSORS to play. Good luck!").toLowerCase();
    let computerMove = computerOptions[Math.floor(Math.random()*3)];
    console.log(playerMove);
    console.log(computerMove);
    
    if (playerMove === computerMove) {
        alert("It's a tie!");
    } 
    else if (playerMove == 'rock') {
        if (computerMove == 'scissors') {
            alert("You won! "+playerMove.toUpperCase()+" beats "+computerMove.toUpperCase()+"!");
            playerScore++;
        } 
        else {
            alert("You lost! "+computerMove.toUpperCase()+" beats "+playerMove.toUpperCase()+"!");
            computerScore++;
        }
    }
    else if (playerMove == 'paper') {
        if (computerMove == 'rock') {
            alert("You won! "+playerMove.toUpperCase()+" beats "+computerMove.toUpperCase()+"!");
            playerScore++;
        } 
        else {
            alert("You lost! "+computerMove.toUpperCase()+" beats "+playerMove.toUpperCase()+"!");
            computerScore++;
        }
    }
    else if (playerMove == 'scissors') {
        if (computerMove == 'paper') {
            alert("You won! "+playerMove.toUpperCase()+" beats "+computerMove.toUpperCase()+"!");
            playerScore++;
        } 
        else {
            alert("You lost! "+computerMove.toUpperCase()+" beats "+playerMove.toUpperCase()+"!");
            computerScore++;
        }
    }
}

