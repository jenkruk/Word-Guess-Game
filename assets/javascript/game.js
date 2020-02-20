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
  'apple’, ‘laurel’, ‘bonsai’, ‘brazil’, ‘cacao’, ‘cherry', 'christmas', 'coconut’, ‘cottonwood’, ‘cypress’,‘dogwood’, ‘family’, ‘ficus’, ‘fiddleleaf’, ‘sequoia’, ‘juniper’, ‘mahogany’, ‘palm’, ‘pine’, ‘pistachio’, ‘redwood’, ‘ rubber’, ‘olive’, ’spruce’, ‘maple’, ‘sycamore’, ‘walnut’, ‘cedar’, ‘willow'
];

var critters = [
  'butterfly', 'ladybug’, ‘caterpillar’, ‘bee’, ‘bluebird’, ‘sparrow’, ‘woodpecker’, ‘hummingbird’, ‘mockingbird, ‘beetle’, ‘cardinal’, ‘meadowlark’, ‘cricket’, ‘dragonfly’, ‘falcon’, ‘swallow’, ‘grasshopper’, ‘mosquito’, ‘mantis’, ‘owl’, ‘stinkbug’, ‘weevil’, ‘centipede’,  ‘inchworm’, ‘parrot’, ‘lovebirds’, ‘flamingo’, ‘penguin’, ‘chicken’, ‘duckling’, ‘spider'
];

var songs = [
  'happy', 'anticipation', 'bathwater', 'dreams', 'luka', 'promises', 'valentine', 'why'
];

var sound = document.getElementById('sound');

/* functions that allow each button link to it's intended category */
function main() {
  document.getElementById("main").style.display = "block";
  document.getElementById("play").style.display = "none";
  sound.pause();
}

function play() {
  document.getElementById("main").style.display = "none";
  document.getElementById("play").style.display = "block";
  document.getElementById()
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
  document.getElementById('categoryName').innerHTML = "Birds & Bugs";
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
  answer = flowers[Math.floor(Math.random() * flowers.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn keyboard my-2 py-1 btn-success text-uppercase"
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
}

/* shows how many misses are left */
document.getElementById('maxWrong').innerHTML = maxWrong;


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

/* Changes picture every miss */
function updateTreePicture() {
  document.getElementById('treePic').src = "./assets/images/" + mistakes + '.jpg';
}


function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won, Smarty Pants!';
    document.getElementById('treePic').src = "./assets/images/0.jpg";
    sound.play();
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML. = 'Even though you lost, you will always be a winner in my book!';
  }
}

function mainMenu() {
  document.getElementById("main").style.display = "block";
  document.getElementById("play").style.display = "none";
  sound.pause();
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
  sound.pause();
}

randomWord();
generateButtons();
guessedWord();