var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImg = "dice" + randomNumber1 +".png";
var imgsourcerandom = "images/" + randomDiceImg;
var image1 =    document.querySelectorAll("img")[0];
image1.setAttribute("src", imgsourcerandom);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImgRandom = "images/dice" + randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", diceImgRandom);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 wins";    
}
else{
    document.querySelector("h1").innerHTML = "draw";
}













// function randomDice1(){
//     var randomNumber1 = Math.floor(Math.random()*6)+1;

//     if(randomNumber1 === 1){
//         document.querySelector(".img1").src = "./images/dice1.png";
//     }
//     if(randomNumber1 === 2){
//         document.querySelector(".img1").src = "./images/dice2.png";
//     }
//     if(randomNumber1 === 3){
//         document.querySelector(".img1").src = "./images/dice3.png";
//     }
//     if(randomNumber1 === 4){
//         document.querySelector(".img1").src = "./images/dice4.png";
//     }
//     if(randomNumber1 === 5){
//         document.querySelector(".img1").src = "./images/dice5.png";
//     }
//     else{
//         document.querySelector(".img1").src = "./images/dice6.png";
//     }
// }

// function randomDice2(){
//     var randomNumber2 = Math.floor(Math.random()*6)+1;

//     if(randomNumber1 === 1){
//         document.querySelector(".img2").src = "./images/dice1.png";
//     }
//     if(randomNumber1 === 2){
//         document.querySelector(".img2").src = "./images/dice2.png";
//     }
//     if(randomNumber1 === 3){
//         document.querySelector(".img2").src = "./images/dice3.png";
//     }
//     if(randomNumber1 === 4){
//         document.querySelector(".img2").src = "./images/dice4.png";
//     }
//     if(randomNumber1 === 5){
//         document.querySelector(".img2").src = "./images/dice5.png";
//     }
//     else{
//         document.querySelector(".img2").src = "./images/dice6.png";
//     }
// }
// function winner(){
//     if(randomDice1 > randomDice2){
//         document.querySelector("h1").innerHTML="Player1 wins";
//     }
//     if(randomDice2 > randomDice1){
//         document.querySelector("h1").innerHTML="Player2 wins";
//     }
//     else{
//         document.querySelector("h1").innerHTML="Draw";
//     }
        
        
// }
