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
    console.log("Challenger's choice is " + userChoice);
    return userChoice;
}
function userChoosesPaper() {
    userChoice = choicesArray[1];
    console.log("Challenger's choice is " + userChoice);
    return userChoice;
}
function userChoosesScissors() {
    userChoice = choicesArray[2];
    console.log("Challenger's choice is " + userChoice);
    return userChoice;
}


let computerChoice;
function getComputerChoice() {
    let i = Math.floor(Math.random() * choicesArray.length);

    document.getElementById("computerChoice").innerText = choicesArray[i];
    console.log('Computer\'s choice is ' + choicesArray[i]);
    computerChoice = choicesArray[i];
    return computerChoice;
}



function compare(user, computer) {

    if (user === "ROCK" && computer === "PAPER") {
        document.getElementById("winner").innerText = "Computer Wins :(:(:( ";
        console.log("Computer Wins :(:(:( ");
        computerScore += 1;
    } else if (user === "ROCK" && computer === "SCISSORS") {
        document.getElementById("winner").innerText = "You Win!!!!";
        console.log("You Win!!!!");
        userScore += 1;
    } else if (user === "PAPER" && computer === "ROCK") {
        document.getElementById("winner").innerText = "You Win!!!!";
        console.log("You Win!!!!");
        userScore += 1;
    } else if (user === "PAPER" && computer === "SCISSORS") {
        document.getElementById("winner").innerText = "Computer Wins :(:(:( ";
        console.log("Computer Wins :(:(:( ");
        computerScore += 1;
    } else if (user === "SCISSORS" && computer === "ROCK") {
        document.getElementById("winner").innerText = "Computer Wins :(:(:( ";
        console.log("Computer Wins :(:(:( ");
        computerScore += 1;
    } else if (user === "SCISSORS" && computer === "PAPER") {
        document.getElementById("winner").innerText = "You Win!!!!";
        console.log("You Win!!!!");
        userScore += 1;
    } else {
        document.getElementById("winner").innerText = "It's a draw";
        console.log("It's a draw");
    }

}


function updateScore() {
    console.log(`UserScore: ${userScore} - ${computerScore} ComputerScore`);
    document.getElementById("score").innerText = `User :   ${userScore}  -  ${computerScore}   : Computer`;
}

function clear() {
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("winnerText").innerText = "";
    document.getElementById("winner").innerText = "";
}


function gameLoop() {
    clear();
    setTimeout(getComputerChoice, 2000);
    setTimeout(() => {
        document.getElementById("winnerText").innerText = "And the Winner is:";
        console.log("And the Winner is:");
    }, 3500);
    setTimeout(() => {
        compare(userChoice, computerChoice);
    }, 5000);

    setTimeout(updateScore, 6000);
}




















