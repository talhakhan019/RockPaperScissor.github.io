//human choice
//bot choice
//decide winner
//decide message
//connect with frontend
function rpsgame(yourchoice)
{
    let humanChoice = yourchoice.id;
    let botChoice = randomPicture(randomNumber());
    let result = decideWinner(humanChoice,botChoice); //list
    let message = resultMessage(result); //dictionary
    rpsFrontend(humanChoice,botChoice,message);
}
function randomNumber()
{
    return Math.floor(Math.random()*3);
}
function randomPicture(num)
{
    return ['rock','paper','scissor'][num];
}
function decideWinner(humanChoice,botChoice)
{
    let rpsDatabase={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0},
    }
    let yourScore=rpsDatabase[humanChoice][botChoice];
    let botScore=rpsDatabase[botChoice][humanChoice];
    return [yourScore,botScore];
}
function resultMessage([yourScore,botScore])
{
    if(yourScore == 0)
    {
        return {'message':'You Lost!','color':'red'}
    }
    else if(yourScore == 0.5)
    {
        return {'message':'You Tied!','color':'aqua'}
    }
    else
    {
        return {'message':'You Win','color':'green'}
    }
}
function rpsFrontend(humanChoice,botChoice,message)
{
    imagesDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    };

    humanDiv = document.createElement('div');
    botDiv = document.createElement('div');
    msgDiv = document.createElement('div');

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    humanDiv.innerHTML = " <img src = '"+imagesDatabase[humanChoice] +"' width=200px style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    msgDiv.innerHTML = "<h1 style='color: "+message['color']+";font-size:60px; padding: 38px;'>"+message['message']+"</h1>";
    botDiv.innerHTML = " <img src = '"+imagesDatabase[botChoice] +"' width=200px style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";

    document.getElementById('gamebox').appendChild(humanDiv);
    document.getElementById('gamebox').appendChild(msgDiv);
    document.getElementById('gamebox').appendChild(botDiv);
}