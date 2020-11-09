const MAX_NUMBER = 100
const MIN_NUMBER = 0
const Start_Number = 50
let computerGuess 
let minGuess
let maxGuess

function reset(){
    computerGuess = Start_Number
    minGuess = MIN_NUMBER
    maxGuess = MAX_NUMBER
}
function binaryGuess(min,max){
    return min + Math.floor((max-min)/2)
}
function randumGuess(min,max){
    return min + Math.floor(Math.random()*(max - min)) 
}
function badGuess(isHig){
    if (isHig){
        return computerGuess-1
    }
    else{
        return computerGuess+1
    }
}



document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    maxGuess = computerGuess
    computerGuess = binaryGuess(minGuess,maxGuess)

    setMessage(`Is it ${computerGuess}?`)
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt corekt?
    setMessage("wohoo!")

})
document.getElementById('too-low-btn').addEventListener('click', function () {
    minGuess = computerGuess
    computerGuess = binaryGuess(minGuess,maxGuess)
    setMessage(`Is it ${computerGuess}?`)
})


function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    console.log("supp")
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'
    reset()
    setMessage(`Is it ${computerGuess}?`)
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)

