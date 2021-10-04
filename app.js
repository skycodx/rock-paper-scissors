/*Rock paper scissors game

TODO list:
add pre-game buttons to choose how many times you want to play; 3 or 5
add animations to make it look nice
add popup window to show who is the winner***
*/

//Constants for buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const youScoreSpan = document.querySelector('[data-you-score]');
const reloadButton = document.getElementById('refresh-btn');



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

//Computer randomizer to play three different plays
function computerPlay() {
    let plays = ["Rock", "Paper", "Scissors"];
    return plays[~~(Math.random() * plays.length)];
}

//Increment div +1 
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

//Playing one round of this game 
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log("TIE");
    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")) {
        incrementScore(computerScoreSpan)
        //Counter until 5 to show that computer wins
        if (computerScoreSpan.innerText == 5) {
            alert("Computer win!");
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
        }

    } else {
        incrementScore(youScoreSpan)
        //Counter until 5 to show that you win
        if (youScoreSpan.innerText == 5) {
            alert("You win!");
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
        }

    }
}

//Refresh button
function Refresh() {
    window.parent.location = window.parent.location.href;
}