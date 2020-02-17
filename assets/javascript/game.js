var critters = ["Owl", "Butterfly", "Ladybug", "Caterpillar", "Bluebird", "Sparrow", "Woodpecker", "Hummingbird", "Mockingbird", "Beetle", "Cardinal", "Meadowlark", "Cricket", "Dragonfly", "Falcon", "Swallow", "Grasshopper", "Mosquito", "Stinkbug", "Weevil", "Centipede", "Inchworm", "Parrot", "Lovebird", "Flamingo", "Penguin", "Chicken", "spider"];

let answer = '';
let maxWrong = 7;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = critters[Math.floor(Math.random() * critters.length)];
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
      <button
        class="btn btn-lg btn-success py-2 px-4 m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')">
        ` + letter + `
      </button>
        `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        updateTreePicture();
    }
}

function updateTreePicture() {
    document.getElementById('treePic').src = "/assets/images/" + mistakes + '.jpg';
}

function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You Won!!!';
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
        document.getElementById('keyboard').innerHTML = 'Try Again';
    }
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('treePic').src = 'assets/images/0.jpg';

    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();