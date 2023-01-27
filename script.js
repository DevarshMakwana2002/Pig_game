'use strict'

//this is the selection of elements
const score0el = document.getElementById("score--0")
const score1el = document.getElementById("score--1")
const diceel = document.querySelector(".dice")
const btnRoll = document.querySelector(".btn--roll")
const btnNew = document.querySelector(".btn--new")
const btnHold = document.querySelector(".btn--hold")
const current0score = document.getElementById("current--0")
const current1score = document.getElementById("current--1")

// this is initial conditions
let currentScore
let scores;
let activePlayer
let playing
function initialconditions() {
    score0el.textContent = 0
    score1el.textContent = 0
    diceel.classList.add("hidden")
    currentScore = 0
    scores = [0, 0]
    activePlayer = 0
    playing = true
}
initialconditions()

// this is for selecting the dice 
btnRoll.addEventListener("click", () => {
    diceel.classList.remove("hidden")
    const dice = Math.trunc(Math.random() * 6) + 1
    diceel.src = `dice-${dice}.png`


    if (dice !== 1) {
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore

    }
    else {
        switchPlayer()
    }

    // console.log(dice)
})

btnHold.addEventListener('click', () => {
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
    } else {

        switchPlayer()
    }
    // console.log(scores)
})

function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector(`.player--${activePlayer}`).classList.add("player--active")
}

btnNew.addEventListener("click", ()=>{
    initialconditions()
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner")
    document.querySelector(`.player--0`).classList.add("player--active")
})