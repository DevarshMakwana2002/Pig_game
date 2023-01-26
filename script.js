'use strict';

//this is the selection of elements
const score0el = document.getElementById("score--0")
const score1el = document.getElementById("score--1")
const diceel = document.querySelector(".dice")
const btnRoll = document.querySelector(".btn--roll")
const btnNew = document.querySelector(".btn--new")
const btnHold = document.querySelector(".btn--hold")

// this is initial conditions 
score0el.textContent = 0;
score1el.textContent = 0;
diceel.classList.add("hidden")

// this is for selecting the dice 
btnRoll.addEventListener("click",()=>{
    diceel.classList.remove("hidden")
    const dice = Math.trunc(Math.random()*6)+1
    diceel.src = `dice-${dice}.png`
    // console.log(dice)
})