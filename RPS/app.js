const buttons = document.querySelectorAll("button");
const resultEI = document.getElementById("result");
const playerscoreEI = document.getElementById("user-score")
const computerscoreEI = document.getElementById("computer-score")

let playerScore=0;
let computerScore=0;

buttons.forEach((button)=> {
	button.addEventListener("click", () => {
		const result = playRound(button.id, computerPlay());
		resultEI.textContent = result;
	});
});


function computerPlay() {
	const choices = ["rock", "paper", "scissors"]
	const randomChoice = Math.floor(Math.random()*choices.length);
	return choices[randomChoice];
}
	
function playRound(playerSelection,computerSelection) {
	if(playerSelection === computerSelection) {
		return "It's a tie!";
	} else if(
	(playerSelection === 'rock' && computerSelection === 'scissors') ||
	(playerSelection === 'paper' && computerSelection === 'rock') ||
	(playerSelection === 'scissors' && computerSelection === 'paper'))
		{
			playerScore++;
			playerscoreEI.textContent = playerScore;
			return "You win! " + playerSelection + "   beats   " + computerSelection;
		} else {
			computerScore++;
			computerscoreEI.textContent = computerScore;
			return "You lose! " + computerSelection + "   beats   " + playerSelection;
		}
}
