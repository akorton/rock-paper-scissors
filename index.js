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

    const computerWinMessage = "Computer wins! Know your place, miserable human beeing!" + `${toCamelCase(computerChoice)} beats ${toCamelCase(playerChoice)}`;
    const playerWinMessage = "You win? How? Impossible...\n" + `${toCamelCase(playerChoice)} beats ${toCamelCase(computerChoice)}`;

    if (playerChoice == computerChoice) return "You tied a computer! Not bad!";
    if (playerChoice == "paper" && computerChoice == "scissors") return computerWinMessage;
    if (playerChoice == "scissors" && computerChoice == "paper") return playerWinMessage;
    return computerIndex < playerIndex ? computerWinMessage : playerWinMessage; 
}

let computerScore = 0;
let playerScore = 0;

const updateScores = (playerChoice)=>{
    const roundResult = playOneRound(playerChoice);
    if (roundResult.includes("Computer wins!")) computerScore++;
    if (roundResult.includes("You win?")) playerScore++;
    let computerScoreParagraph = document.querySelector(".computer p");
    let playerScoreParagraph = document.querySelector(".player p");
    computerScoreParagraph.innerText = computerScore;
    playerScoreParagraph.innerText = playerScore;
    if (computerScore == 5 || playerScore == 5) {
        rockButton.setAttribute('disabled', 'disabled');
        paperButton.setAttribute('disabled', 'disabled');
        scissorsButton.setAttribute('disabled', 'disabled');
        let crownImage;
        if (playerScore == 5) crownImage = document.querySelector('.player .crown');
        if (computerScore == 5) crownImage = document.querySelector('.computer .crown');
        crownImage.style.visibility = 'visible';
    }
}

const rockButton = document.querySelector(".rock");
rockButton.addEventListener('click', (e)=>{
    updateScores("rock");
})

const paperButton = document.querySelector(".paper");
paperButton.addEventListener('click', (e)=>{
    updateScores("paper");
})

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener('click', (e)=>{
    updateScores("scissors");
})
