let us = 0; // User score
let cs = 0; // Computer score

// Select the elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");

// Function to generate the computer's choice
const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    return options[Math.floor(Math.random() * 3)];
};

// Function to handle a draw
const drawGame = () => {
    msg.innerText = "It's a draw. Play again!";
    msg.style.background = "yellow";
};

// Function to show the winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        us++;
        userScore.innerText = us;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    } else {
        cs++;
        compScore.innerText = cs;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
};

// Function to play the game
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "stone") {
            userWin = compChoice === "scissor";
        } else if (userChoice === "paper") {
            userWin = compChoice === "stone";
        } else if (userChoice === "scissor") {
            userWin = compChoice === "paper";
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Add event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});
