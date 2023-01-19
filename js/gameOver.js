const result = document.cookie;
const gamePage = '/html/gamePage.html';
const indexPage = '/index.html';
const getResultDisplay = document.getElementById('winner');

getResultDisplay.innerHTML = result.split('; ').find((row) => row.startsWith('result='))?.split('=')[1];

document.getElementById('#gameOver').addEventListener('click', event => {
    
    const restartOrQuit = event.target.id;
   
    if (restartOrQuit == 'restart') {
        window.location.assign(gamePage)
    }
    else if (restartOrQuit == 'quit') {
        window.location.assign(indexPage)
    }

})