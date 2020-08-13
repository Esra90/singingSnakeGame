function Fruit() {
  this.x;
  this.y;

  //Get random location fot the next music note
  this.pickLocation = function() {
    this.x = (Math.floor(Math.random() *
      columns - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() *
      rows - 1) + 1) * scale;
  }


  // Draw the img of the food(music note)
  this.draw = function() {
    // ctx.fillStyle = "#4cafab";
    // ctx.fillRect(this.x, this.y, scale, scale)
    let foodImg = new Image();
    foodImg.src = './images/musicNote.png';    
    ctx.drawImage(foodImg, this.x, this.y, scale, scale);  
  }


  // Collect the music notes 
  // this.collectMusicNotes = function() {

  // }
}
