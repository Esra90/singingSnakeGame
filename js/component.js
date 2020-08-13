class Component {
    constructor(game, x, y, width, height) {
      this.game = game;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.img = image;
      
    }
  
    drawComponent() {
        // let gameContext = this.game.ctx;

        ctx.fillStyle = "#FFF";
        ctx.fillRect(this.x, this.y, 10, 10); 
        ctx.strokeRect(this.x, this.y, 10, 10);
    
  
    //   this.img.addEventListener("load", () => {
    //     gameContext.drawImage(this.x, this.y, this.width, this.height);
    //   });
    }
}