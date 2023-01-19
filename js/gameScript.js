const playerName = document.cookie;
const player = document.querySelector('#playerName');
const getAttack = document.querySelector('#fight');
const options = ['rock', 'paper', 'scissors'];
const page = '/html/gameOver.html'
let pointsPlayerAndComp = [0,0];

player.innerHTML = playerName.split('; ').find((row) => row.startsWith('playerName='))?.split('=')[1] + ' vs. Computer';

document.querySelector('#mainGamePage #options').addEventListener('click', event=> {
    
    let playerChoose = event.target.id;
    console.log(playerChoose);
    let getComp = getRandomNumber();
    const yourPick = document.querySelector('#yourPick');
    const compPick = document.querySelector('#compPick');

    if (playerChoose === 'options') {
        
        playerChoose = '';
        getComp = '';

    }

    yourPick.innerText = `Your pick: ${playerChoose}`;
    compPick.innerText = `Computer pick: ${getComp}`;
    //----You Choose Rock----------------------------
    if(playerChoose === options[0] && getComp == options[2]){
        pointsPlayerAndComp[0]++;
        getAttack.innerHTML = '<img src="/img/rock/rockAttack.webp" alt="">';
    }
    else if (playerChoose === options[0] && getComp == options[1]) {
        pointsPlayerAndComp[1]++;
    }
    //----You Choose paper----------------------------
    if (playerChoose === options[1] && getComp == options[0]) {
        pointsPlayerAndComp[0]++;
        getAttack.innerHTML = '<img src="/img/paper/paperAttack.gif" alt="">';
    }
    else if (playerChoose === options[1] && getComp == options[2]) {
        pointsPlayerAndComp[1]++;
    }
    //----You Choose Scisscor----------------------------
    if (playerChoose === options[2] && getComp == options[1]) {
        pointsPlayerAndComp[0]++;
        getAttack.innerHTML = '<img src="/img/scissors/sciccorsAttack.gif" alt="">';
    }
    else if (playerChoose === options[2] && getComp == options[0]) {
        pointsPlayerAndComp[1]++;
    }

    let scorP = document.querySelector('#scorePlayer');
    let scorC = document.querySelector('#scoreComputer');
    
    scorP.innerText = `Player: ${ pointsPlayerAndComp[0] } `;
    scorC.innerText = `Comp: ${pointsPlayerAndComp[1] } `;
    
    if (pointsPlayerAndComp[0] === 3) {
        document.cookie = `result=You Won!!!`;
        window.location.assign(page)
    }
    else if (pointsPlayerAndComp[1] === 3) {
        document.cookie = `result=You Lost!!!`;
        window.location.assign(page)
    }
              
})


function getRandomNumber(){
    let compChoose = Math.round(Math.random() * 2);

    console.log(compChoose);

    switch (compChoose) {
        case 0: return options[0];
            
        case 1: return options[1];
            
        case 2: return options[2];
            
    }
}

