const button = document.getElementById('sumbit');
const hint = document.getElementById('hint');
const text = document.getElementById('userinput');
const guessCounter = document.getElementById("numofguesses");
const yourGuesses = document.getElementById('yourguesses');
let numOfGuesses = 0;

const number = Math.floor(Math.random()* 100 ) + 1;
let userGuess = text.value;
let storeGuesses = [];


button.addEventListener('click', () => {
    let input = document.getElementById('userinput').value;
    let arrayOfGuesses = storeGuesses.push(input);
      // Keep track of how many times the user takes a guess
    numOfGuesses += 1;
    guessCounter.innerHTML = "Number of Guesses: " + numOfGuesses;


    //hint logic
    
    if(input < 1 || input > 100) {
        window.alert('Invalid number. Please enter a number between 1-100');
        numOfGuesses = 0;
    };

    if(input === number) {
        hint.innerHTML = `Congrats! The number ${number} was CORRECT!`;
        yourGuesses.innerHTML = "Your Guesses:" + " " + storeGuesses;
    } else if(input > number) {
        hint.innerHTML = `Sorry! ${input} was too high.`;
        yourGuesses.innerHTML = "Your Guesses:" + " " + storeGuesses;
    } else if(input < number) {
        hint.innerHTML = `Sorry! ${input} was too low.`;
        yourGuesses.innerHTML = "Your Guesses:" + " " + storeGuesses;
    };






    if(numOfGuesses === 3) {
        hint.innerHTML = "Better luck next time!";
        window.alert(`GAME OVER! The correct answer was ${number}`);
    };



    

}

)

    