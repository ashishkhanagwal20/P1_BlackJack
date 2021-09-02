let player = {
    name : "Ashish",
    chips : "232"
};

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ":" + player.chips;


function renderGame() {

    cardEl.textContent = "Cards :" ;
    for(let i = 0;i<cards.length;i++){
        cardEl.textContent += cards[i] + " ";
    }//+ cards[0] + " and " + cards[1];    //use random function later
    sumEl.textContent = "Sum :" + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new Card";
    }
    else if (sum === 21) {
        message = "Congratulations, you have won blackjack";
        hasBlackjack = true;
    }
    else {
        message = "Hard luck!!!, You are out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

let newCardEl = document.getElementById("new-el");


function newCards() {
    if(isAlive === true && hasBlackjack === false){
    let nextCard = getRandomCard();
    sum += nextCard;
    cards.push(nextCard);
    renderGame();
    }
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13) + 1;
    if(randomCard>10){
        return 10;
    }
    else if(randomCard ===11){
        return 11;
    }
    else{
        return randomCard;
    }
}



