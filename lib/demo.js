const demo = function(){
  setTimeout(() => {
    const replay = document.getElementById('replay');
    replay.classList.add('hidden');
    const skip = document.getElementById('skip');
    skip.classList.remove('hidden');
  }, 1000);

  setTimeout(() => text(), 1000);

};

const text = function (){

  const one = document.getElementById('one');
  one.classList.remove('hidden');
  one.classList.add('appear');

  setTimeout(() => {
    const three = document.getElementById('three');
    three.classList.remove('hidden');
    three.classList.add('appear');
  }, 2000);

  setTimeout(() => {
    const four = document.getElementById('four');
    four.classList.remove('hidden');
    four.classList.add('appear');
  }, 4000);

  setTimeout(() => {
    const five = document.getElementById('five');
    five.classList.remove('hidden');
    five.classList.add('appear');
  }, 6000);


  setTimeout(() => {
    const two = document.getElementById('two');
    two.classList.remove('hidden');
    two.classList.add('appear');
  }, 8000);
  setTimeout(() => cards(), 10000);
};

const cards = function (){
  const flip1 = document.getElementById('flip-up1');
  flip1.onmouseover();
  setTimeout(() => flip1.click(), 1000);
  setTimeout(() => flip1.onmouseout(), 1500);

  const add1 = document.getElementById('add1');
  setTimeout(() => add1.onmouseover(), 2000);
  setTimeout(() => add1.click(), 2500);
  setTimeout(() => add1.onmouseout(), 3000);

  const flip2 = document.getElementById('flip-up2');
  setTimeout(() => flip2.onmouseover(), 3500);
  setTimeout(() => flip2.click(), 4000);
  setTimeout(() => flip2.onmouseout(), 4500);

  const flipside2 = document.getElementById('flip-side2');
  setTimeout(() => flipside2.onmouseover(), 5000);
  setTimeout(() => flipside2.click(), 5500);
  setTimeout(() => flipside2.onmouseout(), 6000);

  const add2 = document.getElementById('add2');
  setTimeout(() => add2.onmouseover(), 6500);
  setTimeout(() => add2.click(), 7000);
  setTimeout(() => add2.onmouseout(), 7500);

  const flipside3 = document.getElementById('flip-side3');
  setTimeout(() => flipside3.onmouseover(), 8000);
  setTimeout(() => flipside3.click(), 8500);
  setTimeout(() => flipside3.onmouseout(), 9000);

  const add3 = document.getElementById('add3');
  setTimeout(() => add3.onmouseover(), 9500);
  setTimeout(() => add3.click(), 10000);
  setTimeout(() => add3.onmouseout(), 10500);

  const add4 = document.getElementById('add4');
  setTimeout(() => add4.onmouseover(), 11000);
  setTimeout(() => add4.click(), 11500);
  setTimeout(() => add4.onmouseout(), 12000);

  setTimeout(() => finalize(), 12500);
};

const finalize = function(){
  const check = document.getElementById('gen-stack');
  check.onmouseover();
  setTimeout(() => check.click(), 500);
  setTimeout(() => check.onmouseout(), 1000);


  setTimeout(() => {
    const yourTurn = document.getElementById('your-turn');
    yourTurn.classList.remove('hidden');
    yourTurn.classList.add('appear');
  }, 2500);

  setTimeout(() => {
    const skip = document.getElementById('skip');
    skip.classList.add('hidden');
    const replay = document.getElementById('replay');
    replay.classList.remove('hidden');
  }, 3000);

};

module.exports = demo;
