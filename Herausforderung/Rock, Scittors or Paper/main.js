getSleepHours = (day) =>{
    switch (day){
      case "monday": return 5;
      break;
      case "tuesday": return 6;
      break;
      case "wednesday": return 8;
      break;
      case "thursday": return 7;
      break;
      case "friday": return 5;
      break;
      case "saturday": return 8;
      break;
      case "sunday": return 6;
      break;
    }
  }
  
  getActualSleepHours = () =>{
    let sum =  5 + 6 + 8 + 7 + 5 + 8 + 6;
    return sum;
  }
  getIdealSleepHours = (idealHours) =>{
    return idealHours*7;
  }
  
  calculateSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    let sleepDebt = idealSleepHours - actualSleepHours;
    if (actualSleepHours === idealSleepHours){
      console.log("Your get the perfect amount of sleep");
    }else if (actualSleepHours > idealSleepHours){
      let tooManySleep= actualSleepHours - idealSleepHours;
      console.log(`Your get more sleep than needed. You sleep ${tooManySleep} hours over your ideal sleep.`);
    }else if (actualSleepHours < idealSleepHours){
      let sleepDebt = idealSleepHours - actualSleepHours;
      console.log(`Your should get some rest. You sleep ${sleepDebt} hours under your ideal sleep.`);
    }
  
  }
  
  calculateSleepDebt();