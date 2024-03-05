//Define global variables to track playerWins and compWins, and number of rounds in the game
let playerWins = 0;
let compWins = 0;
let rounds = 5;
let rockWin = 'You win! Rock beats scissors';
let paperWin = 'You win! Paper beats rock';
let scissorsWin = 'You win! Scissors beats paper';
let rockLose = 'You lose...paper beats rock...';
let paperLose = 'You lose...scissors beats paper...';
let scissorsLose = 'You lose...rock beats scissors...';
let tie = 'Tie! Go again!';
//Play rock paper scissors
for (let i = 0; i < rounds; i++)
{
    playGame();
    
}
if (playerWins > compWins)
{
    console.log("You won rock, paper, scissors!! :)");
}
else if (compWins > playerWins)
{
    console.log("You lost rock, paper, scissors :(");
}
else
{
    console.log("You tied rock, paper, scissors :|");
}
//Define rock paper scissors function prototype
function playGame()
{
    let playerSelection = prompt("Let's play rock, paper, scissors! Rock, paper, scissors...shoot!:");
    
    let result = playRound(playerSelection, getComputerChoice());

    console.log(result);

    if (result === rockWin || result === paperWin || result === scissorsWin)
    {
        ++playerWins;
    }
    else if (result === rockLose || result === paperLose || result === scissorsLose)
    {
        ++compWins;
    }

    console.log(`You: ${playerWins}\nComputer: ${compWins}`);
};
//Play 1 round of rock paper scissors
function playRound(playerSelection, computerSelection)
{
    let playerSelectionLower = playerSelection.toLowerCase();

    if (playerSelectionLower === 'rock' && computerSelection === 'scissors')
    {
        return rockWin;
    }
    else if (playerSelectionLower === 'scissors' && computerSelection === 'paper')
    {
        return scissorsWin;
    }
    else if (playerSelectionLower === 'paper' && computerSelection === 'rock')
    {
        return paperWin;
    }
    else if (playerSelectionLower === 'scissors' && computerSelection === 'rock')
    {
        return scissorsLose;
    }
    else if (playerSelectionLower === 'paper' && computerSelection === 'scissors')
    {
        return paperLose;
    }
    else if (playerSelectionLower === 'rock' && computerSelection === 'paper')
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
