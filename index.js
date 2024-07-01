console.log('Hello World')

console.log(getComputerChoice())

function getComputerChoice() {
    const possibleChoices = ['rock', 'paper', 'scissors']
    const randomChoice = Math.floor(Math.random() * possibleChoices.length)
    return possibleChoices[randomChoice]
}