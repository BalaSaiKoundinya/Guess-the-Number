let gameResult = document.getElementById("gameResult");
let inputResult = document.getElementById("inputResult");

let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);

    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High, Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low, Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "Green";
    }
    else {
        gameResult.textContent = "Please provide a valid Input";
        gameResult.style.backgroundColor = "Red";
    }
}