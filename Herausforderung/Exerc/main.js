
function pairOfShoes(shoes) {
    //replace 0 with -1 so I can reduce them to 0 later if they are a pair
  
  
    for(let [side, size] of shoes){
      let string = {size, side};
      string.filter(function(){
  
  
  
  
  
      });
    }
  
  
  
  
    
  
  }
  
  
  
  
  console.log(pairOfShoes([[0, 21], [1, 23], [1, 21], [0, 23]]));
  console.log(pairOfShoes([[0, 23], [1, 23], [1, 23], [0, 23], [0, 23], [0, 23]]));
  console.log(pairOfShoes([[0, 21], [1, 23], [1, 21], [1, 23]]));
  
  


return b.reduce(function(a,d){
    return (a[d][1]!==null?a[d][1]:0)+d[0];
  },{});
  

let arr = [];

for(let [index, item] of b){

  arr.push(item, index);


  
}
console.log(arr);



if(item === shoes[0][1] && item[index] === shoes[index+1][0] ){
    return item;
  }
 
 //reduce the array to object with shoe size as key
 function objectify(array) {
    return array.reduce(function(p, c) {
        p[c[1]] = (p[c[1]] != undefined ? p[c[1]] : 0) + c[0];
        return p;
    }, {});
}

var p = objectify(shoes);
//check for each shoe size if the value is 0
for (var x in p) {
    if (p[x] != 0) {
        return false;
    }
}
return true;
} 
 function pairOfShoes(shoes) {
    //coding and coding..
  shoes.forEach(element => {
    JSON.stringify(element);
    let types = Object.values(element);
    let key = Object.keys(element);
  
    const iterator1 = types.entries();
    console.log(iterator1.next().value);
    console.log(iterator1.next().key);
  
   
    for (const [index, size] of types.entries()) {
     return types[0]===0?"left":"right";
  
    }
  
  
    
    
  
  });
 
 
 
 for (const [i, v] of types.entries()) {
    console.log("Values: " + types.values);
    console.log("Keys: " + types.keys);
  }





function narcissistic(value) {
    return value.toString()
                .split('')
                .map( (x,i,arr) => x ** arr.length)
                .reduce( (a,b)=> +a + +b) 
                 === value
  }


function narcissistic(value) {
    // Code me to return true or false
  
    let output = [];
    let sNumber = value.toString();
    let sum = 0;
    len = sNumber.length;
  
  
    if(value < 10){
      return true;
    }else{
  
        for(let i = 0; i < len; i++) {
            output.push(Number(+sNumber.charAt(i)));
        }
        console.log(output);
        let a = output.length;
        for(let i = 0; i < a;i++){
          
          console.log(a);
          console.log(i);
          let current = Math.pow(output[i], a);
          console.log("Current: " + current);
          sum = current + sum;
        }
    }
    console.log(sum);
    return (sum === value)? true:false;   
  
  
  }
  
  
  
  
  
  
  
  console.log(narcissistic(7));
  console.log(narcissistic(10882406));
  console.log(narcissistic(44818));
  console.log(narcissistic(371));
  console.log(narcissistic(1938));



a.forEach(element => {
    let sum = 0;    
    sum += Math.pow(Number(element),a.length);
    return sum === value? true: false;
  });

function humanReadable (seconds) {


    let minutes = 0;
    let hours = 0;
    
  
  hours=Math.floor(seconds/3600);
  minutes=Math.floor((seconds-hours*3600)/60);
  seconds=seconds-hours*3600-minutes*60;
  
  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds;
  
    }
  
  
  
  
     console.log(humanReadable(0));
     console.log(humanReadable(59));
     console.log(humanReadable(60));
     console.log(humanReadable(90));
     console.log(humanReadable(3599));
     console.log(humanReadable(3600));
     console.log(humanReadable(45296));
     console.log(humanReadable(86399));
     console.log("86400" + humanReadable(86400));
     console.log(humanReadable(359999));



let arr = [...A];
for (let i = 0; i < A.length;i++){
  let count = 0;
  for(let j = 0; j < arr.length;j++){
    if(i===j){
      count+=1;
      if(count%2=1){
      return A[i];
    }
    }
  }


}

function findOdd(A) {
    //happy coding!
  
    const count = {};
  
  
    A.forEach(element => {
      count[element] = (count[element] || 0) + 1;
  
  });
  
  let keys = Object.keys(count);
  console.log("Keys" + keys);
  let values = Object.values(count);
  console.log("Values" + values);
  for (let value of values){
    if(Math.abs(value%2)!==0){
      return Object.keys(count).find(key => count[key]===value);
    }
  }
  
  
  }
  
  
  
  
  
  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
  console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
  console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));
  console.log(findOdd([10]));
  console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
  console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));



  function findOdd(A) {
    for(var i = 0; i < A.length; i++){  
      //Query the number of times that this 'i' element appears
      //then verify if that number of times is odd. If it is true, then return
      //that 'i' element
      if((A.filter(function(item){
        console.log(item);
        return item == A[i]; 
      })).length % 2 != 0){
        return A[i];
      }
    }
    return 0;
  }






console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));
console.log(findOdd([10]));
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));


let date = new Date(0);
date.setSeconds(seconds)
let today = date.toISOString().slice(11, 19);

/*function findMultiples(integer, limit) {
    //your code here
    
    let arr = [];
  for (let i = integer; i<=limit;i++){
    if(i%integer===0){
      arr.push(i);
      
    }
    
    
  }

  return arr;
    
  }


  console.log(findMultiples(5, 25));*/




  function spinWords(string) {
    let theArray = new Array;
    theArray = string.split(" ");
    for (let i = 0; i < theArray.length;i++){

        for (let index = 0; index < theArray.length; ++index) {
            if(theArray[index].length>=5){
                let element = theArray[index];
                theArray[index] = element.split("").reverse().join("");
            }
        }

        string=theArray.toString().split(/[\s,]+/).join(" ");
        return string;

        }
    }


    

  console.log(spinWords("Welcome"));
  console.log(spinWords("Hey fellow warriors"));
  console.log(spinWords("This is a test"));
  console.log(spinWords("This is another test"));
  console.log(spinWords("You are almost to the last test"));
  console.log(spinWords("Just kidding there is still one more"));
  console.log(spinWords("Seriously this is the last one"));







let input = "turpentine and turtle";
const vowels = ["a","e","i","o","u"];
let resultArray = [];

      for (let i = 0; i < input.length;i++){

      if (input[i] === 'u' || input[i] === 'e' ){
      resultArray.push(input[i]);
      }

      for (let j = 0; j < vowels.length;j++){

        if(input[i] === vowels[j]){
        resultArray.push(input[i]);
      }  
      

      }
      
      
      }


    
        //string=arr.toString().split(/[\s,]+/).join(" ");
        //return string;

    }

    





    /*reverseWordArr = arr.filter((word)=>word.length>=5);

    if(arr.length>1){

        string=arr.toString().split(",").join(" ");
        return string;


    }else{
        string=arr.toString().split(" ").join(" ");
        return string;
    }

        for (let i = 0; i<=arr.length;i++){
            if(i.length>5){
                //let b = [...element].split("").reverse().join("");
                let b = i;
                console.log(b);    
                return b;  
            }
            
            
 
        if(arr[i].length>5){
            let tmp="";
            tmp = arr[i].split("").reverse().join("");
            arr[i]=tmp;
            console.log(arr[i]);
        }

    arr = arr.forEach((word)=>(word.length>=5){

        word = word.toString.split("").reverse().join("");

    });

    console.log(arr);

    console.log(reverseWordArr);
    arr = arr.filter((word)=>word.length<5);
    const newStr = [];
    reverseWordArr.forEach(element => {
        element=element.toString().split("").reverse().join("");
        newStr.push(element);
        return newStr;

    });
    arr=arr.concat(newStr).join(" ");
    return arr;
}




    /*let newStr = "";
    for (let i = reverseWordArr.length-1;i>=0;i--){
        newStr+=reverseWordArr[i];
        return newStr;
    }
    reverseWordArr = reverseWordArr.toString().split("").reverse().join("");
    console.log(reverseWordArr);
    reverseWordArr=reverseWordArr.split(",");
    console.log(reverseWordArr);
    arr=arr.concat(newStr).join(" ");
    return arr;*/


