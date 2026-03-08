const images = [
  'assets/pidove.png',
  'assets/charizard.png',
  'assets/pikachu.png',
  'assets/blastoise.png',
  'assets/venusaur.png',
  'assets/golem.png',
  'assets/gengar.png',
  'assets/onix.png',
  'assets/gigalith.png',
  'assets/chansey.png'
];

const duplicateImages = images.concat(images);

// Shuffle function from w3schools
for (let i = duplicateImages.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = duplicateImages[i];
  duplicateImages[i] = duplicateImages[j];
  duplicateImages[j] = k;
}

// From here chatgpt code
let flippedCards = [];

// Create cards and append them to the game board
duplicateImages.forEach(function (image) {
  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.image = image;
  var img = document.createElement('img');
  img.src = image;

  card.appendChild(img);
  document.querySelector('.game-board').appendChild(card);
});

// Flip card logic
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function () {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
      card.classList.add('flipped');
      flippedCards.push(card);
      card.querySelector('img').style.visibility = 'visible';

      if (flippedCards.length === 2) {
        checkMatch();
      }
    }
  });
});

function checkMatch() {
  const [firstCard, secondCard] = flippedCards;

  if (firstCard.dataset.image === secondCard.dataset.image) {
    flippedCards = [];
    checkWin();
  } else {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      firstCard.querySelector('img').style.visibility = 'hidden';
      secondCard.querySelector('img').style.visibility = 'hidden';
      flippedCards = [];
    }, 500);
  }
}

function checkWin() {
  const totalCards = document.querySelectorAll('.card').length;
  const matchedCards = document.querySelectorAll('.card.flipped').length;

  if (matchedCards === totalCards) {
    setTimeout(() => {
      alert('You Win!');
    }, 500);
  }
}