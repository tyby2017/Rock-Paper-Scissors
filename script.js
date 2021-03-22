function getComputerAnswer() {
    const arr = ['rock', 'paper', 'scissors'];
    let answer = Math.floor(Math.random()*arr.length);            
    return arr[answer];
}       

let answersToDisplay=[];

const buttons=Array.from(document.querySelectorAll('button'));
let contor = 0;
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if(contor < 5)
        {
            
            let userAnswer = button.innerHTML.toLowerCase();              
            let computerAnswer = getComputerAnswer();
            if(userAnswer==computerAnswer)
            {                    
                answersToDisplay.push('It\'s a tie');
            }
            else
            {
                if(userAnswer =='rock')
                {
                    if(computerAnswer == 'paper')
                    {
                        answersToDisplay.push('You lost! Rock doesn\'t beat paper');
                    }
                    else
                    {
                        answersToDisplay.push('You win! Rock beats scissors');
                    }
                }
                else if(userAnswer == 'paper')
                {
                    if(computerAnswer =='rock')
                    {
                        answersToDisplay.push('You win! Paper beats rock');
                    }
                    else
                    {
                        answersToDisplay.push('You lost! Scissors beats paper');
                    }
                }
                else
                {
                    if(computerAnswer == 'paper')
                    {
                        answersToDisplay.push('You win! Scissors beat paper');
                    }
                    else{
                        answersToDisplay.push('You lost! Scissors doesn\'t beat rock');
                    }
                }
            }
            contor++;
        }
        if(contor == 5) 
        {
            let win=0;
            let lose=0;
            answersToDisplay.forEach(answer => {
                let p = document.createElement('p');
                p.innerHTML = answer;
                document.getElementById('result').appendChild(p);
                contor++;
                if(answer.search('win')>0)
                {
                    win++;
                }
                else if(answer.search('lost')>0)
                {
                    lose++;
                }                    
            });
            let h2 =document.createElement('h2');
            if(win>lose)
            {
                h2.innerHTML = "Congratulations! You won!";
                document.querySelector('#result').appendChild(h2);
            }
            else if(win == lose)
            {
                h2.innerHTML = "Unfortunately, It's a tie!";
                document.querySelector('#result').appendChild(h2);
            }
            else
            {
                h2.innerHTML = "Sorry! You lost!";
                document.querySelector('#result').appendChild(h2);
            }
        }          
    });
});

let restart = document.getElementById('restart');
restart.addEventListener('click', function() {
    location.reload(true);
})