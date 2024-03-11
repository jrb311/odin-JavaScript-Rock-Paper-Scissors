//Define global variables to track playerWins and compWins, and number of rounds in the game
let playerWins = 0;
let compWins = 0;
let rockWin = 'You win! Rock beats scissors';
let paperWin = 'You win! Paper beats rock';
let scissorsWin = 'You win! Scissors beats paper';
let rockLose = 'You lose...paper beats rock...';
let paperLose = 'You lose...scissors beats paper...';
let scissorsLose = 'You lose...rock beats scissors...';
let tie = 'Tie! Go again!';
let playerSelection;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const gameOver = document.querySelector('.gameOver');

const score = document.querySelector('.score');
score.textContent = `You: ${playerWins} Computer: ${compWins}`;
//Play rock paper scissors
rock.addEventListener('click', () => {
    if (playerWins == 5 || compWins == 5)
    {
        gameOver.textContent = '';
        playerWins = 0;
        compWins = 0;
        score.textContent = `You: ${playerWins} Computer: ${compWins}`;
    }
    playerSelection = 'rock';
    playGame();
});
paper.addEventListener('click', () => {
    if (playerWins == 5 || compWins == 5)
    {
        gameOver.textContent = '';
        playerWins = 0;
        compWins = 0;
        score.textContent = `You: ${playerWins} Computer: ${compWins}`;
    }
    playerSelection = 'paper';
    playGame();
});
scissors.addEventListener('click', () => {
    if (playerWins == 5 || compWins == 5)
    {
        gameOver.textContent = '';
        playerWins = 0;
        compWins = 0;
        score.textContent = `You: ${playerWins} Computer: ${compWins}`;
    }
    playerSelection = 'scissors';
    playGame();
});

//Define rock paper scissors function prototype
function playGame()
{
    let result = playRound(playerSelection, getComputerChoice());

    const divResultMsg = document.querySelector('.resultMsg');
    divResultMsg.textContent = result;

    if (result === rockWin || result === paperWin || result === scissorsWin)
    {
        ++playerWins;
    }
    else if (result === rockLose || result === paperLose || result === scissorsLose)
    {
        ++compWins;
    }

    score.textContent = `You: ${playerWins} Computer: ${compWins}`;

    if(compWins === 5 || playerWins === 5)  
    {
        if (playerWins > compWins)
        {
            gameOver.textContent = `You won rock, paper, scissors!! :)`;
        }
        else if (compWins > playerWins)
        {
            gameOver.textContent = `You lost rock, paper, scissors :(`;
        }
        else
        {
            gameOver.textContent = `You tied rock, paper, scissors :|`;
        }
        divResultMsg.textContent = '';
    }
};
//Play 1 round of rock paper scissors
function playRound(playerSelection, computerSelection)
{

    if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
        return rockWin;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {
        return scissorsWin;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock')
    {
        return paperWin;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock')
    {
        return scissorsLose;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    {
        return paperLose;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    {
        return rockLose;
    }
    else
    {
        return tie;
    }
};
//Get computer rock paper or scissors
function getComputerChoice()
{
    let min = 1;
    let max = 3;

    if (getRandomIntInclusive(min, max) === 1)
    {
        return 'rock';
    }
    if (getRandomIntInclusive(min, max) === 2)
    {
        return 'paper';
    }
    if (getRandomIntInclusive(min, max) === 3)
    {
        return 'scissors';
    }
};
//Get random int between 1 and 3
function getRandomIntInclusive(min, max)
{
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};
