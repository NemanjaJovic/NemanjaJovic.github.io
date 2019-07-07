// Lets select the elements first
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const number = document.querySelector('.number');

// Import audio file as object
let win = new Audio('win.wav');

// Create score and state variables
let firstPlayer = 1;
let secondPlayer = 1;
let gameState = 0;

// Add event listener on window object
window.addEventListener('keypress', function(e){
    if (e.keyCode === 65 || e.which === 65){
        if (gameState === 0){
            left.innerHTML = firstPlayer++;
            if (firstPlayer >10){
                win.play();
                alert('Aqua wins');
                gameState = 1;
            }    
        }
    } else if (e.keyCode === 76 || e.which === 76){
        if (gameState === 0){
            right.innerHTML = secondPlayer++;
            if (secondPlayer > 10){
                win.play();
                alert('Magenta wins');
                gameState = 1;
            }
        }
    }
})

