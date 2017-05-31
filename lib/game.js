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

    const canvas1 = document.getElementById('canvas-1');
    canvas1.width = 300;
    canvas1.height = 300;
    const ctx1 = canvas1.getContext('2d');
    this.card1 = new Card(
      ctx1, canvas1, [285,75], [75, 195], [105, 75], [225, 285], 1
    );

    const canvas2=document.getElementById('canvas-2');
    canvas2.width = 300;
    canvas2.height = 300;
    const ctx2 = canvas2.getContext('2d');
    this.card2 = new Card(
      ctx2, canvas2, [15, 225], [225, 105], [105, 75], [225, 285], 2)
      ;

    const canvas3=document.getElementById('canvas-3');
    canvas3.width = 300;
    canvas3.height = 300;
    const ctx3 = canvas3.getContext('2d');
    this.card3 = new Card(
      ctx3, canvas3, [75, 195], [285,75], [225, 285], [105, 75], 3
    );

    const canvas4=document.getElementById('canvas-4');
    canvas4.width = 300;
    canvas4.height = 300;
    const ctx4 = canvas4.getContext('2d');
    this.card4 = new Card(
      ctx4, canvas4, [225, 105], [15, 225], [225, 285], [105, 75], 4
    );

    this.target = new Target(this.targetCtx, this.targetCanvas);
    this.stack = new Stack(this.stackCtx, this.stackCanvas);

  }

  buttons(){
    [this.card1, this.card2, this.card3, this.card4].forEach((card, idx) => {
      const add = document.getElementById(`add${idx+1}`);
      add.onclick = () => {
        this.stack.addCard(card);
      };
    });

    const remove = document.getElementById('remove-top');

    remove.onclick = () => this.stack.removeCard();


    const go = document.getElementById('gen-stack');

    go.onclick = () => {
      this.stackCanvas.width = 0;
      this.stackCanvas.width = 300;
      this.stack = new Stack(
        this.stackCtx, this.stackCanvas, this.card1, this.card2,
        this.card3, this.card4, this.targetCtx
      );
      this.compare();
    };

    const clear = document.getElementById('clear-stack');

    clear.onclick = () =>
      {this.stackCanvas.width = 0;
      this.stackCanvas.width = 300;};
  }


  compare(){
    let same = true;
    for (let i = 0; i <= this.target.imgData.length; i++){
      if (this.target.imgData[i] !== this.stack.imgData[i]){
        same = false;
      }
    }
    if (same) {
      this.targetCanvas.width = 0;
      this.targetCanvas.width = 300;
      this.target = new Target (this.targetCtx, this.targetCanvas);
    }
  }
}

module.exports = Game;
