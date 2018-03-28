"use strict";
let ctx;
let c;
let scoreNumber = 0;
let highScore = 0;
let bubbleArray = [];
let animateInterval;
let Radius = 0; //draw bubble 
let randomSpeed = [];
let x = 585;
let y = 575; //575 = 0, 525 = 1, 475 = 2, 425 = 3, 375 = 4, 325 = 5, 275 = 6, 225 = 7, 175 = 8, 125 = 9, 75 = 10, 25 = 11
let carPos = [100, 510];
let carPos2 = [300, 510];
let carPos3 = [500, 510];
let WoodPos = [100, 110];
let WoodPos2 = [300, 110];
let WoodPos3 = [500, 110];
let carAnimateInterval;
let logAnimateInterval;
let gameStart = false;
let totalCar = 0
let gameFinish = false;
let easyMode = false;
let normalMode = true;
let hardMode = false;
let onLog = false;

function easy() {
    easyMode = true;
    hardMode = false;
    normalMode = false;
}

function normal() {
    normalMode = true;
    easyMode = false;
    hardMode = false;
}

function hard() {
    hardMode = true;
    easyMode = false;
    normalMode = false;
}


function setup() {
    c = document.getElementById("canvas")
    ctx = c.getContext("2d");
    addBubble();

    startAnimation();
}




function firstPage() {

    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "hsl(" + styleColor + ",100%," + (light + 20) + "%)";
    ctx.moveTo(0, 0);
    ctx.lineTo(1200, 0);
    ctx.lineTo(1200, 600);
    ctx.lineTo(0, 600);
    ctx.lineTo(0, 0);
    ctx.fill();

    ctx.font = "55px Rosario";
	ctx.strokeStyle = "#003151";
	ctx.lineWidth = 5;
	ctx.strokeText("Click to start the Game!".split("").join(String.fromCharCode(8202)), 280, 320);
    ctx.fillStyle = "#F6F3E5";
    ctx.fillText("Click to start the Game!".split("").join(String.fromCharCode(8202)), 280, 320);

    ctx.restore();
}

function addBubble() {
    for (let i = 0; i < 8; i++) {
        bubbleArray[i] = [randomInteger(0, 1200), randomInteger(0, 200)];
    }
    for (let i = 8; i < 16; i++) {
        bubbleArray[i] = [randomInteger(0, 1200), randomInteger(400, 600)];
    }
    for (let i = 16; i < 24; i++) {
        bubbleArray[i] = [randomInteger(0, 200), randomInteger(0, 600)];
    }
    for (let i = 24; i < 32; i++) {
        bubbleArray[i] = [randomInteger(1000, 1200), randomInteger(0, 600)];
    }
}


function findRandom(numOne, numTwo) {
    return Math.random() * (numTwo - numOne) + numOne;
}

let styleColor = findRandom(0, 360);
let light = findRandom(40, 70);




function animate() {


    if (Radius < 40) {

        Radius += 2;

        firstPage();
        for (let i = 0; i < 32; i++) {

            ctx.beginPath();
            styleColor += 0.08;
            light += 0.08;
            ctx.fillStyle = "hsla(" + styleColor + ",100%," + light + "%,0.5)";
            ctx.arc(bubbleArray[i][0], bubbleArray[i][1], Radius, 0, 2 * Math.PI);
            ctx.fill();

        }

    }
    if (Radius >= 40) {

        Radius = 0;
        pauseAnimation();
        styleColor = findRandom(0, 360);
        light = findRandom(40, 70);

        addBubble();

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
function randomInteger(low, high) {
    return Math.floor(Math.random() * (1 + high - low)) + low;
}




//press begin
function beginGame() {
    if (gameFinish) {
        gameStart = true;
        gameFinish = false;
        scoreNumber = 0;
        x = 585;
        y = 575;
        carAnimation();
        draw();
        logAnimate();
        drawCharacter(x, y);
    } else {
        pauseAnimation();
        gameStart = true;
        draw();
        logAnimate();
        drawCharacter(x, y);
		checkComplete()
    }
}




// left = 37 up = 38 right = 39 down = 40	
function move(event) {
    if (gameStart) {
        if (event.keyCode == 38) {
            scoreNumber += 1;
            ctx.clearRect(0, 0, 1200, 600);
            draw();
            y -= 50;
            drawCharacter(x, y)

        }

        if (event.keyCode == 37) {
            ctx.clearRect(0, 0, 1200, 600);
            draw();
            if (x > 0) {
                x -= 50;
            } else if (x <= 0) {
                x = 1200;
            }
            drawCharacter(x, y);
        }

        if (event.keyCode == 39) {
            ctx.clearRect(0, 0, 1200, 600);
            draw();
            if (x <= 1175) {
                x += 50;
            } else if (x >= 1175) {
                x = 0;
            }

            drawCharacter(x, y);
        }
        if (event.keyCode == 40) {
            scoreNumber -= 1;
            ctx.clearRect(0, 0, 1200, 600);
            draw();
            y += 50;
            drawCharacter(x, y)

        }
    }

}

function draw() {
    ctx.clearRect(0, 0, 1200, 600);
    ctx.beginPath();
    ctx.fillStyle = "rgb(100,237,104)";
    ctx.moveTo(0, 0);
    ctx.lineTo(1200, 0);
    ctx.lineTo(1200, 600);
    ctx.lineTo(0, 600);
    ctx.lineTo(0, 0);
    ctx.fill();

    ctx.font = "30px Arial";
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fillText("Score : " + scoreNumber, 10, 30);
    Road();
    carAnimation();
    River();


}

function drawCharacter(x, y) {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(x, y);
    ctx.lineTo(x + 20, y);
    ctx.lineTo(x + 20, y + 20);
    ctx.lineTo(x, y + 20);
    ctx.lineTo(x, y);
    ctx.fill();
}

function Road() {

    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.moveTo(0, 510);
    ctx.lineTo(1200, 510);
    ctx.lineTo(1200, 550);
    ctx.lineTo(0, 550);
    ctx.lineTo(0, 510);
    ctx.fill();

}

function Cars() {
    ctx.clearRect(0, 510, 1200, 40);
    Road();
    drawCharacter(x, y);
    carPos[0] += 4;
    carPos2[0] += 4;
    carPos3[0] += 4;

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.moveTo(carPos[0], carPos[1]);
    ctx.lineTo(carPos[0] + 50, carPos[1]);
    ctx.lineTo(carPos[0] + 50, carPos[1] + 40);
    ctx.lineTo(carPos[0], carPos[1] + 40);
    ctx.lineTo(carPos[0], carPos[1]);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.moveTo(carPos2[0], carPos[1]);
    ctx.lineTo(carPos2[0] + 50, carPos[1]);
    ctx.lineTo(carPos2[0] + 50, carPos[1] + 40);
    ctx.lineTo(carPos2[0], carPos[1] + 40);
    ctx.lineTo(carPos2[0], carPos[1]);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.moveTo(carPos3[0], carPos[1]);
    ctx.lineTo(carPos3[0] + 50, carPos[1]);
    ctx.lineTo(carPos3[0] + 50, carPos[1] + 40);
    ctx.lineTo(carPos3[0], carPos[1] + 40);
    ctx.lineTo(carPos3[0], carPos[1]);
    ctx.fill();


    if (carPos[0] >= 1200) {
        carPos[0] = -50;
    }
    if (carPos2[0] >= 1200) {
        carPos2[0] = -50;
    }
    if (carPos3[0] >= 1200) {
        carPos3[0] = -50;
    }

    if (carPos[1] + 15 == y) {
        if (distance(x, carPos[0], y, carPos[1]) <= 30) {
            gameOver();
        }
        if (distance(x, carPos2[0], y, carPos[1]) <= 30) {
            gameOver();
        }
        if (distance(x, carPos3[0], y, carPos[1]) <= 30) {
            gameOver();
        }
    }
}

function distance(x1, x2, y1, y2) {
    return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
}

function carAnimation() {
    if (carAnimateInterval == undefined && easyMode == true) {
        carAnimateInterval = setInterval(Cars, 16.66);
    } else if (carAnimateInterval == undefined && normalMode == true) {
        carAnimateInterval = setInterval(Cars, 8);
    } else if (carAnimateInterval == undefined && hardMode == true) {
        carAnimateInterval = setInterval(Cars, 1);
    }
}

function River() {

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.moveTo(0, 110);
    ctx.lineTo(1200, 110);
    ctx.lineTo(1200, 150);
    ctx.lineTo(0, 150);
    ctx.lineTo(0, 110);
    ctx.fill();

}

function Woods() {


    WoodPos[0] += 10;
    WoodPos2[0] += 10;
    WoodPos3[0] += 10;

    River();
    drawCharacter(x, y);
    drawWoods();

    if (y < 175 && (x > WoodPos[0]) && x < (WoodPos[0] + 55) && y > 110) {
        onLog = true;
        if (x >= 1200) {
            x = -40;
        }
        y = 125;
        x += 10;
        drawWoods();
    } else if (y < 175 && (x > WoodPos2[0]) && x < (WoodPos2[0] + 55) && y > 110) {
        onLog = true;
        if (x >= 1200) {
            x = -40;
        }
        y = 125;
        x += 10;
        drawWoods();
    } else if (y < 175 && (x > WoodPos3[0]) && x < (WoodPos3[0] + 55) && y > 110) {
        onLog = true;
        if (x >= 1200) {
            x = -40;
        }
        y = 125;
        x += 10;
        drawWoods();
    } else if (x <= 1200 && x >= 0){
        onLog = false;
    }

    if (y == 125 && onLog == false) {
        gameOver();
    }

}



function drawWoods() {


    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.moveTo(WoodPos[0], WoodPos[1]);
    ctx.lineTo(WoodPos[0] + 80, WoodPos[1]);
    ctx.lineTo(WoodPos[0] + 80, WoodPos[1] + 40);
    ctx.lineTo(WoodPos[0], WoodPos[1] + 40);
    ctx.lineTo(WoodPos[0], WoodPos[1]);
    ctx.fill();



    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.moveTo(WoodPos2[0], WoodPos2[1]);
    ctx.lineTo(WoodPos2[0] + 80, WoodPos2[1]);
    ctx.lineTo(WoodPos2[0] + 80, WoodPos2[1] + 40);
    ctx.lineTo(WoodPos2[0], WoodPos2[1] + 40);
    ctx.lineTo(WoodPos2[0], WoodPos2[1]);
    ctx.fill();


    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.moveTo(WoodPos3[0], WoodPos3[1]);
    ctx.lineTo(WoodPos3[0] + 80, WoodPos3[1]);
    ctx.lineTo(WoodPos3[0] + 80, WoodPos3[1] + 40);
    ctx.lineTo(WoodPos3[0], WoodPos3[1] + 40);
    ctx.lineTo(WoodPos3[0], WoodPos3[1]);
    ctx.fill();


    drawCharacter(x, y);

    if (WoodPos[0] >= 1200) {
        WoodPos[0] = -80;
    }
    if (WoodPos2[0] >= 1200) {
        WoodPos2[0] = -80;
    }
    if (WoodPos3[0] >= 1200) {
        WoodPos3[0] = -80;
    }

}

function logAnimate() {
    if (logAnimateInterval == undefined && normalMode == true) {
        logAnimateInterval = setInterval(Woods, 30);
    }
    if (logAnimateInterval == undefined && hardMode == true) {
        logAnimateInterval = setInterval(Woods, 10);
    }
    if (logAnimateInterval == undefined && easyMode == true) {
        logAnimateInterval = setInterval(Woods, 50);
    }
}
let checkCompleteInterval;
function checkComplete() {
	if (checkCompleteInterval == undefined){
		checkCompleteInterval = setInterval(levelComplete, 1);
	}
}

function levelComplete() {
	if (y < 25){
		clearInterval(carAnimateInterval);
    	clearInterval(logAnimateInterval);
		ctx.clearRect(0, 0, 1200, 600);
		ctx.font = "60px Rosario";
    	ctx.fillStyle = "#000000";
    	ctx.fillText("That's all we have.", 350, 300);
	}
}

function gameOver() {
    clearInterval(carAnimateInterval);
    clearInterval(logAnimateInterval);
    logAnimateInterval = undefined;
    carAnimateInterval = undefined;
    highScoreUpdate();
    ctx.clearRect(0, 0, 1200, 600);
    ctx.font = "60px Rosario";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Game Over.", 450, 300);
    ctx.font = "30px Rosario";
    ctx.fillText("Score: " + scoreNumber, 550, 400);
    ctx.fillText("High Score: " + highScore, 520, 450);
    ctx.fillText("Click to try again", 500, 500);
    gameStart = false;
    gameFinish = true;
}

function highScoreUpdate() {
    if (scoreNumber > highScore) {
        highScore = scoreNumber;
    }
}