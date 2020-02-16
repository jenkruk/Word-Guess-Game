var rand = 0;
var word = "";
var numWrong = 0;
var numRight = 0;
var phraseLength = 0;
var numChar = 0;
var flowers = [
    'Amaryllis', 'Baby’s Breath', 'Bellflower', 'Buttercup', 'Calla Lily', 'Chrysanthemum', 'Cornflower', 'Daffodil', 'Dahlia', 'Daisy', 'English Bluebell', 'Evening Primrose', 'Forget me not', 'Gardenia', 'Geranium', 'Gerbera', 'Hibiscus', 'Honeysuckle', 'Hyacinth', 'Hydrangea', 'Jacob’s Ladder', 'Jasmine', 'Lavender', 'Lilac', 'Magnolia', 'Marigold', 'Mayflower', 'Mimosa', 'Morning Glory', 'Orchid', 'Peony', 'Periwinkle', 'Petunia', 'Plumeria', 'Poinsettia', 'Poppy', 'Snapdragon', 'Sunflower', 'Sweet Pea', 'Tulip', 'Violet', 'Waterlily', 'Wisteria',
];

var trees = [
    'Apple’, ‘Bay Laurel’, ‘Bonsai’,‘Brazil nut’,‘Cacao’,‘California-laurel’,‘Cherry Blossom’, "Christmas",‘Coconut’,‘Cottonwood’,‘Cypress’,‘Dogwood’,‘Douglas fir’, ‘Family’, ‘Ficus’‘ Fiddleleaf fig’, ‘Giant Sequoia’, ‘Incense cedar’, ‘Juniper’, ‘Maidenhair’, ‘Mountain mahogany’, ‘Palm’, ‘Pine’, ‘Pistachio’, ‘Redwood’‘ Rubber Tree’, ‘Russian olive’, ’Spruce’, ‘Sugar maple’‘ Sycamore’, ‘Walnut’, ‘Weeping willow’, ‘White cedar’, ‘Willow’, 
];

var critters = [
    'Butterfly', 'Ladybug’, ‘Caterpillar’, ‘Bumble Bee’, ‘Bluebird’, ‘Sparrow’, ‘Woodpecker’, ‘Hummingbird’, ‘Mockingbird, ‘Beetle’, ‘Cardinal’, ‘Meadowlark’, ‘Cricket’, ‘Dragonfly’, ‘Falcon’, ‘Swallow’, ‘Grasshopper’, ‘Mosquito’, ‘Praying Mantis’, ‘Short eared owl’, ‘Yellow Warbler’, ‘Stinkbug’, ‘Weevil’, ‘Centipede’,  ‘Inchworm’, ‘Parrot’, ‘Lovebirds’, ‘Flamingo’, ‘Penguin’, ‘Chicken’, ‘Duckling’, ‘Roly-poly’, ‘The itsy bitsy spider’,
];

var songs = [
    'The Birds and the bees', 'What a wonderful world', 'Somewhere over the rainbow', 'Walking on sunshine', 'Good Vibrations',
    'Uptown Funk', "I've had the time of my life", "Ain't no mountain high enough", 'Beautiful Day', "You've got a friend", "Here comes the sun", 'Pocket full of Sunshine', 'Peaceful Easy Feeling', 'Good day sunshine', 'Shake it off',
];

function flower() {
    rand = Math.floor(Math.random() * phrases.length);
    word = flowers[rand];
    document.getElementById('start').style.display = 'none';
    document.getElementById('categoryName').innerHTML = "Flowers";
    treeLives();
}

function tree() {
    rand = Math.floor(Math.random() * phrases.length);
    word = trees[rand];
    document.getElementById('start').style.display = 'none';
    document.getElementById('categoryName').innerHTML = "Trees";
    treeLives();
}

function critter() {
    rand = Math.floor(Math.random() * phrases.length);
    word = critters[rand];
    document.getElementById('start').style.display = 'none';
    document.getElementById('categoryName').innerHTML = "Birds & Bugs";
    treeLives();
}

function song() {
    rand = Math.floor(Math.random() * phrases.length);
    word = songs[rand];
    document.getElementById('start').style.display = 'none';
    document.getElementById('categoryName').innerHTML = "Songs";
    treeLives();
}

function treeLives() {
    x = word.length;
    y = x - 1;
    while (x > 0) {
        numChar++;
        var letter = word.substring(y, x);
        if (letter === " ") {
            document.getElementById('letter' + x).innerHTML = "&nbsp;";
            document.getElementById('letter' + x).style.visibility = "hidden";
            document.getElementById('letter' + x).style.display = "block";
            document.getElementById('underline' + x).style.display = "block";
            spaces++;
        } else if (letter === "?" || letter === "!" || letter === "," || letter === "." || letter === "-" || letter === "'") {
            document.getElementById('letter' + x).innerHTML = letter;
            document.getElementById('letter' + x).style.display = "block";
            document.getElementById('underline' + x).style.display = "block";
            spaces++;
        } else {
            document.getElementById('letter' + x).innerHTML = letter;
            document.getElementById('letter' + x).style.visibility = "hidden";
            document.getElementById('underline' + x).style.display = "block";
            document.getElementById('underline' + x).style.borderBottom = "3px solid orange";
        }
        x--;
        y--;
    }
    phraseLength = word.length - spaces;
    document.getElementById('letsPlay').style.display = "block";
    splitWords();
    draw();
}