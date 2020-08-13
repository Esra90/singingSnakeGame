const cvs = document.getElementById("gameBoard");
const ctx = cvs.getContext("2d");
const scale = 25;
const rows = cvs.height / scale;
const columns = cvs.width / scale;
let snake;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();
  fruit.pickLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
    }

    snake.checkCollision();
    document.querySelector('.score').innerText = snake.total;

  }, 250);
}());

window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));
