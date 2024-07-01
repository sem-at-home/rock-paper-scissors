const humanScore = 0
const computerScore = 0

console.log(getComputerChoice())

getHumanChoice()

function getComputerChoice() {
    const possibleChoices = ['rock', 'paper', 'scissors']
    const randomChoice = Math.floor(Math.random() * possibleChoices.length)
    return possibleChoices[randomChoice]
}

function getHumanChoice() {
    console.log(prompt('Rock, Paper or Scissors?'))
}