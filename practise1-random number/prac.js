let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;
let score = 0;
let guessHistory = [];
console.log(randomNumber);
let i=0;

const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const scoreDisplay = document.getElementById('score');
const historyList = document.getElementById('history');
const restartButton = document.getElementById('restartButton');

// Function to handle the guess
guessButton.addEventListener('click', function() {
    const userGuess = Number(guessInput.value);
    
    
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter only number's between 1 and 100.";
        return;
    }
    

    for (let i = 0; i < guessHistory.length; i++) { 
        if (guessHistory[i] === userGuess) {
             console.log(i);
            // console.log(guessHistory[i]);
            message.textContent = "You have already guessed that number. Please try a different number.";
            return;
        }
    }

    // if (guessHistory.includes(userGuess)) {
    //     message.textContent = 'You have already guessed that number. Please try a different number.';
    //     return;
    // }


    // Add guess to history
    guessHistory.push(userGuess);
    console.log(guessHistory);
    console.log(guessHistory[i]);
    updateHistory();
    // historyDisplay.textContent = 'Your guesses: ' + guessHistory.join(', ');


    // no value to compare with as guess
    // if (guessHistory[i] === guessHistory[i + 1]) {
    //         console.log(guessHistory[i]);
    //         console.log(`Same value found at index ${i} and ${i + 1}: ${guessHistory[i]}`);
    //         message.textContent = "Please Enter a different value";
    //     }
   
    // i++;


    attemptsLeft--;




    if (userGuess === randomNumber) {
        score += attemptsLeft * 10; // Score based on remaining attempts
        message.textContent = "Congratulations! You've guessed the number!";
        scoreDisplay.textContent = `Score: ${score}`;
        endGame();
    } else if (attemptsLeft === 0) {
        message.textContent = `Game over! The number was ${randomNumber}.`;
        endGame();
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = "Too high! Try again.";
    }

    attemptsDisplay.textContent = `Attempts Left: ${attemptsLeft}`;
    guessInput.value = ''; // Clear the input
});

// Function to update guess history
function updateHistory() {
    historyList.innerHTML = ''; // Clear current list
    guessHistory.forEach(guess => {
        const listItem = document.createElement('li');
        listItem.textContent = `Guess: ${guess}`;
        historyList.appendChild(listItem);
    });
}

// Function to end the game
function endGame() {
    guessButton.disabled = true;
    restartButton.style.display = 'block';
}

// Restart the game
restartButton.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    score = 0;
    guessHistory = [];
    guessButton.disabled = false;
    message.textContent = '';
    attemptsDisplay.textContent = `Attempts Left: ${attemptsLeft}`;
    scoreDisplay.textContent = `Score: ${score}`;
    restartButton.style.display = 'none';
    guessInput.value = ''; // Clear the input
    updateHistory(); // Clear history
});
