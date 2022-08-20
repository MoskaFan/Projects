
const getUserChoice = () => {  


    /*if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
  
      return userInput;
     
    } else{
      console.log("Error message");
    }*/

    var userChoice = document.querySelector('.radio:checked').value;
    if('#rock:checked'){
        return userChoice = 'rock';
    }else if('#scittors:checked'){
        return userChoice = 'scittors';
    }else{
        return userChoice = 'paper';
    }
  
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
    }else if (userChoice!=computerChoice){
      if(userChoice==='rock'){
        if(computerChoice === 'paper'){
          console.log("Computer is won");
        }else{
          console.log("User is won");
        }
      }else if (userChoice==='scissors'){
         if(computerChoice === 'rock'){
          console.log("Computer is won");
        }else{
          console.log("User is won");
        }
      }else{
        if(computerChoice === 'scissors'){
          console.log("Computer is won");
        }else{
          console.log("User is won");
        }
      }
    
  }
  }

  
  function playGame(){

        userChoice = getUserChoice();
        computerChoice = getComputerChoice();
        let determineWinner= determineWinner(userChoice, computerChoice)
        document.getElementById("userChoice").innerText=userChoice;
        document.getElementById("computerChoice").innerText=computerChoice;
        document.getElementById("determineWinner").innerText=determineWinner;      
  
  }
  
  playGame();
  