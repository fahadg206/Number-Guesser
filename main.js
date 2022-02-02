const button = document.getElementById('sumbit');
const hint = document.getElementById('hint');

const guessCounter = document.getElementById("numofguesses");
const yourGuesses = document.getElementById('yourguesses');
let numOfGuesses = 0;

const number = Math.floor(Math.random()* 100 ) + 1;

let storeGuesses = [];

button.addEventListener('click', () => {
    
    let finalGuess = document.getElementById('userinput').value;
    let userGuess = Number(finalGuess);
    
    let arrayOfGuesses = storeGuesses.push(userGuess);
    
    // Keep track of how many times the user takes a guess
    numOfGuesses += 1;
    guessCounter.innerHTML = "Number of Guesses: " + numOfGuesses;

    //hint logic
    
    if(userGuess < 1 || userGuess > 100) {
        window.alert('Invalid number. Please enter a number between 1-100');
        numOfGuesses = 0;
    };

    if(userGuess === number) {
        hint.innerHTML = `Congrats! The number ${number} was CORRECT!`;
        yourGuesses.innerHTML = "Your Guesses:" + " " + storeGuesses;
        console.log(number);
    } else if(userGuess > number) {
        hint.innerHTML = `Sorry! ${userGuess} was too high.`;
        yourGuesses.innerHTML = "Your Guesses:" + " " + storeGuesses;
    } else if(userGuess < number) {
        hint.innerHTML = `Sorry! ${userGuess} was too low.`;
        yourGuesses.innerHTML = "Your Guesses:" + " " + storeGuesses;
    };

    // 3 guess limit 
    if(numOfGuesses === 3) {
        hint.innerHTML = "Better luck next time!";
        window.alert(`GAME OVER! The correct answer was ${number}`);
    };



    

}

)

    