const getStartButton = document.querySelector('#chooseName #startButton');
const gamePage = '/html/gamePage.html';

getStartButton.addEventListener('click', event => {
    event.preventDefault();

    const nameInput = document.querySelector('#chooseName #nameInput');
    const choosenName = nameInput.value;

    document.cookie = `playerName=${choosenName}`;
    window.location.assign(gamePage)
})
