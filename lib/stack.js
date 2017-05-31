const Card = require('./card');

class Stack extends Card {
  constructor(ctx, canvas, c1, c2, c3, c4){
    super();
    this.ctx = ctx;
    this.canvas = canvas;
    this.cards = [c1, c2, c3, c4];
    this.drawCards();

    this.imgData = this.ctx.getImageData(0, 0, 300, 300).data;
  }

  buttons(){}
  drawDots(){}


  addCard(card){
    this.cards.push(card);
    this.drawCard(card);
  }

  removeCard(){
    console.log(this.cards);
    this.clearCanvas();
    let card = this.cards.pop();
    this.drawCards();
    console.log(this.cards);
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
