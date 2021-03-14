function computerAnswer() {
    const items = ["rock", "paper", "scissors"];
    let item = items[Math.floor(Math.random()*items.length)];
    return item;
}

function promptForAnswer() {
    let answer = prompt("Rock, paper or scissors?");
    return answer.toLowerCase();
}

let answers = [];

function game() {    
    for(let i=0; i<5; i++){
        let playSelection = promptForAnswer();
        let computerPlay = computerAnswer();
        let str = playRound(playSelection,computerPlay);
        answers[i] = str;       
    }    
}

function playRound(playSelection, computerPlay){
    if(!(playSelection===computerPlay))
    {
        if(playSelection == "rock" && computerPlay == "scissors")
        {
            return("You win! Rock beats Scissors");
        }
        else if(playSelection == "rock" && computerPlay == "paper")
        {
            return("You lose! Rock doesn't beat Paper");
        }
        else if (playSelection=="paper" && computerPlay=="rock")
        {
            return("You win! Paper beats Rock");
        }
        else if(playSelection=="paper" && computerPlay=="scissors")
        {
            return("You lose! Paper doesn't beat Scissors");
        }
        else if(playSelection=="scissors" && computerPlay == "rock")
        {
            return("You lose! Scissors doesn't beat Rock");
        }
        else if(playSelection=="scissors" && computerPlay == "paper")
        {
            return("You win! Scissors beats Paper");
        }       
    }
    else
    {
        return("It's a tie!");
    }       
}
game();

for(let i=0; i< answers.length; i++){
    console.log(answers[i]);
}
let win=0;
let lose=0
for(let i=0;i<answers.length;i++)
{
    str =answers[i].search("win");
    if(str >= 0)
    {
        win++;
    }
    else
    {
        lose++;
    }
}

if(win===lose)
{
    console.log("It's a tie!");
}
else if( win>lose) {
    console.log("You won!");
}
else {
    console.log("You lost!");
}