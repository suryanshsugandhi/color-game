var numberOfSquares = 6;
var pickedColor;

var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init(){ //runs at the beginning
	//mode buttons
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[1].classList.remove("selected");
			modeButtons[0].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy"? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		});
	}

	//squares
	for(var i = 0; i < squares.length; i++){ 
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor; //grab color of clicked square
			if(clickedColor === pickedColor){ 				//compare color to picked color
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again";
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}

	reset();
}


resetButton.addEventListener("click", function(){
	reset();
})

function reset(){
	//generate new colors
	colors = generateRandomColors(numberOfSquares);
	// pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;

	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//change the colors of the square
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else{
			squares[i].style.display = "none";
		}
	}
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	r = randomNum(255);
	g = randomNum(255);
	b = randomNum(255);
	return("rgb(" + r + ", " + g + ", " + b +")");
}

function randomNum(x){
	return Math.floor(Math.random() * (x+1));
}