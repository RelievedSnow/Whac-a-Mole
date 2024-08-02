const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timeId = null

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () =>{
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

//moves the mole in random square every 5sec
function moveMole(){
    timeId = setInterval(randomSquare, 800) // calling the randomSQUARE function every 5 sec
}



moveMole()

function countDown(){
    currentTime--
    timeleft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDounTimerId)
        clearInterval(timeId)
        alert('GAME OVER! Your final score is ' + result )
    }
}

let countDounTimerId = setInterval(countDown, 1000)