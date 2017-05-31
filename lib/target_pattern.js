const Card = require('./card');

class Target extends Card {
  constructor(ctx, canvas){
    super(ctx, canvas);

    this.cards = [];

    this.round1();
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
    let locations = [[[285,75], [75, 195], [105, 75], [225, 285]],
                       [[15, 225], [225, 105], [105, 75], [225, 285]],
                       [[75, 195], [285,75], [225, 285], [105, 75]],
                       [[225, 105], [15, 225], [225, 285], [105, 75]]];
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
    this.drawDot([105, 75], "yellow");
    this.drawDot([75, 15], "yellow");
    this.drawDot([195, 75], "yellow");
    this.drawDot([225, 15], "yellow");
    this.drawDot([225, 195], "green");
    this.drawDot([285, 225], "green");
    this.drawDot([225, 105], "green");
    this.drawDot([285, 75], "green");
    this.drawDot([225, 285], "red");
    this.drawDot([195, 225], "red");
    this.drawDot([105, 225], "red");
    this.drawDot([75, 285], "red");
    this.drawDot([15, 225], "purple");
    this.drawDot([75, 195], "purple");
    this.drawDot([75, 105], "purple");
    this.drawDot([15, 75], "purple");
    this.imgData = this.ctx.getImageData(0, 0, 300, 300).data;
  }

  round2(){
    this.drawDot([105, 75], "purple");
    this.drawDot([75, 15], "purple");
    this.drawDot([195, 75], "yellow");
    this.drawDot([225, 15], "yellow");
    this.drawDot([225, 195], "green");
    this.drawDot([285, 225], "green");
    this.drawDot([225, 105], "yellow");
    this.drawDot([285, 75], "yellow");
    this.drawDot([225, 285], "green");
    this.drawDot([195, 225], "green");
    this.drawDot([105, 225], "red");
    this.drawDot([75, 285], "red");
    this.drawDot([15, 225], "red");
    this.drawDot([75, 195], "red");
    this.drawDot([75, 105], "purple");
    this.drawDot([15, 75], "purple");
  }

  round3(){
    this.drawDot([105, 75], "yellow");
    this.drawDot([75, 15], "purple");
    this.drawDot([195, 75], "yellow");
    this.drawDot([225, 15], "purple");
    this.drawDot([225, 195], "green");
    this.drawDot([285, 225], "red");
    this.drawDot([225, 105], "yellow");
    this.drawDot([285, 75], "purple");
    this.drawDot([225, 285], "red");
    this.drawDot([195, 225], "green");
    this.drawDot([105, 225], "green");
    this.drawDot([75, 285], "red");
    this.drawDot([15, 225], "red");
    this.drawDot([75, 195], "green");
    this.drawDot([75, 105], "yellow");
    this.drawDot([15, 75], "purple");
  }




}

module.exports = Target;
