var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomimage = "dice"+randomNumber1+".png";
var randomsource = "images/" + "dice"+ randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsource);
var randomNumber2 = Math.floor(Math.random()*6)+1;


var randomimage = "dice"+randomNumber2+".png";
var randomsource = "images/" + "dice"+ randomNumber2+".png";
var image2 =  document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsource);


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins";
}