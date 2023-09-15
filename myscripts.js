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

//display marks
