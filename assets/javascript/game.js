/* variables */
var answer = '';
var maxWrong = 7;
var wrongGuess = 0;
var guessed = [];
var wordStatus = null;
var categoryName = '';


/* arrays */
var flowers = [
  'amaryllis', 'bellflower', 'buttercup', 'lily', 'chrysanthemum', 'cornflower', 'daffodil', 'dahlia', 'daisy', 'bluebell', 'gardenia', 'geranium', 'gerbera', 'hibiscus', 'honeysuckle', 'hyacinth', 'hydrangea', 'jasmine', 'lavender', 'lilac', 'magnolia', 'marigold', 'mayflower', 'mimosa', 'orchid', 'peony', 'periwinkle', 'petunia', 'plumeria', 'poinsettia', 'poppy', 'snapdragon', 'sunflower', 'tulip', 'violet', 'waterlily', 'wisteria'
];

var trees = [
  'apple', 'laurel', 'bonsai', 'brazil', 'cacao', 'cherry', 'christmas', 'coconut', 'cottonwood', 'cypress', 'dogwood', 'family', 'ficus', 'fiddleleaf', 'sequoia', 'juniper', 'mahogany', 'palm', 'pine', 'pistachio', 'redwood', 'rubber', 'olive', 'spruce', 'maple', 'sycamore', 'walnut', 'cedar', 'willow'
];

var critters = [
  'butterfly', 'ladybug', 'caterpillar', 'bee', 'bluebird', 'grasshopper', 'woodpecker', 'hummingbird', 'mockingbird', 'beetle', 'mosquito', 'meadowlark', 'cricket', 'dragonfly', 'falcon', 'stinkbug', 'centipede', 'inchworm', 'parrot', 'lovebirds', 'flamingo', 'penguin', 'chicken', 'duckling', 'spider'
];

var songs = [
  'happy', 'anticipation', 'bathwater', 'dreams', 'luka', 'promises', 'valentine', 'why'
];

/* play page keyboard buttons */
function generateButtons() {
  var buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class='btn keyboard btn-success text-uppercase'
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

/*Area where the blank lines & right letters show up once clicked on */
document.getElementById('result').style.textTransform = 'uppercase';

/* Blank lines indicating random word length */
function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' _ ')).join('');

  document.getElementById('result').innerHTML = wordStatus;
}

/* Generates a random word from the array of the chosen category */
function randomWord() {
  if (categoryName === 'Flowers') {
    answer = flowers[Math.floor(Math.random() * flowers.length)];
  } else if (categoryName === 'Trees') {
    answer = trees[Math.floor(Math.random() * trees.length)];
  } else if (categoryName === 'Critters') {
    answer = critters[Math.floor(Math.random() * critters.length)];
  } else if (categoryName === 'Songs') {
    answer = songs[Math.floor(Math.random() * songs.length)];
  }
}

/* This function pushes the correct letters to the result area/blank lines when the 
user clicks on them, and disables the wrong letters after they've been clicked
on. 
The functions within this function update the wrongGuess number, updates win or lose 
text and updates tree picture accordingly */
function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    wrongGuess++;
    updateWrongGuess();
    checkIfGameLost();
    updateTreePicture();
  }
}

/* Shows number of wrong guesses */
function updateWrongGuess() {
  document.getElementById('wrongGuess').innerHTML = wrongGuess;
  document.getElementById('wrongGuess').style.color = '#dc3545';
}

/* With each wrong guess, the tree picture loses more flowers */
function updateTreePicture() {
  document.getElementById('treePic').src = './assets/images/' + wrongGuess + '.jpg';
}

/* Refreshes tree to full, plays a sound and shows 'you won' text when player wins */
function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won, Smarty Pants!';
    document.getElementById('treePic').src = './assets/images/0.jpg';
    var sound = document.getElementById('sound');
    sound.play();
  }
}

/* This function shows the answer and 'you'll get it next time' text when the player loses */
function checkIfGameLost() {
  if (wrongGuess === maxWrong) {
    document.getElementById('result').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You\'ll get it next time!';
  }
}

/* main page */
function main() {
  document.getElementById('main').style.display = 'block';
  document.getElementById('play').style.display = 'none';
}

/* play page */
function play() {
  document.getElementById('main').style.display = 'none';
  document.getElementById('play').style.display = 'block';
  document.getElementById('maxWrong').innerHTML = maxWrong;
}

/* This function runs when the user picks the flowers category from the main menu */
function flower() {
  document.getElementById('categoryName').innerHTML = 'Flowers';
  answer = flowers[Math.floor(Math.random() * flowers.length)];
  document.getElementById('main').style.display = 'none';
  document.getElementById('play').style.display = 'block';
  document.getElementById('maxWrong').innerHTML = maxWrong;
  categoryName = 'Flowers';
  updateTreePicture();
  randomWord();
  generateButtons();
  guessedWord();
}

/* This function runs when the user picks the trees category from the main menu */
function tree() {
  document.getElementById('categoryName').innerHTML = 'Trees';
  document.getElementById('main').style.display = 'none';
  document.getElementById('play').style.display = 'block';
  answer = trees[Math.floor(Math.random() * trees.length)];
  document.getElementById('maxWrong').innerHTML = maxWrong;
  categoryName = 'Trees';
  updateTreePicture();
  randomWord();
  generateButtons();
  guessedWord();
}

/* This function runs when the user picks the critters category from the main menu */
function critter() {
  document.getElementById('categoryName').innerHTML = 'Critters';
  document.getElementById('main').style.display = 'none';
  document.getElementById('play').style.display = 'block';
  answer = critters[Math.floor(Math.random() * critters.length)];
  document.getElementById('maxWrong').innerHTML = maxWrong;
  categoryName = 'Critters';
  updateTreePicture();
  randomWord();
  generateButtons();
  guessedWord();
}

/* This function runs when the user picks the songs category from the main menu */
function song() {
  document.getElementById('categoryName').innerHTML = 'Songs';
  document.getElementById('main').style.display = 'none';
  document.getElementById('play').style.display = 'block';
  answer = songs[Math.floor(Math.random() * songs.length)];
  document.getElementById('maxWrong').innerHTML = maxWrong;
  categoryName = 'Songs';
  updateTreePicture();
  randomWord();
  generateButtons();
  guessedWord();
}

/* This function refreshes the page for the category the player is in
when the try again button is clicked */
function tryAgain() {
  document.getElementById('main').style.display = 'none';
  document.getElementById('play').style.display = 'block';
  document.getElementById('treePic').src = './assets/images/0.jpg';
  answer = '';
  maxWrong = 7;
  wrongGuess = 0;
  guessed = [];
  wordStatus = null;
  updateWrongGuess();
  randomWord();
  generateButtons();
  guessedWord();
}

/* This function takes the player back to the homepage when the Main Menu button is clicked 
and refreshes the category pages so that if the player goes back to the same page they were
just on - a new word will be chosen instead of just still showing the word they were just on*/
function backToMain() {
  document.getElementById('main').style.display = 'block';
  document.getElementById('play').style.display = 'none';
  document.getElementById('treePic').src = './assets/main img/main.jpg';
  answer = '';
  maxWrong = 7;
  wrongGuess = 0;
  guessed = [];
  wordStatus = null;
  updateWrongGuess();
  randomWord();
  generateButtons();
  guessedWord();
}