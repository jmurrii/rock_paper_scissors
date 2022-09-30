const choicesArray = ["ROCK", "PAPER", "SCISSORS"];
let userChoice;




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

function userChoosesRock() {
    userChoice = choicesArray[0];
    console.log("Challenger's choice is " + userChoice);
    return userChoice
}
function userChoosesPaper() {
    userChoice = choicesArray[1];
    console.log("Challenger's choice is " + userChoice);
    return userChoice
}
function userChoosesScissors() {
    userChoice = choicesArray[2];
    console.log("Challenger's choice is " + userChoice);
    return userChoice
}


// setTimeout(() => {
//     console.log(setUserChoice() + "!!");
// }, 5000)


function getComputerChoice() {
    let i = Math.floor(Math.random() * choicesArray.length);

    document.getElementById("computerChoice").innerText = choicesArray[i];
    console.log('Computer\'s choice is ' + choicesArray[i]);
    return choicesArray[i];
}


// function compare



function gameLoop() {
    setTimeout(getComputerChoice, 2000);
    // compare scores
    //alert who wins
    // 
}




















