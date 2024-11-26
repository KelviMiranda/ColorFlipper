"use strict";

const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', "tomato"];
const btn = document.querySelector("#btn");
const color = document.querySelector('.color');
/* function random color */
function randomColor(){
    /* Get random number between 0 - 3 */
    const randomNumber = getRandomNumber();
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

/* Get random function */
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', randomColor);