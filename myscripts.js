//get computer choice (Rock/Paper/Scissors)
function getComputerChoice() {
let computerSelection = Math.ceil(Math.random()*3); 0.00015

    if (computerSelection === 1) {
        return 'rock';
    } else if (computerSelection === 2) {
        return 'paper';
    } else if (computerSelection === 3) {
        return 'scissors';
    } else {
        return false;
    }
}

function playRound(playerSelection, computerSelection, result) {
    //tie
    if (playerSelection === computerSelection) {
        result =  "It's a Tie!\n";
        result = 'tie';
    } else if(playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            // result =  "You Win! Rock beats Scissors\n"
            result = 'player';
        } else {
            // result =  "You Lose! Rock is defeated by Paper\n";
            result = 'comp';
        }
    } else if (playerSelection === 'paper') { 
        if (computerSelection === 'rock') {
            // result =  "You Win! Paper beats Rock\n"
            result = 'player';
        } else {
            // result =  "You Lose! Paper is defeated by Scissors\n";
            result = 'comp';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            // result =  "You Win! Scissors beats Paper\n"
            result = 'player';
        } else {
            // result =  "You Lose! Scissors is defeated by Rock\n";
            result = 'comp';
        }
    }
    return result;
}

function game() {
    let playerSelection;
    let computerSelection;
    let playerPoints = 0;
    let compPoints = 0;
    let temp;
    let countRound = 1;

    for (let i = 0; i < 5; i++) {
        //get user choice (Rock/Paper/Scissors)
        do {
            playerSelection = prompt("Choose either Rock, Paper or Scissors: ").toLowerCase();
        } while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors');

        //get computer choice
        computerSelection = getComputerChoice();
        if (!computerSelection) {
            throw Error('Cannot get computer selection!\n');
        }       

        temp = playRound(playerSelection, computerSelection);

        //add points 
        if (temp === 'tie') {
            console.log(`Round ${countRound}: It's a Tie!`);
        } else if (temp === 'player') {
            console.log(`Round ${countRound}: You Win! ${playerSelection} beats ${computerSelection}\n`);
            playerPoints++;
        } else if (temp === 'comp') {
            console.log(`Round ${countRound}: You Lose! ${playerSelection} is defeated by ${computerSelection}\n`);
            compPoints++;
        }
        countRound++;
    }

    //after 5 times, display winner
    if (playerPoints === compPoints) {
        console.log(`It's a Tie! ${playerPoints}-${compPoints}`);
    } else if (playerPoints > compPoints) {
        console.log(`Game Ended: You Win! ${playerPoints}-${compPoints}`);
    } else if (compPoints > playerPoints) {
        console.log(`Game Ended: You Lose! ${playerPoints}-${compPoints}`);
    }
    return;
}

//queryselectall buttons
//use forEach to access all node array
//use eventListener to check when button is click
//playRound() with comp
//create new div to display result on new function
console.log("Let's play 5 rounds of Rock Paper Scissors!");

let playerSelection = document.querySelectorAll('.button');

playerSelection.forEach(button => {
    button.addEventListener('click', () => {
        let result = playRound(button.name, getComputerChoice());
        displayRound(result);
    });
});


function displayRound(result) {
    let container = document.querySelector('.body');
    let newDiv = document.createElement('div');
    newDiv.id = 'result';
    newDiv.textContent = result;
    console.log(newDiv);
    container.appendChild(newDiv);
}


