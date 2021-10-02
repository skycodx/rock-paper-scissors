/*Rock paper scissors game

TODO:
1. add counter on wins
2. announce a winner after 5 rounds
*/

//constants for buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');


//Event listener to monitor button press and assign
rockButton.addEventListener('click', () => {
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
    let playerSelection = "paper";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
    let playerSelection = "scissors";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

//computer randomizer to play three different plays
function computerPlay() {
    let plays = ["Rock", "Paper", "Scissors"];
    return plays[~~(Math.random() * plays.length)];
}

//playing one round of this game 
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection)
        console.log("It's a TIE!");
    else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock"))
        console.log("ROBOTS WIN THIS BATTLE!")
    else
        console.log("You got me human, but only this time!");
}