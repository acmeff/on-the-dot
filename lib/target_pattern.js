const Card = require('./card');

class Target extends Card {
  constructor(ctx, canvas){
    super(ctx, canvas);
    this.imgData = this.ctx.getImageData(0, 0, 300, 300).data;
  }

  buttons(){}

  drawDots(){
    this.round3();
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
