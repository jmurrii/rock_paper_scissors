async function getUserChoice() {

    const rock = document.getElementById("rock");

    rock.addEventListener("click", function () {
        document.getElementById("userChoice").innerText = "ROCK";
    })

    const paper = document.getElementById("paper");

    paper.addEventListener("click", function () {
        document.getElementById("userChoice").innerText = "PAPER";
    })

    const scissors = document.getElementById("scissors");

    scissors.addEventListener("click", function () {
        document.getElementById("userChoice").innerText = "SCISSORS";
    })

}

getUserChoice();


/**** ****  getComputerChoice   ****  ****/

async function getComputerChoice() {
    await getUserChoice();
    let gameArray = ["ROCK", "PAPER", "SCISSORS"];

    let i = Math.floor(Math.random() * 3);
    // console.log(gameArray[i]);

    document.getElementById("computerChoice").innerText = gameArray[i];
}

getComputerChoice();


