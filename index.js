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
    console.log(computerScore)
    console.log(playerScore)
    computerScoreParagraph.innerText = computerScore;
    playerScoreParagraph.innerText = playerScore;
}

const rockButton = document.querySelector(".rock");
rockButton.addEventListener((e)=>{
    updateScores("rock");
})
