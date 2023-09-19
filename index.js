let gameResult = document.getElementById("gameResult");
let inputResult = document.getElementById("inputResult");

let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
function checkGuess() {
    let guessedNumber = parseInt(userInput.value);

    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High, Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    }
}