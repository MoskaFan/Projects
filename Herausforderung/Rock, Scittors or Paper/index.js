
  //Check Whether a Checkbox is Checked

function getUserChoice() {  

    let userChoice = document.querySelector('.radio:checked').value;
    return userChoice;

}



 
  function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*2); 
    if (computerChoice === 0){
      return 'rock';
  } else if (computerChoice === 1){
      return 'paper';
  } else if (computerChoice === 2){
      return 'scissors';    
  }
  };
  
  
  
  function determineWinner(userChoice, computerChoice){

    let winner = "You won";
    let looser = "You have lost";
    let tie = "The game was a tie";
    if (userChoice === computerChoice){
      return tie;

    }else{
        if(userChoice==='rock'){
            if(computerChoice === 'paper'){
            return looser;
            }else{
                return winner;
                }
        }else if (userChoice==='scissors'){
            if(computerChoice === 'rock'){
                return looser;
            }else{
                return winner;
                }
        }else{
            if(computerChoice === 'scissors'){
                return looser;
            }else{
                return winner;
                }
        }
    
    }
  }

    
  function playGame(){
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        let winner = determineWinner(userChoice, computerChoice);
        document.getElementById("userChoice").innerText=userChoice;
        document.getElementById("computerChoice").innerText=computerChoice;
        document.getElementById("determineWinner").innerText=winner;      

}
  


let btnItem = document.querySelector(".game");  
btnItem.addEventListener('click',function () {
    playGame();
});

  