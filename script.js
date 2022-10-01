const choicesArray = ["ROCK", "PAPER", "SCISSORS"];
let computerScore = 0;
let userScore = 0;


function setUserChoice() {

    const rock = document.getElementById("rock");

    rock.addEventListener("click", function () {
        document.getElementById("userChoice").innerText = "ROCK";
        userChoosesRock();
        gameLoop();
    })


    const paper = document.getElementById("paper");

    paper.addEventListener("click", function () {
        document.getElementById("userChoice").innerText = "PAPER";
        userChoosesPaper();
        gameLoop();
    })

    const scissors = document.getElementById("scissors");

    scissors.addEventListener("click", function () {
        document.getElementById("userChoice").innerText = "SCISSORS";
        userChoosesScissors();
        gameLoop();
    })
};

setUserChoice();

let userChoice;
function userChoosesRock() {
    userChoice = choicesArray[0];
    return userChoice;
}
function userChoosesPaper() {
    userChoice = choicesArray[1];
    return userChoice;
}
function userChoosesScissors() {
    userChoice = choicesArray[2];
    return userChoice;
}


let computerChoice;
function getComputerChoice() {
    let i = Math.floor(Math.random() * choicesArray.length);

    document.getElementById("computerChoice").innerText = choicesArray[i];
    computerChoice = choicesArray[i];
    return computerChoice;
}




function compare(user, computer) {

    if (user === "ROCK" && computer === "PAPER") {
        document.getElementById("winner").innerText = "Computer Wins :(:(:( ";
        computerScore += 1;
    } else if (user === "ROCK" && computer === "SCISSORS") {
        document.getElementById("winner").innerText = "You Win!!!!";
        userScore += 1;
    } else if (user === "PAPER" && computer === "ROCK") {
        document.getElementById("winner").innerText = "You Win!!!!";
        userScore += 1;
    } else if (user === "PAPER" && computer === "SCISSORS") {
        document.getElementById("winner").innerText = "Computer Wins :(:(:( ";
        computerScore += 1;
    } else if (user === "SCISSORS" && computer === "ROCK") {
        document.getElementById("winner").innerText = "Computer Wins :(:(:( ";
        computerScore += 1;
    } else if (user === "SCISSORS" && computer === "PAPER") {
        document.getElementById("winner").innerText = "You Win!!!!";
        userScore += 1;
    } else {
        document.getElementById("winner").innerText = "It's a draw";
    }

}


function updateScore() {

    document.getElementById("score").innerHTML = "<span id='user-score'>Challenger</span>" + userScore + " - " + computerScore + "<span id='computer-score'>Computer</span>";

    const userScoreSpan = document.getElementById('user-score');
    const computerScoreSpan = document.getElementById('computer-score');


    if (userScore > computerScore) {
        userScoreSpan.style.color = "rgba(71, 214, 55, 0.943)" :
    } else if (computerScore > userScore) {
        computerScoreSpan.style.color = "rgba(71, 214, 55, 0.943)";
    } else {
        userScoreSpan.style.color = "black";
        computerScoreSpan.style.color = "black";
    }
}

function clear() {
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("winnerText").innerText = "";
    document.getElementById("winner").innerText = "";
}


function gameLoop() {
    clear();
    setTimeout(getComputerChoice, 800);
    setTimeout(() => {
        document.getElementById("winnerText").innerText = "And the Winner is:   ";
    }, 1800);
    setTimeout(() => {
        compare(userChoice, computerChoice);
    }, 2800);
    setTimeout(updateScore, 3800);
}


















