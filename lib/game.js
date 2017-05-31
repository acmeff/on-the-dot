const Card = require('./card');
const Target = require('./target_pattern');
const Stack = require('./stack');

class Game {

  constructor(){

    this.setUp();
    this.buttons();
  }

  setUp(){
    this.targetCanvas = document.getElementById('target-canvas');
    this.targetCanvas.width = 300;
    this.targetCanvas.height = 300;
    this.targetCtx = this.targetCanvas.getContext('2d');

    this.stackCanvas = document.getElementById('stack');
    this.stackCanvas.width = 300;
    this.stackCanvas.height = 300;
    this.stackCtx = this.stackCanvas.getContext('2d');

    this.canvas1 = document.getElementById('canvas-1');
    this.canvas1.width = 300;
    this.canvas1.height = 300;
    this.ctx1 = this.canvas1.getContext('2d');

    this.canvas2=document.getElementById('canvas-2');
    this.canvas2.width = 300;
    this.canvas2.height = 300;
    this.ctx2 = this.canvas2.getContext('2d');


    this.canvas3=document.getElementById('canvas-3');
    this.canvas3.width = 300;
    this.canvas3.height = 300;
    this.ctx3 = this.canvas3.getContext('2d');


    this.canvas4=document.getElementById('canvas-4');
    this.canvas4.width = 300;
    this.canvas4.height = 300;
    this.ctx4 = this.canvas4.getContext('2d');

    this.createTarget();
    this.createStack();
    this.drawCard1();
    this.drawCard2();
    this.drawCard3();
    this.drawCard4();
  }

  createTarget(){
    this.target = new Target(this.targetCtx, this.targetCanvas);
  }

  createStack(){
    this.stack = new Stack(this.stackCtx, this.stackCanvas);
  }

  drawCard1(){
    this.card1 = new Card(
      this.ctx1, this.canvas1, [285,75], [75, 195], [105, 75], [225, 285], 1
    );
  }

  drawCard2(){
    this.card2 = new Card(
      this.ctx2, this.canvas2, [15, 225], [225, 105], [105, 75], [225, 285], 2);
  }

  drawCard3(){
    this.card3 = new Card(
      this.ctx3, this.canvas3, [75, 195], [285,75], [225, 285], [105, 75], 3
    );
  }

  drawCard4(){
    this.card4 = new Card(
      this.ctx4, this.canvas4, [225, 105], [15, 225], [225, 285], [105, 75], 4
    );
  }

  buttons(){
    [this.card1, this.card2, this.card3, this.card4].forEach((card, idx) => {
      const add = document.getElementById(`add${idx+1}`);
      add.onclick = () => {
        this.stack.addCard(card);
        card.clearCanvas();
      };
    });

    const remove = document.getElementById('remove-top');

    remove.onclick = () => {
      let card = this.stack.removeCard();
      card.drawDots();
    };


    const go = document.getElementById('gen-stack');

    go.onclick = () => {
      this.stack.clearCanvas();
      this.stack = new Stack(
        this.stackCtx, this.stackCanvas, this.card1, this.card2,
        this.card3, this.card4, this.targetCtx
      );
      this.compare();
    };

    const clear = document.getElementById('clear-stack');

    clear.onclick = () => {
      this.stack.clearCanvas();
      this.stack.cards = [];
      this.card1.clearCanvas();
      this.card2.clearCanvas();
      this.card3.clearCanvas();
      this.card4.clearCanvas();
      this.drawCard1();
      this.drawCard2();
      this.drawCard3();
      this.drawCard4();
    };
  }


  compare(){
    let same = true;
    for (let i = 0; i <= this.target.imgData.length; i++){
      if (this.target.imgData[i] !== this.stack.imgData[i]){
        same = false;
      }
    }
    if (same) {
      this.target.clearCanvas();
      this.target = new Target (this.targetCtx, this.targetCanvas);
    }
  }
}

module.exports = Game;
