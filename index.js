let humanScore = 0
let computerScore = 0
const possibleChoices = ['rock', 'paper', 'scissors']

const computerChoice = getComputerChoice()

const humanChoice = getHumanChoice()

playRound(humanChoice, computerChoice)

function playRound(humanChoice, computerChoice) {
    const safeHumanChoice = humanChoice.toLowerCase()
    if (!possibleChoices.includes(safeHumanChoice)) {
        throw Error(`That is not a valid choice!`)
    }
    if (safeHumanChoice === computerChoice) {
        console.log(`It is a tie: ${humanChoice} equals ${computerChoice}`)
    } else if (
        (safeHumanChoice === 'rock' && computerChoice === 'scissors') ||
        (safeHumanChoice === 'scissors' && computerChoice === 'paper') ||
        (safeHumanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1
    }
}

function getComputerChoice() {

    const randomChoice = Math.floor(Math.random() * possibleChoices.length)
    return possibleChoices[randomChoice]
}

function getHumanChoice() {
    return prompt('Type your choice: Rock, Paper, or Scissors')
}