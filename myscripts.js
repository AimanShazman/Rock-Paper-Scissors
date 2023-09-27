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

// function game() {
//     let playerSelection;
//     let computerSelection;
//     let playerPoints = 0;
//     let compPoints = 0;
//     let temp = 0;
//     let countRound = 1;

//     for (let i = 0; i < 5; i++) {

//         //listen button click for rock, paper, scissors individually
//         //get comp selection
//         //playRound()
//         //display each round result
//         //round++
//         //after 5 rounds,
//         //display final result


//         playerSelection.forEach(button => {
//             // console.log(button.name);
//             button.addEventListener('click', () => {
//                 temp = button.name
//             });
//         });

//         console.log(temp);

//         // //get computer selection
//         // computerSelection = getComputerChoice();
//         // if (!computerSelection) {
//         //     throw Error('Cannot get computer selection!\n');
//         // }       

//         // temp = playRound(playerSelection, computerSelection);

//         //add points 
//         if (temp === 'tie') {
//             console.log(`Round ${countRound}: It's a Tie!`);
//         } else if (temp === 'player') {
//             console.log(`Round ${countRound}: You Win! ${playerSelection} beats ${computerSelection}\n`);
//             playerPoints++;
//         } else if (temp === 'comp') {
//             console.log(`Round ${countRound}: You Lose! ${playerSelection} is defeated by ${computerSelection}\n`);
//             compPoints++;
//         }
//         countRound++;
//     }

//     //after 5 times, display winner
//     if (playerPoints === compPoints) {
//         console.log(`It's a Tie! ${playerPoints}-${compPoints}`);
//     } else if (playerPoints > compPoints) {
//         console.log(`Game Ended: You Win! ${playerPoints}-${compPoints}`);
//     } else if (compPoints > playerPoints) {
//         console.log(`Game Ended: You Lose! ${playerPoints}-${compPoints}`);
//     }
//     return;
// }

    //listen button click for rock, paper, scissors individually
    //get comp selection
    //playRound()
    //display each round result
    //round++
    //after 5 rounds,
    //display final result

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
let countRound = 1;
let playerScore = 0;
let compScore = 0;

console.log("Let's play 5 rounds of Rock Paper Scissors!");

rockButton.addEventListener('click', () => {
    const playerSelection = rockButton.name;
    game(playerSelection);
});

paperButton.addEventListener('click', () => {
    const playerSelection = paperButton.name;
    game(playerSelection);
});
scissorsButton.addEventListener('click', () => {
    const playerSelection = scissorsButton.name;
    game(playerSelection);
});

function game(playerSelection) {
    let computerSelection;
    let result;

    //get comp selection
    computerSelection = getComputerChoice();
    if (!computerSelection) {
        throw Error('Cannot get computer selection!\n');
    }      

    //playRound()
    result = playRound(playerSelection, computerSelection);

    //display each round result
    updateScore(result, playerSelection, computerSelection);

    //update Round
    updateRound();

    //after collect 5 points, end game
    if (playerScore === 5 || compScore === 5) {
        gameFinish();
    }

}

function gameFinish() {
    
    const resultContainer = document.querySelector('.result');

    if (playerScore === 5) {
        resultContainer.innerHTML = 'Game Ended! You Win!';
    } else if (compScore === 5) {
        resultContainer.innerHTML = 'Game Ended! You Lose!';
    }
    
}

function updateScore(result, playerSelection, computerSelection) {
    const playerScoreContainer = document.querySelector('.playerScore');
    const compScoreContainer = document.querySelector('.compScore');
    const resultContainer = document.querySelector('.result');
    let textUpdate;

    console.log(result);
    if (result === 'tie') {
        textUpdate = `Round ${countRound}: It's a Tie!`
    } else if (result === 'player') {
        playerScoreContainer.innerHTML = ++playerScore;
        textUpdate = `Round ${countRound}: You Win! ${playerSelection} beats ${computerSelection}\n`;
        resultContainer.innerHTML = textUpdate;
    } else if (result === 'comp') {
        compScoreContainer.innerHTML = ++compScore;
        textUpdate = `Round ${countRound}: You Lose! ${playerSelection} is defeated by ${computerSelection}\n`;
    }

    resultContainer.innerHTML = textUpdate;
}

function updateRound() {
    countRound++;
}



