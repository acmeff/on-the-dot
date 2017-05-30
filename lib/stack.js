const Card = require('./card');

class Stack extends Card {
  constructor(ctx, canvas, c1, c2, c3, c4){
    super();
    this.ctx = ctx;
    this.canvas = canvas;
    this.cards = [c1, c2, c3, c4];
    this.drawCards();
  }

  buttons(){}
  drawDots(){}

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
