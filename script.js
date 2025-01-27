// Global variables to track scores
let playerScore = 0;
let computerScore = 0;

// Function to handle the player's choice
function playerChoice(playerSelection) {
    // List of possible choices
    const choices = ['stone', 'paper', 'scissors'];

    // Randomly generate computer's choice
    const computerSelection = choices[Math.floor(Math.random() * 3)];

    // Display the computer's choice
    document.getElementById("computer-choice-text").innerHTML = `Computer chose: ${capitalizeFirstLetter(computerSelection)}`;

    // Determine the winner
    const result = determineWinner(playerSelection, computerSelection);

    // Update the result message
    document.getElementById("result-message").innerHTML = result;

    // Update the scores
    updateScores(result);
}

// Capitalizes the first letter of the string (Stone, Paper, Scissors)
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Determines the winner based on player and computer choices
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === 'stone' && computer === 'scissors') ||
        (player === 'paper' && computer === 'stone') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Update the scores based on the result
function updateScores(result) {
    if (result === "You win!") {
        playerScore++;
        document.getElementById("player-score").textContent = playerScore;
    } else if (result === "You lose!") {
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
    }
}

// Restart the game by resetting scores and UI
function restartGame() {
    // Reset scores
    playerScore = 0;
    computerScore = 0;
    
    // Update the displayed scores
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    
    // Reset result message
    document.getElementById("result-message").innerHTML = "Choose your move!";
    
    // Reset computer choice
    document.getElementById("computer-choice-text").innerHTML = "Computer is thinking...";
}
