let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses : 0,
  ties:  0
};

updateScore();

document.querySelector('.js-rock-button')
  .addEventListener("click", ()=> {
    playGame('Rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener("click", ()=> {
    playGame('Paper');
});

document.querySelector('.js-scissor-button')
.addEventListener("click", ()=> {
  playGame('Scissors');
});

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    playGame('Rock');
  } else if(event.key==='p'){
    playGame('Paper');
    } else if(event.key==='s'){
    playGame('Scissors');
    }
});

function playGame(playerMove){
  const computerMove = pickComputerMove();

  let result = '';

  if(playerMove==='Scissors'){
    if(computerMove==='Rock'){
      result = 'You Lose.';
      } else if (computerMove==='Paper'){
      result = 'You Win.';
      } else if (computerMove==='Scissors'){
      result = 'Tie.';
  }

 } else if(playerMove==='Paper'){
      if(computerMove==='Rock'){
        result = 'You Win.';
        } else if (computerMove==='Paper'){
        result = 'Tie.';
        } else if (computerMove==='Scissors'){
        result = 'You Lose.';
        }
        
    } else if(playerMove==='Rock'){
        if(computerMove==='Rock'){
          result = 'Tie.';
          } else if (computerMove==='Paper'){
            result = 'You Lose';
          } else if (computerMove==='Scissors'){
            result = 'You Win';
          }
      }

      if(result==='You Win.'){
        score.wins+=1;
      } else if(result==='You Lose.'){
        score.losses +=1;
      }else {
        score.ties+=1;
      }



      document.getElementById('verdict').innerHTML= (`You <img src="${playerMove}-emoji.png" class="icons"> <img src="${computerMove}-emoji.png" class="icons"> Computer.`);

      document.getElementById('result').innerHTML=` ${result}`;

      updateScore();

      localStorage.setItem('score',JSON.stringify(score));
  }

function updateScore(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

  updateScore();

function pickComputerMove(){

  const randomNumber = Math.random();

  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1/3){
  computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3){
  computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber <= 1){
  computerMove = 'Scissors';
  }

  return computerMove;
}