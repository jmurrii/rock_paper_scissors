const choicesArray = ["rock", "paper", "scissors"];
let challengerChoice;
let computerChoice;
let challengerScore = 0;
let computerScore = 0;
const challengerPoints = document.getElementById('challengerPoints');
const computerPoints = document.getElementById('computerPoints');
challengerPoints.innerText = challengerScore;
computerPoints.innerText = computerScore;

setchallengerChoice();

function setchallengerChoice() {
    const icons = document.querySelectorAll('.icons');

    icons.forEach((icon) => {
        icon.addEventListener("click", function () {
            challengerChoice = this.id;
            document.getElementById("challengerChoice").innerText = challengerChoice;

            gameLoop();
        });
    });
}

function getComputerChoice() {
    let i = Math.floor(Math.random() * choicesArray.length);

    document.getElementById("computerChoice").innerText = choicesArray[i];
    computerChoice = choicesArray[i];
    return computerChoice;
}

function compare(challenger, computer) {

    if (challenger === "rock" && computer === "paper") {
        document.getElementById("winner").innerText = "Computer Wins :(:(:( ";
        computerScore += 1;
    } else if (challenger === "rock" && computer === "scissors") {
        document.getElementById("winner").innerText = "You Win!!!!";
        challengerScore += 1;
    } else if (challenger === "paper" && computer === "rock") {
        document.getElementById("winner").innerText = "You Win!!!!";
        challengerScore += 1;
    } else if (challenger === "paper" && computer === "scissors") {
        document.getElementById("winner").innerText = "Computer Wins :(:(:( ";
        computerScore += 1;
    } else if (challenger === "scissors" && computer === "rock") {
        document.getElementById("winner").innerText = "Computer Wins :(:(:( ";
        computerScore += 1;
    } else if (challenger === "scissors" && computer === "paper") {
        document.getElementById("winner").innerText = "You Win!!!!";
        challengerScore += 1;
    } else {
        document.getElementById("winner").innerText = "It's a draw";
    }
}

function gameLoop() {
    clearResults();
    setTimeout(getComputerChoice, 800);
    setTimeout(() => {
        document.getElementById("winnerText").innerText = "And the Winner is:   ";
    }, 1800);
    setTimeout(() => {
        compare(challengerChoice, computerChoice);
    }, 2800);
    setTimeout(updateScore, 3800);
}

function clearResults() {
    document.getElementById('computerChoice').innerText = "";
    document.getElementById('winnerText').innerText = "";
    document.getElementById('winner').innerText = "";
}

function updateScore() {

    challengerPoints.innerText = challengerScore;
    computerPoints.innerText = computerScore;

    if (challengerScore > computerScore) {
        document.getElementById('challengerScore').style.color = "rgba(71, 214, 55, 0.943)";
    } else if (computerScore > challengerScore) {
        document.getElementById('computerScore').style.color = "rgba(71, 214, 55, 0.943)";
    } else {
        document.getElementById('challengerScore').style.color = "black";
        document.getElementById('computerScore').style.color = "black";
    }
}











