class Game {
    constructor() {
      this.cvs = document.getElementById('gameBoard');
      this.ctx = this.cvs.getContext('2d');
      this.x = 0;
      this.y = 0;
      this.width = 950;
      this.height = 600;
      this.musicNoteImg = new Image();
      this.snake = new Image();
      this.musicNote = [];
    }
  
    init() {
      this.start();
      this.createObstacles();
    }
  
    start() {
      this.drawMusicNote();
      this.drawSnake();
      
    }
 
    drawMusicNote() {
        this.musicNoteImg.src = "./images/musicNote.png";
        this.musicNoteImg.addEventListener("load", () => {
          this.ctx.drawImage(this.musicNoteImg, 50, 50, 40, 40);
        });
     }

    createObstacles() {
        this.musicNote = {x: 20, y: 20};
        //   Random box between 0 - 25 i.e the grid size 25x25. Multiply by 10 to get x,y coordinates
        let x = Math.floor(Math.random() *50) * 10;
        let y = Math.floor(Math.random() * 50) * 10;
        // selecting food that doesn't collide with the snake
        while (this.snake.some(part => part.x === x && part.y === y)) {
            x = Math.floor(Math.random() * 50) * 10;
            y = Math.floor(Math.random() * 50) * 10;
        }
        //   Next Food
        this.musicNote  = { x, y };
        console.log(this.musicNote)
    }


    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawSnake() {
        this.snake.drawComponent()
      }
  }