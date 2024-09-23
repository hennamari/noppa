'use strict'


const diceImage = document.getElementById('diceImage')

document.getElementById('dice').addEventListener('click', () => {

    const randomNumber = getRandomNumber(1, 6); 
    diceImage.src = `./images/${randomNumber}.png`
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}