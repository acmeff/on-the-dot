class Card {
  constructor(ctx, canvas, num, pos = []){
    this.ctx = ctx;
    this.canvas = canvas;
    this.num = num;
    this.gPos = pos[0];
    this.pPos = pos[1];
    this.rPos = pos[2];
    this.yPos = pos[3];


    if (num){
      this.buttons();
      this.drawDots();
    }
  }

  clearCanvas(){
    this.canvas.width = 0;
    this.canvas.width = 255;
  }

  randomPosition(){
    for (let i = Math.floor(Math.random() * 10); i < 15; i++){
      this.gPos = [255 - this.gPos[1], this.gPos[0]];
      this.pPos = [255 - this.pPos[1], this.pPos[0]];
      this.rPos = [255 - this.rPos[1], this.rPos[0]];
      this.yPos = [255 - this.yPos[1], this.yPos[0]];
    }
    for (let i = Math.floor(Math.random() * 10); i < 15; i++){
      this.gPos = [this.gPos[1], 255 - this.gPos[0]];
      this.pPos = [this.pPos[1], 255 - this.pPos[0]];
      this.rPos = [this.rPos[1], 255 - this.rPos[0]];
      this.yPos = [this.yPos[1], 255 - this.yPos[0]];
    }
    for (let i = Math.floor(Math.random() * 10); i < 15; i++){
      this.gPos = [this.gPos[0], 255 - this.gPos[1]];
      this.rPos = [this.rPos[0], 255 - this.rPos[1]];
      this.yPos = [this.yPos[0], 255 - this.yPos[1]];
      this.pPos = [this.pPos[0], 255 - this.pPos[1]];
    }
  }

  buttons(){
    const counter = document.getElementById(`rotate-counter${this.num}`);
    counter.onclick = () =>{
      if (this.canvas.classList.contains('full')){
        this.rotateCounter();
      }
    };
    let label = document.querySelector(`.rot-counter`);
    counter.onmouseover = () => {
      label.classList.remove('hidden');
    };
    counter.onmouseout = () => {
      label.classList.add('hidden');
    };

    const clock = document.getElementById(`rotate-clock${this.num}`);
    clock.onclick = () =>{
      if (this.canvas.classList.contains('full')){
        this.rotateClock();
      }
    };
    let label1 = document.querySelector(`.rot-clock`);
    clock.onmouseover = () => {
      label1.classList.remove('hidden');
    };
    clock.onmouseout = () => {
      label1.classList.add('hidden');
    };

    const up = document.getElementById(`flip-up${this.num}`);
    up.onclick = () =>{
      if (this.canvas.classList.contains('full')){
        this.flipUp();
      }
    };
    let uplabel = document.querySelector(`.up`);
    up.onmouseover = () => {
      uplabel.classList.remove('hidden');
    };
    up.onmouseout = () => {
      uplabel.classList.add('hidden');
    };

    const side = document.getElementById(`flip-side${this.num}`);
    side.onclick = () =>{
      if (this.canvas.classList.contains('full')){
        this.flipSide();
      }
    };
    let sidelabel = document.querySelector(`.side`);
    side.onmouseover = () => {
      sidelabel.classList.remove('hidden');
    };
    side.onmouseout = () => {
      sidelabel.classList.add('hidden');
    };

  }

  drawDot(pos, col){
    this.ctx.beginPath();
    this.ctx.arc(pos[0], pos[1], 13, 0, 100);
    this.ctx.fillStyle= col;
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawDots(){
    this.drawDot(this.pPos, "purple");
    this.drawDot(this.rPos, "red");
    this.drawDot(this.gPos, "green");
    this.drawDot(this.yPos, "yellow");
  }

  rotateCounter(){
    this.canvas.classList.add('counter');
    this.gPos = [this.gPos[1], 255 - this.gPos[0]];
    this.pPos = [this.pPos[1], 255 - this.pPos[0]];
    this.rPos = [this.rPos[1], 255 - this.rPos[0]];
    this.yPos = [this.yPos[1], 255 - this.yPos[0]];
    setTimeout(() => {
      this.ctx.clearRect(0, 0, 255, 255);
      this.canvas.classList.remove('counter');
      this.drawDots();
    }, 200);

  }

  rotateClock(){
    this.canvas.classList.add('clock');
    this.gPos = [255 - this.gPos[1], this.gPos[0]];
    this.pPos = [255 - this.pPos[1], this.pPos[0]];
    this.rPos = [255 - this.rPos[1], this.rPos[0]];
    this.yPos = [255 - this.yPos[1], this.yPos[0]];
    setTimeout(() => {
      this.ctx.clearRect(0, 0, 255, 255);
      this.canvas.classList.remove('clock');
      this.drawDots();
    }, 200);
  }

  flipUp(){
    this.canvas.classList.add('vert');
    this.gPos = [this.gPos[0], 255 - this.gPos[1]];
    this.rPos = [this.rPos[0], 255 - this.rPos[1]];
    this.yPos = [this.yPos[0], 255 - this.yPos[1]];
    this.pPos = [this.pPos[0], 255 - this.pPos[1]];
    setTimeout(() => {
      this.ctx.clearRect(0, 0, 255, 255);
      this.canvas.classList.remove('vert');
      this.drawDots();
    }, 200);
  }

  flipSide(){
    this.canvas.classList.add('horizontal');
    this.gPos = [255 - this.gPos[0], this.gPos[1]];
    this.rPos = [255 - this.rPos[0], this.rPos[1]];
    this.yPos = [255 - this.yPos[0], this.yPos[1]];
    this.pPos = [255 - this.pPos[0], this.pPos[1]];
    setTimeout(() => {
      this.ctx.clearRect(0, 0, 255, 255);
      this.canvas.classList.remove('horizontal');
      this.drawDots();
    }, 200);
  }

}

module.exports = Card;
