const prompt = require("prompt-sync")();

let choice = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

const getHumanChoice = function () {
	let humanChoice = prompt("Choose: ");
	return humanChoice.toLowerCase();
};

const getComputerChoice = function () {
	let i = Math.floor(Math.random() * 3);
	return choice[i].toLowerCase();
};

let playRound = function (humanSelection, computerSelection) {
	console.log(`You chose: ${humanSelection}`);
	console.log(`Computer chose: ${computerSelection}`);
	if (
		(humanSelection === "rock" && computerSelection === "scissors") ||
		(humanSelection === "paper" && computerSelection === "rock") ||
		(humanSelection === "scissors" && computerSelection === "paper")
	) {
		humanScore++;
	} else if (
		(computerSelection === "rock" && humanSelection === "scissors") ||
		(computerSelection === "paper" && humanSelection === "rock") ||
		(computerSelection === "scissors" && humanSelection === "paper")
	) {
		computerScore++;
	}
	if (humanSelection === computerSelection) {
		console.log("It's a tie");
	}
	console.log(`Your score-${humanScore}, computer Score-${computerScore}`);
};

function playGame() {
	for (let i = 0; i < 5; i++) {
		playRound(getHumanChoice(), getComputerChoice());
	}

	if (humanScore > computerScore) {
		console.log("You won");
	} else if (humanScore < computerScore) {
		console.log("You lost!");
	} else {
		console.log("It's a tie");
	}
}
playGame();
// console.log(getHumanChoice());
// console.log(getComputerChoice());
