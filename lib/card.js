class Card {
  constructor(ctx, canvas, gPos, pPos, rPos, yPos, num){
    this.zIdx = 0;
    this.ctx = ctx;
    this.canvas = canvas;
    this.num = num;
    this.gPos = gPos;
    this.pPos = pPos;
    this.rPos = rPos;
    this.yPos = yPos;

    this.drawDots();
    this.buttons();
  }

  buttons(){
    const counter = document.getElementById(`rotate-counter${this.num}`);
    counter.onclick = () =>{
      this.rotateCounter();
    };

    const clock = document.getElementById(`rotate-clock${this.num}`);
    clock.onclick = () =>{
      this.rotateClock();
    };

    const up = document.getElementById(`flip-up${this.num}`);
    up.onclick = () =>{
      this.flipUp();
    };

    const side = document.getElementById(`flip-side${this.num}`);
    side.onclick = () =>{
      this.flipSide();
    };
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
    this.canvas.classList.add('counter');
    this.gPos = [this.gPos[1], 300 - this.gPos[0]];
    this.pPos = [this.pPos[1], 300 - this.pPos[0]];
    this.rPos = [this.rPos[1], 300 - this.rPos[0]];
    this.yPos = [this.yPos[1], 300 - this.yPos[0]];
    setTimeout(() => {
      this.ctx.clearRect(0, 0, 300, 300);
      this.canvas.classList.remove('counter');
      this.drawDots();
    }, 150);

  }

  rotateClock(){
    this.canvas.classList.add('clock');
    this.gPos = [300 - this.gPos[1], this.gPos[0]];
    this.pPos = [300 - this.pPos[1], this.pPos[0]];
    this.rPos = [300 - this.rPos[1], this.rPos[0]];
    this.yPos = [300 - this.yPos[1], this.yPos[0]];
    setTimeout(() => {
      this.ctx.clearRect(0, 0, 300, 300);
      this.canvas.classList.remove('clock');
      this.drawDots();
    }, 150);
  }

  flipUp(){
    this.canvas.classList.add('vert');
    this.gPos = [this.gPos[0], 300 - this.gPos[1]];
    this.rPos = [this.rPos[0], 300 - this.rPos[1]];
    this.yPos = [this.yPos[0], 300 - this.yPos[1]];
    this.pPos = [this.pPos[0], 300 - this.pPos[1]];
    setTimeout(() => {
      this.ctx.clearRect(0, 0, 300, 300);
      this.canvas.classList.remove('vert');
      this.drawDots();
    }, 150);
  }

  flipSide(){
    this.canvas.classList.add('horizontal');
    this.gPos = [300 - this.gPos[0], this.gPos[1]];
    this.rPos = [300 - this.rPos[0], this.rPos[1]];
    this.yPos = [300 - this.yPos[0], this.yPos[1]];
    this.pPos = [300 - this.pPos[0], this.pPos[1]];
    setTimeout(() => {
      this.ctx.clearRect(0, 0, 300, 300);
      this.canvas.classList.remove('horizontal');
      this.drawDots();
    }, 150);
  }

}

module.exports = Card;
