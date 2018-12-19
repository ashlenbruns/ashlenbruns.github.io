// Set variables for the game //
var playerWins = document.getElementById("playerWins");
var playerLoses = document.getElementById("playerLoses");
var guessesLeft = document.getElementById("guessesLeft");
var letterGuessed = [document.getElementById( "letterGuessed")];
var gameResult = document.getElementById("gameResult");
var playerGuessArray = [];
var validKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Player input & computer picks random letter //
document.onkeyup = function(event) {
    var playerChoice = event.key;
    var computerChoice = validKeys[Math.floor(Math.random()*validKeys.length)];
    playerGuessArray.push(playerChoice);
    document.getElementById("letterGuessed").innerHTML = playerGuessArray;
    console.log(playerChoice);

    guessesLeft.textContent = parseInt(guessesLeft.textContent)-1;

    // win scenario //
    if (playerChoice === computerChoice) {
        playerWins.textContent = parseInt(playerWins.textContent)+1;
        playerGuessArray.length = 0; 
        guessesLeft.textContent = 9;
        alert("You are wise for your years...you win!");
    }

    // lose scenario //
    else if (guessesLeft.textContent < 1) {
        playerLoses.textContent = parseInt(playerLoses.textContent)+1;
        playerGuessArray.length = 0;
        guessesLeft.textContent = 9;
        alert("You lose...better luck next time.");  
    }

};
