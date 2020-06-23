const optionButtons = document.querySelectorAll('.option-btn')
const scoreNumber = document.getElementById('score')
//
const playAgain = document.getElementById('play-again')
const result = document.getElementById('result')
// opção 1 = pedra, opção 2 = papel, opção 3 = tesoura
let houseChoice
let userChoice
let score = 0

optionButtons.forEach((button) => {
    button.addEventListener('click', () => play(button))
})

function play(button) {
    houseChoice = housePlays()
    userChoice = parseInt(button.getAttribute('id'))
    console.log(userChoice)
    if (userChoice === houseChoice) {
        //empate
        showResult("Draw")
    }
    else if ((userChoice - houseChoice) === 1 || (userChoice - houseChoice) === -2) {
        //usuário ganha
        score++
        showResult("You win")
    }
    else {
        //usuário perde
        score--
        showResult("You lose")
    }
    scoreNumber.innerText = score
    //esconde as opções
    optionButtons.forEach((button) => button.classList.add('hidden'))
}

playAgain.addEventListener('click', e => {
    //esconde os resultados e mostra as opções pra jogar novamente
    //[win, lose, draw, playAgain].forEach((item) => item.classList.add('hidden'))
    [result, playAgain].forEach((item) => item.classList.add('hidden'))
    optionButtons.forEach((button) => button.classList.remove('hidden'))
})

function housePlays() {
    //retorna número aleatório de 1 a 3, representando cada opção
    return (Math.floor(Math.random() * 3) + 1)
}

function showResult(text) {
    [result, playAgain].forEach((item) => item.classList.remove('hidden'))
    result.innerText = text
}