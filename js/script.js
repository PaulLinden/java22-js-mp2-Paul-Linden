const formBtn = document.querySelector('#chooseName #btn');
const page = '/html/gamePage.html';

formBtn.addEventListener('click', event => {
    event.preventDefault();

    const inputEl = document.querySelector('#chooseName #nameInput');
    const inputText = inputEl.value;
    
    console.log(inputText);
    document.cookie = `playerName=${ inputText }`;
    window.location.assign(page)
})
