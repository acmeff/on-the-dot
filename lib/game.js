const Card = require('./card');
const Target = require('./target_pattern');
const Stack = require('./stack');
const Demo = require('./demo');

class Game {

  constructor(){
    this.match = document.getElementById('match');
    this.notMatch = document.getElementById('not-match');
    this.total = document.getElementById('total');
    this.qmark = document.getElementById('qmark');
    this.setUp();
    this.buttons();
    setTimeout(() => (this.demo = new Demo(this.target)), 1000);
    this.count = 0;

  }

  setUp(){
    this.targetCanvas = document.getElementById('target-canvas');
    this.targetCanvas.width = 255;
    this.targetCanvas.height = 255;
    this.targetCtx = this.targetCanvas.getContext('2d');

    this.stackCanvas = document.getElementById('stack');
    this.stackCanvas.width = 255;
    this.stackCanvas.height = 255;
    this.stackCtx = this.stackCanvas.getContext('2d');

    this.canvas1 = document.getElementById('canvas-1');
    this.canvas1.width = 255;
    this.canvas1.height = 255;
    this.ctx1 = this.canvas1.getContext('2d');
    this.card1 = new Card(
      this.ctx1, this.canvas1, 1,
      [[285*.85, 75*.85], [75*.85, 195*.85],
      [105*.85, 75*.85], [225*.85, 285*.85]]);

    this.canvas2=document.getElementById('canvas-2');
    this.canvas2.width = 255;
    this.canvas2.height = 255;
    this.ctx2 = this.canvas2.getContext('2d');
    this.card2 = new Card(
      this.ctx2, this.canvas2, 2,
      [[15*.85, 225*.85], [225*.85, 105*.85],
      [105*.85, 75*.85], [225*.85, 285*.85]]);


    this.canvas3=document.getElementById('canvas-3');
    this.canvas3.width = 255;
    this.canvas3.height = 255;
    this.ctx3 = this.canvas3.getContext('2d');
    this.card3 = new Card(
      this.ctx3, this.canvas3, 3,
      [[75*.85, 195*.85], [285*.85,75*.85],
      [225*.85, 285*.85], [105*.85, 75*.85]]
    );


    this.canvas4=document.getElementById('canvas-4');
    this.canvas4.width = 255;
    this.canvas4.height = 255;
    this.ctx4 = this.canvas4.getContext('2d');
    this.card4 = new Card(
      this.ctx4, this.canvas4, 4,
      [[225*.85, 105*.85], [15*.85, 225*.85],
      [225*.85, 285*.85], [105*.85, 75*.85]]
    );

    this.createTarget();
    this.createStack();
  }

  createTarget(){
    this.target = new Target(this.targetCtx, this.targetCanvas);
  }

  createStack(){
    this.stack = new Stack(this.stackCtx, this.stackCanvas);
  }

  buttons(){
    [this.card1, this.card2, this.card3, this.card4].forEach((card, idx) => {
      const add = document.getElementById(`add${idx+1}`);
      add.onclick = () => {
        this.stack.addCard(card);
        card.clearCanvas();
      };
      const label = document.querySelector(`.add`);
      add.onmouseover = () => {
        label.classList.remove('hidden');
        add.classList.add('hover');
      };
      add.onmouseout = () => {
        label.classList.add('hidden');
        add.classList.remove('hover');
      };
    });

    const remove = document.getElementById('remove-top');

    remove.onclick = () => {
      let card = this.stack.removeCard();
      card.drawDots();
    };


    const go = document.getElementById('gen-stack');
    go.onclick = () => {
      let cards = this.stack.cards;
      this.stack.clearCanvas();
      this.stack = new Stack(this.stackCtx, this.stackCanvas, cards);
      this.compare();
    };
    go.onmouseover = () => {
      go.classList.add('hover');
    };
    go.onmouseout = () => {
      go.classList.remove('hover');
    };
    const clear = document.getElementById('clear-stack');

    clear.onclick = () => this.clearStack();

    const skip = document.getElementById('skip');
    skip.onclick = () => {
      this.demo.stop();
      this.clearStack();
      this.target.drawNext();
    };

  }

  clearStack(){
    this.stack.clearCanvas();
    this.stack.cards = [];
    this.stack.canvas.classList.remove('full');
    this.stack.canvas.classList.add('empty');
    this.qmark.classList.remove('hidden');

    this.card1.clearCanvas();
    this.card2.clearCanvas();
    this.card3.clearCanvas();
    this.card4.clearCanvas();
    this.card1.drawDots();
    this.card2.drawDots();
    this.card3.drawDots();
    this.card4.drawDots();
    this.toggleCards();
  }

  toggleCards(){
    [this.card1, this.card2, this.card3, this.card4].forEach(card => {
      if (!card.canvas.classList.contains('full')){
        card.canvas.classList.add('full');
        card.canvas.classList.remove('empty');
      }
    });
  }


  compare(){
    let same = true;
    let diff = 0;
    for (let i = 0; i < this.target.imgData.length; i++){
      if (this.target.imgData[i] !== this.stack.imgData[i]){
        same = false;
        diff ++;
      }
    }
    if (diff < 2000) {
      this.count ++;
      this.match.classList.remove('hidden');
      this.match.classList.add('appear');
      if (!this.demo.demo){this.total.innerHTML++;}

      setTimeout(() => {
        this.target.drawNext();
        this.clearStack();
        this.match.classList.add("hidden");
        this.match.classList.remove('appear');
      }, 1500);
    } else {
      this.notMatch.classList.remove('hidden');
      this.notMatch.classList.add('appear');
      setTimeout(() => {
        this.notMatch.classList.add("hidden");
        this.notMatch.classList.remove('appear');
      }, 1500);
    }

  }
}

module.exports = Game;
