let btnIt = document.querySelector(".btn");
let labelIt = document.querySelector(".text");

function myFunction(){


    let color1 = Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByTagName("body")[0].style.backgroundColor = "#"+color1;
    labelIt.innerHTML = color1;
 

    

}

btnIt.addEventListener("click", function(){

    myFunction();

});


 
    
    



