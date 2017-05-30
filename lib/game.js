const Card = require('./card');
const Target = require('./target_pattern');
const Stack = require('./stack');

class Game {

  constructor(target, stack){
    this.target = target;
    this.stack = stack;
  }


  compare(){
    let same = true;
    for (let i = 0; i <= this.target.imgData.length; i++){
      if (this.target.imgData[i] !== this.stack.imgData[i]){
        same = false;
      }
    }
    return same;
  }
}

module.exports = Game;
