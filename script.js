
// Elements
const cooperateBtn = document.getElementById("cooperate");
const betrayBtn = document.getElementById("betray");
const resetBtn = document.getElementById("reset");

const resultEl = document.getElementById("result");
const roundEl = document.getElementById("round");
const historyEl = document.getElementById("history");

const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");

// Variables
let playerScore = 0;
let computerScore = 0;
let round = 0;

// Payoff table
const payoff = {
    "cooperate-cooperate": [3, 3],
    "cooperate-betray": [0, 5],
    "betray-cooperate": [5, 0],
    "betray-betray": [1, 1]
};

// Get computer choice
function getComputerChoice() {
    const choices = ["cooperate", "betray"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Play one round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const key = `${playerChoice}-${computerChoice}`;
    const [playerPoints, computerPoints] = payoff[key];

    // Update scores
    playerScore += playerPoints;
    computerScore += computerPoints;
    round++;

    // Update displays
    roundEl.textContent = round;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;

    // Show result
    let message = `You chose ${playerChoice}, Computer chose ${computerChoice}. `;
    message += `You got ${playerPoints} points, Computer got ${computerPoints} points.`;
    resultEl.textContent = message;

    // Add to history
    const li = document.createElement("li");
    li.textContent = `Round ${round}: You - ${playerChoice}, Computer - ${computerChoice} => You: ${playerPoints}, Computer: ${computerPoints}`;
    historyEl.appendChild(li);
}

// Reset game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 0;

    roundEl.textContent = round;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    resultEl.textContent = "Result: ";
    historyEl.innerHTML = "";
}

// Event listeners
cooperateBtn.addEventListener("click", () => playRound("cooperate"));
betrayBtn.addEventListener("click", () => playRound("betray"));
resetBtn.addEventListener("click", resetGame);