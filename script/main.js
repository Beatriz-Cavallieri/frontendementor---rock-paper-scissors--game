const buttons = document.querySelectorAll('.option-btn')
// opção 1 = pedra, opção 2 = papel, opção 3 = tesoura
let houseChoice
let userChoice

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        houseChoice = housePlays()
        console.log(houseChoice)
        userChoice = parseInt(button.getAttribute('id'))
        if (userChoice === houseChoice) {
            //empate
            console.log('empate')
        }
        else if ((userChoice - houseChoice) === 1 || (userChoice - houseChoice) === -2) {
            //usuário ganha
            console.log('você ganhou')
        }
        else {
            //usuário perde
            console.log('você perdeu')
        }
        
    })
})

function housePlays() {
    //retorna número aleatório de 1 a 3
    return (Math.floor(Math.random() * 3) + 1)
}