const buttons = document.querySelectorAll('.option-btn')
const scoreNumber = document.getElementById('score')
const win = document.getElementById('win')
const lose = document.getElementById('lose')
const draw = document.getElementById('draw')
const playAgain = document.getElementById('play-again')
// opção 1 = pedra, opção 2 = papel, opção 3 = tesoura
let houseChoice
let userChoice
let score = 0

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        houseChoice = housePlays()
        console.log(houseChoice)
        userChoice = parseInt(button.getAttribute('id'))
        if (userChoice === houseChoice) {
            //empate
            console.log('empate')
            draw.classList.remove('hidden')
            playAgain.classList.remove('hidden')
        }
        else if ((userChoice - houseChoice) === 1 || (userChoice - houseChoice) === -2) {
            //usuário ganha
            console.log('você ganhou')
            score++
            scoreNumber.innerText = score
            win.classList.remove('hidden')
            playAgain.classList.remove('hidden')
        }
        else {
            //usuário perde
            console.log('você perdeu')
            score--
            scoreNumber.innerText = score
            lose.classList.remove('hidden')
            playAgain.classList.remove('hidden')
        }
        buttons.forEach((button) => {
            button.classList.add('hidden')
        })
    })
})

//botão de jogar novamente
playAgain.addEventListener('click', e => {
    win.classList.add('hidden')
    lose.classList.add('hidden')
    draw.classList.add('hidden')
    playAgain.classList.add('hidden')
    buttons.forEach((button) => {
        button.classList.remove('hidden')
    })
})

function housePlays() {
    //retorna número aleatório de 1 a 3
    return (Math.floor(Math.random() * 3) + 1)
}