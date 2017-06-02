const Card = require('./card');

class Target extends Card {
  constructor(ctx, canvas){
    super(ctx, canvas);

    this.cards = [];

  }

  buttons(){}

  drawDots(){
    this.round1();
  }

  drawNext(){
    this.clearCanvas();
    this.generateCards();
    this.imgData = this.ctx.getImageData(0, 0, 300, 300).data;
  }

  generateCards(){
    let locations = [[[242.25, 63.75], [63.75, 165.75], [89.25, 63.75],
                     [191.25, 242.25]],
                       [[12.75, 191.25], [191.25, 89.25],
                       [89.25, 63.75], [191.25, 242.25]],
                       [[63.75, 165.75], [242.25,63.75],
                       [191.25, 242.25], [89.25, 63.75]],
                       [[191.25, 89.25], [12.75, 191.25],
                       [191.25, 242.25], [89.25, 63.75]]];

    let a = Math.floor(Math.random()*4);
    let A = locations[a];
    locations.splice(a, 1);
    let b = Math.floor(Math.random()*3);
    let B = locations[b];
    locations.splice(b, 1);
    let c = Math.floor(Math.random()*2);
    let C = locations[c];
    locations.splice(c, 1);
    let D = locations[0];

    this.cardA = new Card(
      this.ctx, this.canvas, null, A);

    this.cardB = new Card(
      this.ctx, this.canvas, null, B);

    this.cardC = new Card(
      this.ctx, this.canvas, null, C);

    this.cardD = new Card(
      this.ctx, this.canvas, null, D);

    this.cardA.randomPosition();
    this.cardB.randomPosition();
    this.cardC.randomPosition();
    this.cardD.randomPosition();

    this.cards = [this.cardA, this.cardB, this.cardC, this.cardD];


    this.drawCards();
  }

  drawCards(){
    this.cards.forEach(card => {
      if (card){
        card.drawDots();
      }
    });
  }



  round1(){
    this.drawDot([89.25, 63.75], "yellow");
    this.drawDot([63.75, 12.75], "yellow");
    this.drawDot([165.75, 63.75], "yellow");
    this.drawDot([191.25, 12.75], "yellow");
    this.drawDot([191.25, 165.75], "#00ff00");
    this.drawDot([242.25, 191.25], "#00ff00");
    this.drawDot([191.25, 89.25], "#00ff00");
    this.drawDot([242.25, 63.75], "#00ff00");
    this.drawDot([191.25, 242.25], "#f53737");
    this.drawDot([165.75, 191.25], "#f53737");
    this.drawDot([89.25, 191.25], "#f53737");
    this.drawDot([63.75, 242.25], "#f53737");
    this.drawDot([12.75, 191.25], "#a106ff");
    this.drawDot([63.75, 165.75], "#a106ff");
    this.drawDot([63.75, 89.25], "#a106ff");
    this.drawDot([12.75, 63.75], "#a106ff");
    this.imgData = this.ctx.getImageData(0, 0, 300, 300).data;
  }

}

module.exports = Target;
