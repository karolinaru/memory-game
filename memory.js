//play button
const playButton = document.querySelector(".play-button");

playButton.addEventListener("click", hideshow, false);

function hideshow() {
  document.getElementById("hidden-div").style.display = "block";
  this.style.display = "none"
}

playButton.addEventListener("click", shuffle, false);
const memoryGame = document.querySelector(".memory-game");

//memory cards listener
const memoCards = document.querySelectorAll(".memo-card");
let firstCard;
let secondCard;

memoCards.forEach(card =>
  card.addEventListener("click", flipCard)
)

let moves = 0;

function flipCard(){
  moves += 1;
  memoCard = this;
  memoCard.classList.add("flipped");
  if (memoCard.classList.contains("flipped")){
    backCard = memoCard.querySelector(".back");
    frontCard = memoCard.querySelector(".front");
    backCard.style.visibility = "hidden";
    memoCard.classList.remove("flipped");
  };

  if (moves === 1){
    firstCard = frontCard;
    firstBackCard = backCard;
  } else {
    secondCard = frontCard;
    secondBackCard = backCard;
    checkMatch();
  };
}

//cheking if cards match
function checkMatch(){
  setTimeout(() => {
    if (firstCard.classList.value == secondCard.classList.value) {
      firstCard.style.visibility = "hidden";
      secondCard.style.visibility = "hidden";
      firstCard.parentElement.classList.add("paired");
      secondCard.parentElement.classList.add("paired");
    } else {
      tryAgain();
    };
    reset();
  }, 1000);
}

function tryAgain(){
  firstBackCard.style.visibility = "visible";
  secondBackCard.style.visibility = "visible";
}


function reset(){
  firstCard = null;
  secondCard = null;
  moves = 0;
  memoCards.forEach(function(card){
    if (card.classList.contains("paired")){
      card.removeEventListener("click", flipCard)
    }});
}

function shuffle() {
  memoryGame.style.visibility = "visible";
  memoCards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}
