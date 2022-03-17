const playerSelection = askUser();
const computerSelection = computerPlay();

function askUser() {
    let userInput = prompt("rock, paper, scissors?");
    userInput = userInput.toLowerCase();
    return userInput;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let randomNum = getRandomInt(3);
    if (randomNum === 0) {
        return 'rock';
    }
    if (randomNum === 1) {
        return 'paper';
    }
    if (randomNum === 2) {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('win')
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('win')
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('win')
    }
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('lose')
    }
    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('lose')
    }
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('lose')
    }
}