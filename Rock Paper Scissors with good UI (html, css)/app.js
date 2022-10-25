const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const allPossibleChoice = document.querySelectorAll('.btn');

let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
let moves = 0;

allPossibleChoice.forEach(choice => choice.addEventListener('click', (e) => {
    
    const movesLeft = document.querySelector('.movesleft');
    moves++;
    movesLeft.innerText = `Moves Left: ${10-moves}`;
    
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    GenerateRandomComputerChoice();

    resultDisplay.innerHTML = GetTheWinner();
    
    if(moves == 10) gameOver(allPossibleChoice,movesLeft);
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
    const userScoreDisplay = document.querySelector('.p-count');
    const computerScoreDisplay = document.querySelector('.c-count');

    //get the index of userChoice and computerChoice in allPossibleChoice array
    for(let i = 0; i < allPossibleChoice.length; i++){
        if(computerChoice === allPossibleChoice[i].id) computerChoiceIndex = i;
        if(userChoice === allPossibleChoice[i].id) userChoiceIndex = i;
    }
    
    let checkWinner = computerChoiceIndex - userChoiceIndex;
    if(Math.abs(checkWinner) > 1){
        if(checkWinner < 0) {
            result = "You win!";
            userScore++;
            userScoreDisplay.textContent = userScore;
        }
        else {
            result = "You lost!";
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
    }
    else{
        if(checkWinner < 0){
             result = "You lost!";
             computerScore++;
             computerScoreDisplay.textContent = computerScore;
        }
        else {
            result = "You win!";
            userScore++;
            userScoreDisplay.textContent = userScore;
        }
    }
    return result;
}

 const gameOver = (playerOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(userScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(userScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }