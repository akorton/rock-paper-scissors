const getComputerChoice = () =>{
    const choices = {0: "paper", 1: "rock", 2: "scissors"};
    return choices[parseInt(Math.random()*3)];
}

const toCamelCase = (str) =>{
    str.toLowerCase();
    if (str.length < 1) return str;
    let ans = str[0].toUpperCase() + str.substring(1);
    return ans;
}

const playOneRound = (playerChoice)=>{
    const computerChoice = getComputerChoice();
    const possibilities = ["paper", "rock", "scissors"];
    const playerIndex = possibilities.indexOf(playerChoice)
    , computerIndex = possibilities.indexOf(computerChoice);

    const computerWinMessage = "Computer wins! Know your place, miserable human beeing!\n" + `${toCamelCase(computerChoice)} beats ${toCamelCase(playerChoice)}.`;
    const playerWinMessage = "You win? How? Impossible...\n" + `${toCamelCase(playerChoice)} beats ${toCamelCase(computerChoice)}.`;

    if (playerChoice == computerChoice) return "You tied a computer! Not bad!";
    if (playerChoice == "paper" && computerChoice == "scissors") return computerWinMessage;
    if (playerChoice == "scissors" && computerChoice == "paper") return playerWinMessage;
    return computerIndex < playerIndex ? computerWinMessage : playerWinMessage; 
}

const updateScoresDOM = ()=>{
    let computerScoreParagraph = document.querySelector(".computer p");
    let playerScoreParagraph = document.querySelector(".player p");
    computerScoreParagraph.innerText = computerScore;
    playerScoreParagraph.innerText = playerScore;
}

let computerScore = 0;
let playerScore = 0;

const updateScores = (playerChoice)=>{
    const roundResult = playOneRound(playerChoice);
    if (roundResult.includes("Computer wins!")) computerScore++;
    if (roundResult.includes("You win?")) playerScore++;
    let commentParagraph = document.querySelector(".comments p");
    commentParagraph.innerText = roundResult;
    updateScoresDOM();
    if (computerScore == 5 || playerScore == 5) {
        choiceButtons.forEach((btn)=>{
            btn.setAttribute('disabled', true);
        });
        let crownImage;
        if (playerScore == 5) {
            crownImage = document.querySelector('.player .crown');
            commentParagraph.innerText = 'You win! Congratilations!!!';
        }
        if (computerScore == 5) {
            crownImage = document.querySelector('.computer .crown');
            commentParagraph.innerText = 'It went as expected... Hit that \'Play again\' button and try untill you win!';
        }
        crownImage.style.visibility = 'visible';
    }
}

let choiceButtons = [];

const rockButton = document.querySelector(".rock");
rockButton.addEventListener('click', (e)=>{
    updateScores("rock");
})
choiceButtons.push(rockButton);

const paperButton = document.querySelector(".paper");
paperButton.addEventListener('click', (e)=>{
    updateScores("paper");
})
choiceButtons.push(paperButton);

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener('click', (e)=>{
    updateScores("scissors");
})
choiceButtons.push(scissorsButton);


const playAgainButton = document.querySelector(".play-again");
playAgainButton.addEventListener('click', (e)=>{
    playerScore = 0;
    computerScore = 0;
    updateScoresDOM();
    let crowns = document.querySelectorAll(".crown");
    crowns.forEach((crown)=>{
        crown.style.visibility = 'hidden';
    });
    choiceButtons.forEach((btn)=>{
        btn.disabled = false;
    });
})
