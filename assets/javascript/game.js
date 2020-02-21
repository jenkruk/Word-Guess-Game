let answer = "";
let maxWrong = 7;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

/*variable banks for lists of words in their respective categories*/
var flowers = [
  'amaryllis', 'bellflower', 'buttercup', 'lily', 'chrysanthemum', 'cornflower', 'daffodil', 'dahlia', 'daisy', 'bluebell', 'gardenia', 'geranium', 'gerbera', 'hibiscus', 'honeysuckle', 'hyacinth', 'hydrangea', 'jasmine', 'lavender', 'lilac', 'magnolia', 'marigold', 'mayflower', 'mimosa', 'orchid', 'peony', 'periwinkle', 'petunia', 'plumeria', 'poinsettia', 'poppy', 'snapdragon', 'sunflower', 'tulip', 'violet', 'waterlily', 'wisteria'
];

var trees = [
  'apple', 'laurel', 'bonsai', 'brazil', 'cacao', 'cherry', 'christmas', 'coconut'
];

var critters = [
  'butterfly', 'ladybug', 'caterpillar', 'bee', 'bluebird', 'sparrow', 'woodpecker'
];

var songs = [
  'happy', 'anticipation', 'bathwater', 'dreams', 'luka', 'promises', 'valentine', 'why'
];

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn keyboard btn-success text-uppercase"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' _ ')).join("");

  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
  document.getElementById('mistakes').style.color = "#dc3545";
}

function updateTreePicture() {
  document.getElementById('treePic').src = "./assets/images/" + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won, Smarty Pants!';
    document.getElementById('treePic').src = "./assets/images/0.jpg";
    var sound = document.getElementById('sound');
    sound.play();
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You\'ll get it next time!';
  }
}

/* functions that allow each button link to it's intended category */
function main() {
  document.getElementById("main").style.display = "block";
  document.getElementById("play").style.display = "none";
}

function play() {
  document.getElementById("main").style.display = "none";
  document.getElementById("play").style.display = "block";
  document.getElementByClassName("gameTitle").style.display = "none";
  document.getElementById("wordSpotlight").style.textTransform = "uppercase";
  document.getElementById('maxWrong').innerHTML = maxWrong;
  randomWord();
  generateButtons();
  guessedWord();
}

function flower() {
  document.getElementById("main").style.display = 'none';
  document.getElementById("play").style.display = "block";
  answer = flowers[Math.floor(Math.random() * flowers.length)];
  word = flowers[answer];
  document.getElementById("categoryName").innerHTML = "Types of Flowers";
  updateTreePicture();
}

function tree() {
  document.getElementById('main').style.display = 'none';
  document.getElementById("play").style.display = "block";
  answer = trees[Math.floor(Math.random() * trees.length)];
  word = trees[answer];
  document.getElementById('categoryName').innerHTML = "Types of Trees";
  updateTreePicture();
}

function critter() {
  document.getElementById('main').style.display = 'none';
  document.getElementById("play").style.display = "block";
  answer = critters[Math.floor(Math.random() * critters.length)];
  word = critters[answer]
  document.getElementById('categoryName').innerHTML = "Critters";
  updateTreePicture();
}

function song() {
  document.getElementById('main').style.display = 'none';
  document.getElementById("play").style.display = "block";
  answer = songs[Math.floor(Math.random() * songs.length)];
  word = songs[answer];
  document.getElementById('categoryName').innerHTML = "One Word Song Titles";
  updateTreePicture();
}

function randomWord() {
  answer = critters[Math.floor(Math.random() * critters.length)];
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

function tryAgain() {
  document.getElementById("main").style.display = "none";
  document.getElementById("play").style.display = "block";
  document.getElementById('treePic').src = "./assets/images/0.jpg";
  answer = "";
  maxWrong = 7;
  mistakes = 0;
  guessed = [];
  wordStatus = null;
  updateMistakes();
  randomWord();
  generateButtons();
  guessedWord();
}

function backToMain() {
  document.getElementById("main").style.display = "block";
  document.getElementById("play").style.display = "none";
  document.getElementById('treePic').src = "./assets/main img/main.jpg";
  answer = "";
  maxWrong = 7;
  mistakes = 0;
  guessed = [];
  wordStatus = null;
  updateMistakes();
  randomWord();
  generateButtons();
  guessedWord();
}

randomWord();
generateButtons();
guessedWord();