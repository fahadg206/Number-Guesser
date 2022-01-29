const button = document.getElementById('sumbit');
const yourGuess = document.getElementById('yourguess');
const text = document.getElementById('userinput');
const guessCounter = document.getElementById("numofguesses");
let numGuesses = 0;

const number = Math.floor(Math.random()*100);
let userGuess = text.value;
let storeGuesses = [];


button.addEventListener('click', () => {
    let input = document.getElementById('userinput').value;

      // Keep track of how many times the user takes a guess
    numGuesses += 1;
    guessCounter.innerHTML = "Number of Guesses: " + numGuesses;

    if(input == number) {
        yourGuess.innerHTML = `Congrats! The number ${number} was CORRECT!`
    } else if(input > number) {
        yourGuess.innerHTML = `Sorry! ${input} was too high.`
    } else if(input < number) {
        yourGuess.innerHTML = `Sorry! ${input} was too low.`
    };




}

)

    