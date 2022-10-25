const score = document.getElementById('score')
const timeLeft = document.getElementById('time-left')
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

let result = 0
let hitPosition

let currentTime = 10
timeLeft.textContent = currentTime

let timerId = null


MoveMole()

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result++;
            score.textContent = result
            hitPosition = null
        }
    })
})

let timeCounter = setInterval(TimeCounter, 1000)

function MoveMole(){
    timerId = setInterval(RandomSquare, 600)
}

function RandomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

function TimeCounter(){
    timeLeft.textContent = --currentTime

    if(currentTime == 0){
        clearInterval(timeCounter)
        clearInterval(timerId)
        alert('Game Over! \n Your fial Score is: ' + result)
    }
}