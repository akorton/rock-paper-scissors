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

const getVerifiedInput = () => {
    const possibleInputs = ["paper", "rock", "scissors"];
    const inputMessage = "Please chose your fighter: ";
    let input;
    input = prompt(inputMessage).toLowerCase();
    while (!possibleInputs.includes(input)) {
        input = prompt(inputMessage).toLowerCase();
    }
    return input;
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

const playBestOfNine = () => {
    let computerScore = 0;
    let playerScore = 0;
    while (computerScore < 5 && playerScore < 5){
        let playerChoice = getVerifiedInput();
        let roundResult = playOneRound(playerChoice);
        console.log(roundResult);
        if (roundResult.includes("Computer wins!")) computerScore++;
        if (roundResult.includes("Impossible...")) playerScore++;
        console.log(`Computer score: ${computerScore}`);
        console.log(`Player score: ${playerScore}`);
    }
}

playBestOfNine();