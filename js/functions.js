'use strict'

// Haetaan noppakuva-elementti
const diceImage = document.getElementById('diceImage')

// Lisätään klikkaustapahtuma noppaa varten
document.getElementById('dice').addEventListener('click', () => {
    // Arvotaan satunnainen luku väliltä 1-6
    const randomNumber = getRandomNumber(1, 6);
    
    // Päivitetään noppakuvan lähde (src) vastaamaan satunnaista arvoa
    diceImage.src = `./images/${randomNumber}.png`
})

// Funktio satunnaisluvun saamiseksi väliltä min ja max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}