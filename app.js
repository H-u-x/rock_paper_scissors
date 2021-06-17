//cashing the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score"); //underscored variables are dom variables
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById("score-board");
let result_div = document.querySelector(".result > p");
const rock_button = document.getElementById("Rock");
const paper_button = document.getElementById("Paper");
const scissors_button = document.getElementById("Scissors");

function main() {
    rock_button.addEventListener('click', function() {
        round("Rock", computerChoice());
    })

    paper_button.addEventListener('click', function(){
        round("Paper", computerChoice());
    })

    scissors_button.addEventListener('click', function() {
        round("Scissors", computerChoice());
    })

   
    // else if (computerScore === 5) {
    //     result_div.innerHTML = "The computer wins the game :("
    // }
}

function computerChoice(){
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let randNum = Math.floor(Math.random() * 3);
    
    if (randNum === 0){
        return rock;
    }
    else if (randNum === 1){
        return paper;
    }
    else{
        return scissors;
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    if (userScore === 5) {
        result_div.innerHTML = "You win the game!!"
    }
    else {
        result_div.innerHTML = "You win the round! " + userChoice + " beats " + computerChoice;
    }
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    if (computerScore === 5) {
        result_div.innerHTML = "The computer wins the game :("
    }
    else {
        result_div.innerHTML = "You lose the round! " + computerChoice + " beats " + userChoice;
    }
}

function draw(userAndCompChoice) {
    result_div.innerHTML = "It's a draw! You both chose " + userAndCompChoice;
}

function round(playerSelection, computerSelection){
    let playerWin = 0;
    let computerWin = 1;
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        win(playerSelection, computerSelection);
        return;
    }
    else if (playerSelection === "Rock" && computerSelection === "Rock"){
        draw(playerSelection);
        return;

    }
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        lose(playerSelection, computerSelection);
        return;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        lose(playerSelection, computerSelection);
        return;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        win(playerSelection, computerSelection);
        return;
    }
    else if (playerSelection === "Paper" && computerSelection === "Paper"){
        draw(playerSelection);
        return; 
    }
    else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        draw(playerSelection);
        return;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        lose(playerSelection, computerSelection);
        return;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        win(playerSelection, computerSelection);
        return;
    }
}
main();