let player = {
    name: "Per",
    chips: 145
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

//playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    // if 1     -> retun 11
    // if 11-13 -> return 10
    let randomNumber = Math.floor( Math.random()*13) + 1
    if (randomNumber > 10) { 
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }    
}

function startGame() {
    isAlive = true
    // generate two random numbers
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    
    // re-assign the cards and sum variables so that the game can start 
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    // render the cards
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cards.textContent = "Card: " + cards
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack~!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive || sum !== 21) {
        let card = getRandomCard()
        sum += cards
        cards.push(card)
        renderGame()
    }
}