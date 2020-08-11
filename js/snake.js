const cvs = document.getElementById('gameBoard');
const ctx = canvas.getContext('2d');

// create the unit 
let box = 32;

// Load images 
let imageName = new Image();
imageName.src = "../images/musicnote.png";

let audioName = new Audio();
audioName.src = ""; 

audioName.play();

// Draw images 
ctx.drawImage(imageName, 40, 50, 25, 25);

// Draw snake 
ctx.fillStyle = "purple";
ctx.fillRect(100, 300, 30, 30);

