const Card = require('./card');

class Stack extends Card {
  constructor(ctx, canvas, cards = []){
    super();
    this.ctx = ctx;
    this.canvas = canvas;
    this.cards = cards;
    this.qmark = document.getElementById('qmark');
    this.drawCards();


    this.imgData = this.ctx.getImageData(0, 0, 300, 300).data;
  }

  buttons(){}
  drawDots(){}

  addCard(card){
    this.clearCanvas();
    this.cards.push(card);
    this.drawCards();
    card.canvas.classList.add('empty');
    card.canvas.classList.remove('full');
  }

  removeCard(){
    this.clearCanvas();
    let card = this.cards.pop();
    this.drawCards();
    card.canvas.classList.add('full');
    card.canvas.classList.remove('empty');
    return card;
  }

  drawCards(){
    this.cards.forEach(card => {
      if (card){
        this.drawCard(card);
      }
    });
      if (this.cards.length === 0){
        this.canvas.classList.add('empty');
        this.qmark.classList.remove('hidden');
      } else {
        this.canvas.classList.add('full');
        this.canvas.classList.remove('empty');
        this.qmark.classList.add('hidden');
      }
  }

  drawCard(card){
    this.drawDot(card.pPos, "#a106ff");
    this.drawDot(card.rPos, "#f53737");
    this.drawDot(card.gPos, "#00ff00");
    this.drawDot(card.yPos, "yellow");
  }

}

module.exports = Stack;
