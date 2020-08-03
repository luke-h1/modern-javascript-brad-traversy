// Values
let min = 1,
    max = 10;
winningNum = getRandomNum(min, max);
guessesLeft = 3;

// UI elements

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min + max

minNum.textContent = min;
maxNum.textContent = max;

// play again listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Create event listener for guestbtn
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value); // convert string to num

    // validation:
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Enter a number between ${min} & ${max}`, 'red');
    }

    // check if user won
    if (guess === winningNum) {
        gameOverMan(true, `${winningNum} is correct, you won!`);
    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            gameOverMan(
                false,
                `Game over, You lost. The correct number was ${winningNum}`
            );
        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(
                `${guess} is not correct, you have ${guessesLeft} guesses left`
            );
        }
    }

    function setMessage(msg, color) {
        message.style.color = color;
        message.textContent = msg;
    }

    function gameOverMan(won, msg) {
        let color;
        if (won === true) {
            color = 'green';
        } else {
            color = 'red';
        }
        // won === true ? (color = 'green') : (color = 'red');
        guessInput.disabled = true;
        guessInput.style.borderColor = color;
        message.style.color = 'color';
        setMessage(msg);
    }

    // play again
    guessBtn.value = 'play again';
    guessBtn.className += 'play-again';
});

// get winning number function

function getRandomNum(min, max) {
  return Math.floor(Math.random()*(max - min +1)+ min)
  // math.floor to round down 
}

// functions are hoisted
// you can call functions before you declare them
// that's how JS works
