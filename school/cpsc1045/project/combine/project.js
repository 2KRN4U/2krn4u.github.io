"use strict";
let ctx;
let c;
let scoreNumber =0;
let bubbleArray = [];
let animateInterval;
let animateRestInterval;
let Radius = 0; //draw bubble 
let randomSpeed = [];
let x = 585;	let y = 575;
let carPos = [100,510];
let CarAnimateInterval; 
let WoodPos = [100,110];
let WoodPos2 = [300,110];
let WoodPos3 = [500,110];

function setup() {
	c = document.getElementById("canvas")
	ctx = c.getContext("2d");
	addBubble();
	
	startAnimation();
}




function firstPage(){
	
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = "hsl("+ styleColor +",100%,"+(light + 20)+"%)";
	ctx.moveTo(0,0);
	ctx.lineTo(1200,0);
	ctx.lineTo(1200,600);
	ctx.lineTo(0,600);
	ctx.lineTo(0,0);
	ctx.fill();
	
	ctx.font="60px Arial";
	ctx.fillStyle= "rgb(180,100,50)";
	ctx.fillText("Click to start the Game!",280,300);
	
	ctx.restore();
}

function addBubble (){
	for (let i = 0; i < 8; i++){
	bubbleArray[i] = [randomInteger(0,1200),randomInteger(0,200)];
}
	for (let i = 8; i < 16; i++){
	bubbleArray[i] = [randomInteger(0,1200),randomInteger(400,600)];
}
	for (let i = 16; i < 24; i++){
	bubbleArray[i] = [randomInteger(0,200),randomInteger(0,600)];
}
	for (let i = 24; i < 32; i++){
	bubbleArray[i] = [randomInteger(1000,1200),randomInteger(0,600)];
}
}


function findRandom(numOne,numTwo){
	return Math.random()*(numTwo-numOne)+numOne;
}

let styleColor = findRandom(0,360);
let light = findRandom(40,70);




function animate(){
	
	
		if (Radius < 40){
			
			Radius += 2;
	
			firstPage();		
		 for (let i= 0; i < 32; i++){
	
		ctx.beginPath();
		styleColor+= 0.08;
		light += 0.08;
		ctx.fillStyle = "hsla("+styleColor+",100%,"+light+"%,0.5)";
        ctx.arc(bubbleArray[i][0],bubbleArray[i][1],Radius,0,2*Math.PI);
		ctx.fill();
	
		}
	
		}
		if(Radius >= 40){
			
			Radius = 0;
			pauseAnimation();
			styleColor = findRandom(0,360);
			light = findRandom(40,70);

			addBubble ();

			startAnimation();
			
	}
}


function startAnimation() {
	animateInterval = setInterval(animate, 100);
	
}


function pauseAnimation() {
	clearInterval(animateInterval);
}

	




//bubble
function randomInteger(low,high) {
	return Math.floor(Math.random() * (1+high-low)) + low;
}





//press begin
function beginGame(){
	
	pauseAnimation();
	draw();
	
	drawCharacter(x,y);
	startRestAnimation();
	
}




// left = 37 up = 38 right = 39 down = 40	
function move(event) {
	if (event.keyCode == 38){
		
		
			scoreNumber += 1;
			
			draw();
			y -= 50;  
			drawCharacter(x,y);
		}
	
		if (event.keyCode == 40){
		
		
			scoreNumber -= 1;
			
			draw();
			y += 50;  
			drawCharacter(x,y);
		}
	
	
	if (event.keyCode == 37) {
		
		draw();
		if (x > 0) {
			x -= 50;
		}else if (x <= 0){
			x = 1200;
		}
		drawCharacter(x,y);
	}

	if (event.keyCode == 39) {
		
		draw();
		if (x <= 1175) {
			x += 50;
		}else if (x >= 1175){
			x = 0;
		}
		
		drawCharacter(x,y);
	}
	

}


function draw() {
	ctx.clearRect(0,0,1200,600);
	ctx.beginPath();
	ctx.fillStyle = "rgb(100,237,104)";
	ctx.moveTo(0,0);
	ctx.lineTo(1200,0);
	ctx.lineTo(1200,600);
	ctx.lineTo(0,600);
	ctx.lineTo(0,0);
	ctx.fill();	
	
	ctx.font="30px Arial";
	ctx.fillStyle= "rgb(255,0,0)";
	ctx.fillText("Score : " + scoreNumber,10,30);
	Road ();
	River();
}

function drawCharacter (x,y){
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.moveTo(x,y);
	ctx.lineTo(x + 20,y);
	ctx.lineTo(x + 20,y + 20);
	ctx.lineTo(x,y + 20);
	ctx.lineTo(x,y);
	ctx.fill();
}

function Road (){
	
	ctx.beginPath();
	ctx.fillStyle = "gray";
	ctx.moveTo(0,510);
	ctx.lineTo(1200,510);
	ctx.lineTo(1200,550);
	ctx.lineTo(0,550);
	ctx.lineTo(0,510);
	ctx.fill();
	
}

function Cars(){
	ctx.clearRect(0,0,1200,600);
	draw();
	drawCharacter (x,y);
	carPos [0] += 10;
	
	for (let i =0 ; i < 3 ; i ++){
		ctx.beginPath();
		ctx.fillStyle = "white";
		ctx.moveTo(carPos[0],carPos[1]);
		ctx.lineTo(carPos[0] + 50,carPos[1]);
		ctx.lineTo(carPos[0] + 50,carPos[1] + 40);
		ctx.lineTo(carPos[0],carPos[1] + 40);
		ctx.lineTo(carPos[0],carPos[1]);
		ctx.fill();		
		
		carPos[0] += 100;
		
		if (carPos[0] >= 1200){
			carPos[0] = 0;
		}
		
		
	}

	
}





function River (){
	
	ctx.beginPath();
	ctx.fillStyle = "blue";
	ctx.moveTo(0,110);
	ctx.lineTo(1200,110);
	ctx.lineTo(1200,150);
	ctx.lineTo(0,150);
	ctx.lineTo(0,110);
	ctx.fill();
	
}

function Woods(){

	
	WoodPos [0] += 10;
	WoodPos2 [0] += 10;
	WoodPos3 [0] += 10;
	
	River();
	drawCharacter (x,y);
	drawWoods();
	
	if (y < 175 && (x > WoodPos[0]) && x < (WoodPos[0] + 55) && y > 110){
			
		if (x >= 1200){
			x = -40;
			
		}	
			y = 125;
			x += 10;		
			drawWoods();
		}if (y < 175 && (x > WoodPos2[0]) && x < (WoodPos2[0] + 55) && y > 110){
			
		if (x >= 1200){
			x = -40;
			
		}	
			y = 125;
			x += 10;		
			drawWoods();
		}	if (y < 175 && (x > WoodPos3[0]) && x < (WoodPos3[0] + 55) && y > 110){
			
		if (x >= 1200){
			x = -40;
			
		}	
			y = 125;
			x += 10;		
			drawWoods();
		}
}



function drawWoods (){
	
	
	ctx.beginPath();
		ctx.fillStyle = "brown";
		ctx.moveTo(WoodPos[0],WoodPos[1]);
		ctx.lineTo(WoodPos[0] + 80,WoodPos[1]);
		ctx.lineTo(WoodPos[0] + 80,WoodPos[1] + 40);
		ctx.lineTo(WoodPos[0],WoodPos[1] + 40);
		ctx.lineTo(WoodPos[0],WoodPos[1]);
		ctx.fill();		
		
	
		
		ctx.beginPath();
		ctx.fillStyle = "brown";
		ctx.moveTo(WoodPos2[0],WoodPos2[1]);
		ctx.lineTo(WoodPos2[0] + 80,WoodPos2[1]);
		ctx.lineTo(WoodPos2[0]+ 80,WoodPos2[1] + 40);
		ctx.lineTo(WoodPos2[0],WoodPos2[1] + 40);
		ctx.lineTo(WoodPos2[0],WoodPos2[1]);
		ctx.fill();		
		
		
		ctx.beginPath();
		ctx.fillStyle = "brown";
		ctx.moveTo(WoodPos3[0],WoodPos3[1]);
		ctx.lineTo(WoodPos3[0] + 80,WoodPos3[1]);
		ctx.lineTo(WoodPos3[0] + 80,WoodPos3[1] + 40);
		ctx.lineTo(WoodPos3[0],WoodPos3[1] + 40);
		ctx.lineTo(WoodPos3[0],WoodPos3[1]);
		ctx.fill();		
	
			
			drawCharacter(x,y);
			
		if (WoodPos[0] >= 1200){
			WoodPos[0] = -80;
		}if (WoodPos2[0] >= 1200){
			WoodPos2[0] = -80;
		}if (WoodPos3[0] >= 1200){
			WoodPos3[0] = -80;
		}
	
}



function startRestAnimation() {
	if (animateRestInterval == undefined){
	animateRestInterval = setInterval(Woods, 200);
	}
}


