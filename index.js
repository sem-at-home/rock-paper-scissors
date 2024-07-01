console.log('Hello World')

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