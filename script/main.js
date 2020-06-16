const optionButtons = document.querySelectorAll('.option-btn')
const scoreNumber = document.getElementById('score')
//mensagens de resultado
const win = document.getElementById('win')
const lose = document.getElementById('lose')
const draw = document.getElementById('draw')
//
const playAgain = document.getElementById('play-again')
const winLoseDraw = [win, lose, draw]
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
        showResult(draw)
    }
    else if ((userChoice - houseChoice) === 1 || (userChoice - houseChoice) === -2) {
        //usuário ganha
        score++
        showResult(win)
    }
    else {
        //usuário perde
        console.log('você perdeu')
        score--
        showResult(lose)
    }
    scoreNumber.innerText = score
    //esconde as opções
    optionButtons.forEach((button) => button.classList.add('hidden'))
}

playAgain.addEventListener('click', e => {
    //esconde os resultados e mostra as opções pra jogar novamente
    [win, lose, draw, playAgain].forEach((item) => item.classList.add('hidden'))
    optionButtons.forEach((button) => button.classList.remove('hidden'))
})

function housePlays() {
    //retorna número aleatório de 1 a 3, representando cada opção
    return (Math.floor(Math.random() * 3) + 1)
}

function showResult(result) {
    [result, playAgain].forEach((item) => item.classList.remove('hidden'))
}