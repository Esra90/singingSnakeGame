const cvs = document.getElementById("gameBoard");
const ctx = cvs.getContext("2d");
const scale = 25;
const rows = cvs.height / scale;
const columns = cvs.width / scale;
let snake;
var gameOver = true;
var music = new Music();



(function setup() {
  // begins directly 
  snake = new Snake();
  fruit = new Fruit();
  
  fruit.pickLocation();
  

  window.setInterval(() => {

    if(!gameOver){
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      fruit.draw();
      snake.update();
      snake.draw();


      if (snake.eat(fruit)) {
        fruit.pickLocation();
        music.getRandomMusic(); 
        music.playAudio();
      }

      snake.checkCollision();
      if(!gameOver){
        document.querySelector('.score').innerText = snake.total;
      }else{
        document.querySelector('.score').innerText = 'GAME OVER';
        
      }
    }
   }, 250);
  
})();

window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));
 
//let the game start if you click on the start button 
let button = document.getElementById('start-button');
button.addEventListener('click', function(){
    gameOver = false;
  }
); 


