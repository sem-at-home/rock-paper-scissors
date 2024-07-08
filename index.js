let humanScore = 0
let computerScore = 0

const mainDiv = document.querySelector('#choices')

mainDiv.addEventListener('click', function(event) { 
    const humanChoice = event.target.id
    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    if (humanScore === 5 || computerScore === 5) showFinalResult()
})

function getComputerChoice() {
    const possibleChoices = ['rock', 'paper', 'scissors']
    const randomChoice = Math.floor(Math.random() * possibleChoices.length)
    return possibleChoices[randomChoice]
}

function getHumanChoice() {
    return prompt('Type your choice: Rock, Paper, or Scissors')
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        setResultDivText(`It is a tie: ${humanChoice} equals ${computerChoice}`)
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        setResultDivText(`You win! ${humanChoice} beats ${computerChoice}`)
        handleHumanWin()
    } else {
        setResultDivText(`You lose! ${computerChoice} beats ${humanChoice}`)
        handleComputerWin()
    }
}

function showFinalResult() {
    // mainDiv
    if (humanScore > computerScore) {
        handleFinalResult(`You win with the final result: ${humanScore}-${computerScore}`)
    } else {
        handleFinalResult(`You lose with the final result: ${humanScore}-${computerScore}`)
    }
}

function handleFinalResult(text) {
    const finalResultDiv = document.querySelector('#final-result')
    finalResultDiv.textContent = text
}

function handleComputerWin() {
    computerScore += 1
    document.querySelector('#computer-score').textContent = computerScore
}

function handleHumanWin() {
    humanScore += 1
    document.querySelector('#human-score').textContent = humanScore
}

function setResultDivText(text) {
    const resultDiv = document.querySelector('#result')
    resultDiv.textContent = text
}
