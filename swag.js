let compChoice;
let userChoice;
let choices = ["Rock","Paper","Scissors"];

let roundWinner; 
let userScore = 0;
let compScore = 0;
let us = document.querySelector('#us');
let cm = document.querySelector('#cm');

let rockImg = "images/rock.png";
let paperImg = "images/paper.png";
let scissorsImg = "images/scissors.png";


const userImg = document.querySelector('#userChoicePic');
const computerImg = document.querySelector('#compChoicePic');



//assigns onclicks to all buttons 
const btns = document.querySelectorAll('.searchButtons');
for (const btn of btns) {
    btn.addEventListener('click', play); 
    console.log(btn); 
    }


//assigns transition events to the pics 
const imgs = document.querySelectorAll('.showChoice');
for (const img of imgs){

    img.addEventListener('transitionend', removeTrans);
    console.log(img);

}



function play(){

    choice(this);
    getcomputerSel();

    calcWinner();

    changePic();
    resultTrans();
    


}



function resultTrans(){

    switch(roundWinner){

        case "tie":
            userImg.classList.add('tie');
            computerImg.classList.add('tie');
            break;
        case "user":
            userImg.classList.add('win');
            break;
        case "comp":
            computerImg.classList.add('win');
            break;
        default: break;

    }

}


function removeTrans(e){
   
    
    if (e.propertyName == "border-top-color"){
        console.log(e.propertyName);
        this.classList.remove('win');
        this.classList.remove('tie');

      }
      else return;
    console.log(e.propertyName);

}





function changePic(){

    switch(userChoice){

        case "Rock":
        userImg.src = rockImg;
        console.log(userImg);
        break;

        case "Paper":
        userImg.src = paperImg;
        console.log(userImg);  
        break;  
    
        case "Scissors":
        userImg.src = scissorsImg;
        console.log(userImg);  
        break; 
        default: break;

    }

    switch(compChoice){

        case "Rock":
        computerImg.src = rockImg;
        console.log(computerImg);
        break;

        case "Paper":
        computerImg.src = paperImg;
        console.log(computerImg);  
        break;  
    
        case "Scissors":
        computerImg.src = scissorsImg;
        console.log(computerImg);  
        break; 

        default: break;

    }

   
}


//uses the text of the html element to extract the user choice 
function choice(ob){
    userChoice = ob.textContent.toString();
    console.log(ob.textContent.toString()); 

}


function getcomputerSel(){
    compChoice = choices[genRandomNum()];
    console.log(compChoice);
}

/*Logic to find winner*/
function calcWinner(){

    /*TIE CASES*/
    if (userChoice.toUpperCase() === compChoice.toUpperCase()){
        console.log("TIE");
        roundWinner = "tie";

    }
    /*TIE CASES*/
    if ((userChoice.toUpperCase() === "ROCK" && compChoice.toUpperCase() === "SCISSORS")||(userChoice.toUpperCase() === "SCISSORS" && compChoice.toUpperCase() === "PAPER") ||(userChoice.toUpperCase() === "PAPER" && compChoice.toUpperCase() === "ROCK") ){
        console.log("WIN!");
        roundWinner = "user";
        userScore++;
        us.textContent = `User: ${userScore}`;
     
    }
    /*Lose CASES*/
    if ((compChoice.toUpperCase() === "ROCK" && userChoice.toUpperCase() === "SCISSORS")||(compChoice.toUpperCase() === "SCISSORS" && userChoice.toUpperCase() === "PAPER") ||(compChoice.toUpperCase() === "PAPER" && userChoice.toUpperCase() === "ROCK") ){
        console.log("LOSS!");
        roundWinner = "comp";
        compScore++;
        cm.textContent = `Computer: ${compScore}`;
    }


}

/*Displays Results*/
function showResult(r){
    switch(r){
        case 0:
        console.log("TIE! you both chose " +userChoice);
        break;
        case 1: 
        console.log("WIN!  " + userChoice + " beats " + compChoice);
        break;
        case 2:
        console.log("LOSS!  " + compChoice + " beats " + userChoice);
        break;
        default:
    }
}
/*Random Num from 0-2*/
function genRandomNum(){

    let n = Math.floor(Math.random()*3);
    return n;

}

