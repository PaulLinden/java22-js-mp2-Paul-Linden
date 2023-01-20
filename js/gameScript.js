const playerNameCookie = document.cookie;
const getPlayerNameDisplay = document.querySelector('#playerName');
const getGifDisplay = document.querySelector('#gifDisplay');
const gameOptions = ['rock', 'paper', 'scissors'];
const gameOverPage = '../html/gameOver.html'
let pointsPlayerAndComp = [0, 0];

getPlayerNameDisplay.innerHTML = playerNameCookie.split('; ').find((row) => row.startsWith('playerName='))?.split('=')[1] + ' vs. Computer';

document.querySelector('#mainGamePage #options').addEventListener('click', event => {
    
    const displayYourPick = document.querySelector('#yourPick');
    const displayCompPick = document.querySelector('#compPick');
    let playerChoice = event.target.id;
    let getComputerChoice = getComputerChoice();
    let playerScoreList = document.querySelector('#scorePlayer');
    let computerScoreList = document.querySelector('#scoreComputer');

    if (playerChoice === 'options') {
        playerChoice = '';
        getComputerChoice = '';
    }

    displayYourPick.innerText = `Your pick: ${playerChoice}`;
    displayCompPick.innerText = `Computer pick: ${getComputerChoice}`;
    
    //----You Choose Rock----------------------------
    if (playerChoice === gameOptions[0] && getComputerChoice == gameOptions[2]) {
        pointsPlayerAndComp[0]++;
        getGifDisplay.innerHTML = '<img src="../img/rock/rockAttack.webp" alt="">';
    }
    else if (playerChoice === gameOptions[0] && getComputerChoice == gameOptions[1]) {
        pointsPlayerAndComp[1]++;
    }
    
    //----You Choose paper----------------------------
    if (playerChoice === gameOptions[1] && getComputerChoice == gameOptions[0]) {
        pointsPlayerAndComp[0]++;
        getGifDisplay.innerHTML = '<img src="../img/paper/paperAttack.gif" alt="">';
    }
    else if (playerChoice === gameOptions[1] && getComputerChoice == gameOptions[2]) {
        pointsPlayerAndComp[1]++;
    }
    
    //----You Choose Scisscor----------------------------
    if (playerChoice === gameOptions[2] && getComputerChoice == gameOptions[1]) {
        pointsPlayerAndComp[0]++;
        getGifDisplay.innerHTML = '<img src="../img/scissors/sciccorsAttack.gif" alt="">';
    }
    else if (playerChoice === gameOptions[2] && getComputerChoice == gameOptions[0]) {
        pointsPlayerAndComp[1]++;
    }

    playerScoreList.innerText = `Player: ${pointsPlayerAndComp[0]} `;
    computerScoreList.innerText = `Comp: ${pointsPlayerAndComp[1]} `;

    if (pointsPlayerAndComp[0] === 3) {
        document.cookie = `result=You Won!!!`;
        window.location.assign(gameOverPage)
    }
    else if (pointsPlayerAndComp[1] === 3) {
        document.cookie = `result=You Lost!!!`;
        window.location.assign(gameOverPage)
    }
})

function getComputerChoice() {
    let randomNumber = Math.round(Math.random() * 2);

    switch (randomNumber) {
        case 0: return gameOptions[0];

        case 1: return gameOptions[1];

        case 2: return gameOptions[2];
    }
}

