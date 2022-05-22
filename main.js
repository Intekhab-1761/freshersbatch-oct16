var randomNum1=Math.floor(Math.random()*6)+1;
//Mapping random numbers to image folders
var randomImage1="images/Dice"+randomNum1+".png";

var image1=document.querySelectorAll("img")[0];//Player 1 image
image1.setAttribute("src",randomImage1);

//Player 2 setup
var randomNum2=Math.floor(Math.random()*6)+1;
//Mapping random numbers to image folders
var randomImage2="images/Dice"+randomNum2+".png";

var image2=document.querySelectorAll("img")[0];//Player 2 image
image2.setAttribute("src",randomImage2);

//Main logic to decide the winner
document.querySelector("h1").innerHTML="Refresh to Play"

if (randomNum1 > randomNum2) {
	document.querySelector("h1").innerHTML ="Player 1 wins";

}else if(randomNum2 > randomNum1){
document.querySelector("h1").innerHTML="Player 2 wins";
}else
{
	document.querySelector("h1").innerHTML = "Draw";
}