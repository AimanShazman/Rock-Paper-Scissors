//get computer choice (Rock/Paper/Scissors)
function getComputerChoice() {
    let computerSelection = Math.ceil(Math.random()*3);

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

function playRound(playerSelection, computerSelection) {
    //tie
    if (playerSelection === computerSelection) {
        return "It's a Tie!\n";
    } 

    if(playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return "You Win! Rock beats Scissors\n"
        } else {
            return "You Lose! Paper beats Rock\n";
        }
    } else if (playerSelection === 'paper') { 
        if (computerSelection === 'rock') {
            return "You Win! Paper beats Rock\n"
        } else {
            return "You Lose! Scissors beats Paper\n";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return "You Win! Scissors beats Paper\n"
        } else {
            return "You Lose! Rock beats Scissors\n";
        }
    }
}

//get user choice (Rock/Paper/Scissors)
let playerSelection = prompt("Choose either Rock, Paper or Scissors: ").toLowerCase();
if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    throw Error('Invalid Input!\n');
}

//get computer choice
let computerSelection = getComputerChoice();
if (!computerSelection) {
    throw Error('Cannot get computer selection!\n');
}

//play round
console.log(playRound(playerSelection, computerSelection));


