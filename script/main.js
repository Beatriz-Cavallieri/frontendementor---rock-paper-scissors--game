const optionButtons = document.querySelectorAll('.option-btn')
const renderUserPlayed = document.getElementById('user-played')
const renderHousePlayed = document.getElementById('house-played')
//
let score = 0
const scoreNumber = document.getElementById('score')
//
const playAgain = document.getElementById('play-again')
const result = document.getElementById('result')
//
let options = ["rock", "paper", "scissors"]
let resultMessages = ["Draw", "You win", "You lose"]
//
let houseChoice = ""
let userChoice = ""

optionButtons.forEach((button) => {
    button.addEventListener('click', () => play(button))
})

function play(button) {
    userChoice = button.getAttribute('id')
    console.log('user: ' + userChoice)
    //esconde as opções
    optionButtons.forEach((option) => option.classList.add('hidden'))
    houseChoice = housePlays()
    console.log('house: ' + houseChoice)
    showPlayed()
    showResult(userChoice, houseChoice)
}

playAgain.addEventListener('click', e => {
    //esconde os resultados e mostra as opções pra jogar novamente
    [result, playAgain, renderUserPlayed, renderHousePlayed].forEach((item) => item.classList.add('hidden'))
    optionButtons.forEach(button => button.classList.remove('hidden'))
})

function showPlayed() {
    // add style
    renderUserPlayed.classList.add(userChoice)
    renderHousePlayed.classList.add(houseChoice)
    // show
    renderUserPlayed.classList.remove('hidden')
    renderHousePlayed.classList.remove('hidden')
}

function compare(user, house) {
    if (user === house) {
        return (resultMessages[0])
    }
    else {
        switch (user) {
            case "rock":
                if (house === 'paper') {
                    return resultMessages[2]
                }
            case "paper":
                if (house === "scissors") {
                    return resultMessages[2]
                }
            case "scissors":
                if (house === "rock") {
                    return resultMessages[2]
                }
            default:
                {
                    return resultMessages[1]
                }
        }
    }
}

function housePlays() {
    let random = Math.floor(Math.random() * 3)
    return options[random]
}

function showResult(user, house) {
    let resultText = compare(userChoice, houseChoice)
    console.log(resultText)
    if (resultText === resultMessages[1]) {
        score++ //user wins
    }
    else if (resultText === resultMessages[2]) {
        score-- //user loses
    }
    scoreNumber.innerText = score
    result.innerText = resultText
    result.classList.remove('hidden')
    playAgain.classList.remove('hidden')
}