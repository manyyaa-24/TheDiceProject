

// for dice 1
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6+1;
randomNumber1= Math.floor(randomNumber1);
// alert(randomNumber1);

// alert("You are good to go!!");
var randomDiceImage = "dice"+ randomNumber1 + ".png"

var randomImageSource = "images/" + randomDiceImage;


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);


// for dice 2

var randomNumber2 = (Math.floor(Math.random()*6)) +1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2);


// if(randomNumber1 > randomNumber2)
// {
//     Document.querySelector("h1").innerHTML ="🚩 Player 1 Wins";
// }
// else if(randomNumber1 < randomNumber2)
// {
//     Document.querySelector("h1").innerHTML ="Player 2 Wins 🚩";
// }

// else
// {
//     Document.querySelector("h1").innerHTML ="🚩 Match Draws";
// }

// /If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}