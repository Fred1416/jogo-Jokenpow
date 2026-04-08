

const result = document.querySelector('.result')
const yourScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    PEDRA: 'pedra',
    PAPEL: 'papel',
    TESOURA: 'tesoura'
}


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Máquina: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Empate'
    } else if (
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'papel' && machine === 'pedra') ||
        (human === 'tesoura' && machine === 'papel')
    ) {
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você Ganhou!'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você Perdeu para a Alexa'
    }
}
