var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1Name = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", dice1Name);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2Name = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", dice2Name);

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").textContent = "Player1 Wins!"
}else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").textContent = "Player2 Wins!"
}else {
  document.querySelector("h1").textContent = "Draw!"
}