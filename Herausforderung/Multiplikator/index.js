
const num1 = Math.ceil(Math.random()*10);

const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

questionEl.innerText = "What is "+num1 + " multiply by " + num2 + "?"; 

const correctAns = num1*num2;

const containerEl = document.getElementById("container");

const inputEl = document.getElementById("text");

const scoreEl = document.getElementById("score");

containerEl.addEventListener("submit", ()=>{
    
    const val = +inputEl.value;
    let clicks = JSON.parse(localStorage.getItem("score"));
    if (!clicks){
        scoreEl = 0;
    }

    if (val==correctAns){
        clicks++;
        updateLocalStorage();
    }else{
        clicks--;
        updateLocalStorage();
    }
    scoreEl.innerText = clicks;
    
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(clicks));

}


