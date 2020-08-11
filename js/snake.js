const cvs = document.getElementById('gameBoard');
const ctx = cvs.getContext('2d');


// Draw images 
let backgroundCanvas = new Image();
backgroundCanvas.src = "./images/backGround2.jpg";

let musicNoteImg = new Image();
musicNoteImg.src = './images/musicNote.png';

// Make sure the image is loaded first otherwise nothing will draw.
window.onload = function(){
    ctx.drawImage(backgroundCanvas,0,0);   
    ctx.drawImage(musicNoteImg,50, 50, 40, 40);
  
}

let cvsW = cvs.width;
let cvsH = cvs.height;

let snakeW = 30;
let snakeH = 30;

//default direction
let direction = "right";

// read the user directions 
document.addEventListener("keydown", getDirection);

function getDirection(e){
    if(e.keyCode === 37 && direction != "right"){
        direction = "left";
    }else if(e.keyCode === 38 && direction != "down"){
        direction = "up";
    }else if(e.keyCode === 39 && direction != "left"){
        direction = "right";
    }else if (e.keyCode === 40 && direction != "up"){
        direction = "down";
    }
}


function drawSnake (x, y) {
    ctx.fillStyle = "#FFF";
    ctx.fillRect(x*snakeW, y*snakeH, snakeW, snakeH);

    ctx.fillStyle = "#000";
    ctx.fillRect(x*snakeW, y*snakeH, snakeW, snakeH);
}


// Create the snake (has to be an array and contain 3 cells in default
let length = 3;
let snake = [];

for (let i = length-1; i >= 0; i--){
    snake.push({
        x:i,
        y:0
        }
    );
}
// create some food(musicNote)
let musicNote = {
    x : Math.floor(Math.random() * (cvsW / snakeW) +1),
    y : Math.floor(Math.random() * (cvsH / snakeH) +1),
}

// draw food function  
function drawMusicNote(x, y) {
    ctx.drawImage(musicNoteImg,50, 50, 40, 40);

}

function draw() {
    ctx.clearRect(0, 0, cvsW, cvsH)
    for(let i = 0; i <snake.length; i++){
        let x = snake[i].x;
        let y = snake[i].y; 
        drawSnake(x,y);
    }

    // draw food(musicNotes)
    drawMusicNote(musicNote.x, musicNote.y);
    //snake head
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //if the snake heads the wall, it's a game over
    if(snakeX < 0  || snakeY < 0 || snakeX >= cvsW/snakeW || snakeY >= cvsH/snakeW){
        location.reload();
    }

    //remove the last entry(the snake tail)
    snake.pop();

    // Create a new head, based on the previous head and the direction
    if ( direction == "left") snakeX--;
    else if (direction == "up") snakeY--;
    else if (direction == "right")snakeX++;
    else if ( direction == "down") snakeY++;

    // if the snake eats the food 
    // if(snakeX === musicNote.x && snakeY === musicNote.y){

    // }else

    snakeX++;
    let newHead = {
        x : snakeX,
        y : snakeY
    };

    snake.unshift(newHead);

}
setInterval(draw,120);


//initialize the snake with index 0 (head position)
// snake[0] = {
//     x : 9,
//     y : 10,
// }

// Create the musicNotes
// let musicNote = {
//     x : Math.floor(Math.random() * ctx),
//     y : Math.floor(Math.random() * ctx)





// // create the unit 
// let box = 32;

// // Load images 
// let gameGround = new Image();
// gameGround.src = "../images/backGround2.jpg";

// let musicNoteImg = new Image();
// musicNoteImg.src = "../images/musicNote.png";

// // Create the snake 
// let snake = [];
// // initiate the snake with index 0 (head position)
// snake[0] = {
//     x : 9 * box,
//     y : 10 * box
// }

// // create the musicnotes 
// let musicNote = {
//     x : Math.floor(Math.random() * 17+1) * box,
//     y : Math.floor(Math.random() * 15+3) * box
// }

// // Create the score 

// let score = 0;


// // Draw everything to this canvas

// function draw () {
//     ctx.drawImage(gameGround, 0, 0);
//     ctx.drawImage(musicNoteImg, 40, 50, 25, 25);


// }

// // Call draw function every 100 ms
// let game = setInterval(draw, 100);


// let audioName = new Audio();
// audioName.src = ""; 

// audioName.play();

// // Draw images 
// ctx.drawImage(imageName, 40, 50, 25, 25);

// // Draw snake 
// ctx.fillStyle = "purple";
// ctx.fillRect(100, 300, 30, 30);

