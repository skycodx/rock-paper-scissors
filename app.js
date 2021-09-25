/*Rock paper scissors game
1.make a function computerPlay that will randomly return 
'rock' or 'paper' or 'scissors' -> use this function for AI to play 

2. make a function that plays a single round of Rock Paper Scissors. The function
should take two parameters

3.playerSelection and computerSelection and return a string that includes who won the game
is it you or the pc with 'if ' statment

rock > scissors
scissors > paper
paper > rock

4.make playerSelection function case-insensitive

5.return the function return not the console.log them

6., write new function game() and inside create a loop that will let you play 5 times

TODO:
1. add counter on wins
2. create display
*/


//computer randomizer
let plays = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    return plays[~~(Math.random() * plays.length)];
}

//playing round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection)
        alert("It's a TIE!");
    else if ((computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock"))
        alert("ROBOTS WIN THIS BATTLE!") 
        // TODO: add counter for every win in this game for AI wins
    else
        alert("You got me human, but only this time!");
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Play human");
        const computerSelection = computerPlay();
    }
}
alert(game())