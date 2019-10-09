const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
let numOfGame = 0;
let userScore = 0;
let aiScore = 0;

btnRock.addEventListener('click', () => {
        btnRock.style.border = "4px solid white";
        btnPaper.style.border = "4px solid white";
        btnScissors.style.border = "4px solid white";
        btnScissors.style.transform =  "scale(1.0)";
        btnPaper.style.transform =  "scale(1.0)";
        btnRock.style.transform =  "scale(1.0)";
        playerSelection = 'rock'
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
});

btnPaper.addEventListener('click', () => {
    btnRock.style.border = "4px solid white";
    btnPaper.style.border = "4px solid white";
    btnScissors.style.border = "4px solid white";
    btnScissors.style.transform =  "scale(1.0)";
    btnPaper.style.transform =  "scale(1.0)";
    btnRock.style.transform =  "scale(1.0)";
    playerSelection = 'paper'
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

btnScissors.addEventListener('click', () => {
    btnRock.style.border = "4px solid white";
    btnPaper.style.border = "4px solid white";
    btnScissors.style.border = "4px solid white";
    btnScissors.style.transform =  "scale(1.0)";
    btnPaper.style.transform =  "scale(1.0)";
    btnRock.style.transform =  "scale(1.0)";
    playerSelection = 'scissors'
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});



function playRound(playerSelection, computerSelection){
    if(userScore > 4 || aiScore > 4){
        numOfGame = 0;
        userScore = 0;
        aiScore = 0;
        document.querySelector('#scoreUser').innerHTML = userScore;
        document.querySelector('#aiUser').innerHTML = aiScore;
    
}  else{
    switch(true) {
        case playerSelection === 'rock' && computerSelection === 'paper':
            console.log('You lose. Paper beats Rock');
            aiScore ++;
            numOfGame ++;
            document.querySelector('#aiUser').innerHTML = aiScore;
            btnRock.style.border = "solid 4px #e53935";
            btnPaper.style.border = "solid 4px #4CAF50";
            btnRock.style.transform =  "scale(1.1)";
            btnPaper.style.transform =  "scale(1.1)";
            return 0;
        case playerSelection === 'rock' && computerSelection === 'scissors':
            console.log('You win. Rock beats Scissors');
            userScore ++;
            numOfGame ++;
            document.querySelector('#scoreUser').innerHTML = userScore;
            btnRock.style.border = "solid 4px #4CAF50";
            btnScissors.style.border = "solid 4px #e53935";
            btnScissors.style.transform =  "scale(1.1)";
            btnRock.style.transform =  "scale(1.1)";
            return 1;
        case playerSelection === 'rock' && computerSelection === 'rock':
            console.log('It is a draw');
            numOfGame ++;
            btnRock.style.border = "solid 4px #e53935";
            btnRock.style.transform =  "scale(1.1)";
            break;
        case playerSelection === 'paper' && computerSelection === 'rock':
            console.log('You win. Paper beats Rock');
            numOfGame ++;
            userScore ++;
            document.querySelector('#scoreUser').innerHTML = userScore;
            btnRock.style.border = "solid 4px #e53935";
            btnPaper.style.border = "solid 4px #4CAF50";
            btnRock.style.transform =  "scale(1.1)";
            btnPaper.style.transform =  "scale(1.1)";
            return 0;
        case playerSelection === 'paper' && computerSelection === 'scissors':
            console.log('You lose. Scissors beats Paper');
            numOfGame ++;
            aiScore ++;
            document.querySelector('#aiUser').innerHTML = aiScore;
            btnScissors.style.border = "solid 4px #4CAF50";
            btnPaper.style.border = "solid 4px #e53935";
            btnScissors.style.transform =  "scale(1.1)";
            btnPaper.style.transform =  "scale(1.1)";
            return 1;
        case playerSelection === 'paper' && computerSelection === 'paper':
            console.log('It is a draw');
            numOfGame ++;
            btnPaper.style.border = "solid 4px #e53935";
            btnPaper.style.transform =  "scale(1.1)";
            break;
        case playerSelection === 'scissors' && computerSelection === 'rock':
            console.log('You lose. Rock beats Scissors');
            numOfGame ++;
            aiScore ++;
            document.querySelector('#aiUser').innerHTML = aiScore;
            btnRock.style.border = "solid 4px #4CAF50";
            btnScissors.style.border = "solid 4px #e53935";
            btnScissors.style.transform =  "scale(1.1)";
            btnRock.style.transform =  "scale(1.1)";
            return 0;
        case playerSelection === 'scissors' && computerSelection === 'paper':
            console.log('You win. scissors beats paper');
            numOfGame ++;
            userScore ++;
            document.querySelector('#scoreUser').innerHTML = userScore;
            btnScissors.style.border = "solid 4px #4CAF50";
            btnPaper.style.border = "solid 4px #e53935";
            btnScissors.style.transform =  "scale(1.1)";
            btnPaper.style.transform =  "scale(1.1)";
            return 1;
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            console.log('It is a draw');
            numOfGame ++;
            btnScissors.style.border = "solid 4px #e53935";
            btnScissors.style.transform =  "scale(1.1)";
            break;
}  
}
}

function computerPlay(){
    let computergoes = ['Rock', 'Paper', 'Scissors'];
    let computergo = computergoes[Math.floor(Math.random()*computergoes.length)];
    return computergo.toLowerCase();
}