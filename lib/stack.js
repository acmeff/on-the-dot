const Card = require('./card');

class Stack extends Card {
  constructor(ctx, canvas, cards = []){
    super();
    this.ctx = ctx;
    this.canvas = canvas;
    this.cards = cards;
    this.drawCards();

    this.imgData = this.ctx.getImageData(0, 0, 300, 300).data;
  }

  buttons(){}
  drawDots(){}

  addCard(card){
    this.clearCanvas();
    this.cards.push(card);
    this.drawCards();
  }

  removeCard(){
    this.clearCanvas();
    let card = this.cards.pop();
    this.drawCards();
    return card;
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
