var colors = generaterandomcolor(6);
var n = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickcolor()];
var colorDisplay = document.querySelector(".choosecolor");
var h1 = document.querySelector("h1");
var newChoice = document.querySelector("button");
var easy = document.querySelectorAll("button")[1];
var hard = document.querySelectorAll("button")[2]
colorDisplay.textContent = pickedColor;

easy.addEventListener("click",function()
{
    n=3;
    document.querySelector(".message").textContent = "";
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = generaterandomcolor(3);
    pickedColor = colors[pickcolor()];
    colorDisplay.textContent = pickedColor;
    var i=0;
    for(;i<squares.length-3;i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    for(;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = "#232323";
    }
    
    h1.style.backgroundColor = "steelblue";
    newChoice.textContent = "NEW COLORS"
});
hard.addEventListener("click",function()
{
    document.querySelector(".message").textContent = "";
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = generaterandomcolor(6);
    pickedColor = colors[pickcolor()];
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    n=6;
    h1.style.backgroundColor = "steelblue";
    newChoice.textContent = "NEW COLORS"
})
for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor==pickedColor)
        {
            document.querySelector(".message").textContent = "Correct!";
            console.log(squares);
            for(var j=0;j<n;j++)
            {
                squares[j].style.backgroundColor = clickedColor;
            }
            h1.style.backgroundColor = clickedColor;
            newChoice.textContent = "PLAY AGAIN?";
        }
        else
        {
            this.style.backgroundColor = "#232323";
            document.querySelector(".message").textContent = "Try Again";
        }
    });

}

newChoice.addEventListener("click",function()
{
    n=6;
    document.querySelector(".message").textContent = "";
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = generaterandomcolor(6);
    pickedColor = colors[pickcolor()];
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    newChoice.textContent = "NEW COLORS";
});

function pickcolor()
{
    var random = Math.floor(Math.random()*colors.length);
    return random;
}

function generaterandomcolor(num)
{
    var arr = [];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}