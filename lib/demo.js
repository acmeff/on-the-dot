

class Demo {

  constructor(target){
    target.round1();

    this.demo = true;

    const welcome = document.getElementById('welcome');
    welcome.classList.add('hidden');

    const replay = document.getElementById('replay');
    replay.classList.add('hidden');
    const play = document.getElementById('play');
    play.classList.add('hidden');

    this.text();

  }

  stop(){
    this.demo = false;
    this.finalize();
    return true;
  }

  highlight(id){
    const target = document.getElementById(id);
    target.classList.add('highlight');
    setTimeout(() => target.classList.remove('highlight'), 2000);
  }


  text(){
    setTimeout(() => this.flashText('one'), 1000);
    setTimeout(() => this.highlight('target-canvas'), 1000);
    setTimeout(() => this.flashText('two'), 3000);
    setTimeout(() => this.highlight('stack'), 3000);
    setTimeout(() => this.flashText('three'), 5000);
    setTimeout(() => this.highlight('canvas-1'), 5000);
    setTimeout(() => this.highlight('canvas-2'), 5000);
    setTimeout(() => this.highlight('canvas-3'), 5000);
    setTimeout(() => this.highlight('canvas-4'), 5000);
    setTimeout(() => this.cards(), 7000);
  }

  flashText(id){
    const one = document.getElementById(id);
    if(this.demo){
      one.classList.remove('hidden');
      one.classList.add('appear');
    }
    setTimeout(() => {
      one.classList.remove('appear');
      one.classList.add('hidden');
    }, 1000);
  }

  addCards(id){
    if(this.demo){
      const flip1 = document.getElementById(id);
      flip1.onmouseover();
      setTimeout(() => flip1.click(), 1000);
      setTimeout(() => flip1.onmouseout(), 1500);
    }
  }

  cards(){
    this.addCards('flip-up1');
    setTimeout(() => this.addCards('add1'), 2000);
    setTimeout(() => this.addCards('rotate-clock2'), 3500);
    setTimeout(() => this.addCards('rotate-clock2'), 5500);
    setTimeout(() => this.addCards('add2'), 7000);
    setTimeout(() => this.addCards('flip-side3'), 8500);
    setTimeout(() => this.addCards('add3'), 10000);
    setTimeout(() => this.addCards('add4'), 11500);

    setTimeout(() => this.submit(), 13000);
  }

  submit(){
    if(this.demo){
      const check = document.getElementById('gen-stack');
      check.onmouseover();
      setTimeout(() => check.click(), 500);
      setTimeout(() => check.onmouseout(), 1000);
      setTimeout(() => {
        const yourTurn = document.getElementById('your-turn');
        yourTurn.classList.remove('hidden');
        yourTurn.classList.add('appear');
      }, 2200);
    }

    this.finalize();
  }

  finalize(){
    setTimeout(() => (this.demo = false), 1000);
    const skip = document.getElementById('skip');
    skip.classList.add('hidden');


    const play = document.getElementById('play');
    play.classList.remove('hidden');

    const replay = document.getElementById('replay');
    replay.innerHTML = 'Replay Demo';
    replay.classList.remove('hidden');

  }
}
module.exports = Demo;
