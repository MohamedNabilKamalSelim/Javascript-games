const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const allPossibleChoice = document.querySelectorAll('button');

let userChoice;
let computerChoice;

allPossibleChoice.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    GenerateRandomComputerChoice();

    resultDisplay.innerHTML = GetTheWinner();
}));

function GenerateRandomComputerChoice(){
    const randomChoice = Math.floor(Math.random() * allPossibleChoice.length);

    computerChoice = allPossibleChoice[randomChoice].id;
    computerChoiceDisplay.innerHTML = computerChoice;
}

function GetTheWinner()
{
    if(computerChoice === userChoice) return "It's a drow";

    let result;
    let userChoiceIndex, computerChoiceIndex;

    //get the index of userChoice and computerChoice in allPossibleChoice array
    for(let i = 0; i < allPossibleChoice.length; i++){
        if(computerChoice === allPossibleChoice[i].id) computerChoiceIndex = i;
        if(userChoice === allPossibleChoice[i].id) userChoiceIndex = i;
    }
    
    let checkWinner = computerChoiceIndex - userChoiceIndex;
    if(Math.abs(checkWinner) > 1){
        if(checkWinner < 0) result = "You win!";
        else result = "You lost!";
    }
    else{
        if(checkWinner < 0) result = "You lost!";
        else result = "You win!";
    }
    return result;
}