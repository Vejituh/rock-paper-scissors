const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
let numOfGame = 0;
let userScore = 0;
let aiScore = 0;

btnRock.addEventListener('click', () => {
        playerSelection = 'rock'
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(numOfGame)
});

btnPaper.addEventListener('click', () => {
    playerSelection = 'paper'
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

btnScissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});



function playRound(playerSelection, computerSelection){
    if(numOfGame < 5){
    switch(true) {
        case playerSelection === 'rock' && computerSelection === 'paper':
            console.log('You lose. Paper beats Rock');
            aiScore ++;
            numOfGame ++;
            return 0;
        case playerSelection === 'rock' && computerSelection === 'scissors':
            console.log('You win. Rock beats Scissors');
            userScore ++;
            numOfGame ++;
            return 1;
        case playerSelection === 'rock' && computerSelection === 'rock':
            console.log('It is a draw');
            numOfGame ++;
            break;
        case playerSelection === 'paper' && computerSelection === 'rock':
            console.log('You win. Paper beats Rock');
            numOfGame ++;
            userScore ++;
            return 0;
        case playerSelection === 'paper' && computerSelection === 'scissors':
            console.log('You lose. Scissors beats Paper');
            numOfGame ++;
            aiScore ++;
            return 1;
        case playerSelection === 'paper' && computerSelection === 'paper':
            console.log('It is a draw');
            numOfGame ++;
            break;
        case playerSelection === 'scissors' && computerSelection === 'rock':
            console.log('You lose. Rock beats Scissors');
            numOfGame ++;
            aiScore ++;
            return 0;
        case playerSelection === 'scissors' && computerSelection === 'paper':
            console.log('You win. scissors beats paper');
            numOfGame ++;
            userScore ++;
            return 1;
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            console.log('It is a draw');
            numOfGame ++;
            break;
}
} else {
    console.log('finished')
}
}

function computerPlay(){
    let computergoes = ['Rock', 'Paper', 'Scissors'];
    let computergo = computergoes[Math.floor(Math.random()*computergoes.length)];
    return computergo.toLowerCase();
}