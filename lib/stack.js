const Card = require('./card');

class Stack extends Card {
  constructor(ctx, canvas, c1, c2, c3, c4, targetCtx){
    super();
    this.ctx = ctx;
    this.canvas = canvas;
    this.cards = [c1, c2, c3, c4];
    this.drawCards();

    this.targetImg =targetCtx.getImageData(0,0, 300, 300).data;
    this.img = this.ctx.getImageData(0, 0, 300, 300).data;
    console.log(this.compare());
  }

  buttons(){}
  drawDots(){}

  compare(){
    let same = true;
    for (let i = 0; i <= this.img.length; i++){
      if (this.img[i] !== this.targetImg[i]){
        same = false;
      }
    }
    return same;
  }

  drawCards(){
    this.cards.forEach(card => {
      if (card){
        this.drawCard(card);
      }
    });
  }

  drawCard(card){
    this.drawDot(card.pPos, "purple");
    this.drawDot(card.rPos, "red");
    this.drawDot(card.gPos, "green");
    this.drawDot(card.yPos, "yellow");
  }

}

module.exports = Stack;
