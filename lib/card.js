

class Card {
  constructor(ctx, gPos, pPos, rPos, yPos){
    this.rotation = 0;
    this.side = 0;
    this.zIdx = 0;
    this.ctx = ctx;
    this.gPos = gPos;
    this.pPos = pPos;
    this.rPos = rPos;
    this.yPos = yPos;

    this.drawDots();
  }

  drawDot(pos, col){
    this.ctx.beginPath();
    this.ctx.arc(pos[0], pos[1], 15, 0, 100);
    this.ctx.fillStyle= col;
    this.ctx.fill();
  }

  drawDots(){
    this.drawDot(this.pPos, "purple");
    this.drawDot(this.rPos, "red");
    this.drawDot(this.gPos, "green");
    this.drawDot(this.yPos, "yellow");
  }

  rotateCounter(){
    this.ctx.clearRect(0, 0, 300, 300);
    this.gPos = [this.gPos[1], 300 - this.gPos[0]];
    this.pPos = [this.pPos[1], 300 - this.pPos[0]];
    this.rPos = [this.rPos[1], 300 - this.rPos[0]];
    this.yPos = [this.yPos[1], 300 - this.yPos[0]];
    this.drawDots();

  }

  rotateClock(){
    this.ctx.clearRect(0, 0, 300, 300);
    this.gPos = [300 - this.gPos[1], this.gPos[0]];
    this.rPos = [300 - this.rPos[1], this.rPos[0]];
    this.yPos = [300 - this.yPos[1], this.yPos[0]];
    this.pPos = [300 - this.pPos[1], this.pPos[0]];
    this.drawDots();
  }

  flipUp(){
    this.ctx.clearRect(0, 0, 300, 300);
    this.gPos = [this.gPos[0], 300 - this.gPos[1]];
    this.rPos = [this.rPos[0], 300 - this.rPos[1]];
    this.yPos = [this.yPos[0], 300 - this.yPos[1]];
    this.pPos = [this.pPos[0], 300 - this.pPos[1]];
    this.drawDots();
  }

  flipSide(){
    this.ctx.clearRect(0, 0, 300, 300);
    this.gPos = [300 - this.gPos[0], this.gPos[1]];
    this.rPos = [300 - this.rPos[0], this.rPos[1]];
    this.yPos = [300 - this.yPos[0], this.yPos[1]];
    this.pPos = [300 - this.pPos[0], this.pPos[1]];
    this.drawDots();
  }

}

module.exports = Card;
