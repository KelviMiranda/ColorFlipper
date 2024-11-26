'use strict';

const hexColors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

const getNumberRandom = () => Math.floor(Math.random() * hexColors.length);

const randomNumberEvent = () => {
    let hex = '#';

    for(let i = 1; i <= 6; i++){
        hex += hexColors[getNumberRandom()]
    }

    document.body.style.background = hex;
    color.textContent = hex;
}

btn.addEventListener('click', randomNumberEvent)