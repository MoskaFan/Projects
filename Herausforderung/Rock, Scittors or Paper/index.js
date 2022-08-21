
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
  } else if (userInput === 2){
      return 'scissors';    
  }
  };
  
  
  
  function determineWinner(userChoice, computerChoice){
    if (userChoice===computerChoice){
      console.log("The game was a tie"); 
    }else{
        if(userChoice==='rock'){
            if(computerChoice === 'paper'){
            console.log("You have lost");
            }else{
            console.log("You won");
                }
        }else if (userChoice==='scissors'){
            if(computerChoice === 'rock'){
            console.log("You have lost");
            }else{
            console.log("You won");
                }
        }else{
            if(computerChoice === 'scissors'){
            console.log("You have lost");
            }else{
                console.log("You won");
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

  