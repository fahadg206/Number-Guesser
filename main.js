const button = document.getElementById('sumbit');
const yourGuess = document.getElementById('yourguess');
const text = document.getElementById('userinput');

const number = Math.floor(Math.random()*100);

button.addEventListener('click', () => {
    let input = document.getElementById('userinput').value;

    if(input == number) {
        yourGuess.innerHTML = `Congrats! The number ${number} was CORRECT!`
    } else if(input > number) {
        yourGuess.innerHTML = `Sorry! ${input} was too high.`
    } else if(input < number) {
        yourGuess.innerHTML = `Sorry! ${input} was too low.`
    }
}

    

)