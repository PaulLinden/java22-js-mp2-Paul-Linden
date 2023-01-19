const resultCookie = document.cookie;

const gamePage = '/html/gamePage.html';
const indexPage = '/index.html';

const getVideo = document.querySelector('video');
const getResultDisplay = document.querySelector('#winner');
const winnerIs = resultCookie.split('; ').find((row) => row.startsWith('result='))?.split('=')[1];

getResultDisplay.innerHTML = winnerIs;

if (winnerIs === 'You Won!!!') {
    getVideo.innerHTML = '<source src="/video/power.mp4" type="video/mp4"></source>';
}
else if (winnerIs === 'You Lost!!!') {
    getVideo.innerHTML = '<source src="/video/noPower.mp4" type="video/mp4"></source>';
}

document.querySelector('#gameOver').addEventListener('click', event => {

    const restartOrQuit = event.target.id;

    if (restartOrQuit == 'restart') {
        window.location.assign(gamePage)
    }
    else if (restartOrQuit == 'quit') {
        window.location.assign(indexPage)
    }
})

function playPause() {
    if (getVideo.paused){
        getVideo.play();
    }
} 