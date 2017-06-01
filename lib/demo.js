const demo = function(){
  setTimeout(() => text(), 1000);

};

const text = function (){

  setTimeout(() => {
    const one = document.getElementById('one');
    one.classList.remove('hidden');
    one.classList.add('appear');
  }, 500);

  setTimeout(() => {
    const two = document.getElementById('two');
    two.classList.remove('hidden');
    two.classList.add('appear');
  }, 2500);

  setTimeout(() => {
    const three = document.getElementById('three');
    three.classList.remove('hidden');
    three.classList.add('appear');
  }, 4000);

  setTimeout(() => {
    const four = document.getElementById('four');
    four.classList.remove('hidden');
    four.classList.add('appear');
  }, 5500);

  setTimeout(() => {
    const five = document.getElementById('five');
    five.classList.remove('hidden');
    five.classList.add('appear');
  }, 7000);


  setTimeout(() => {
    const six = document.getElementById('six');
    six.classList.remove('hidden');
    six.classList.add('appear');
  }, 9500);

  setTimeout(() => cards(), 10500);

};

const cards = function (){
  const flip1 = document.getElementById('flip-up1');
  flip1.onmouseover();
  setTimeout(() => flip1.click(), 1000);
  setTimeout(() => flip1.onmouseout(), 2000);

  const add1 = document.getElementById('add1');
  setTimeout(() => add1.onmouseover(), 2500);
  setTimeout(() => add1.click(), 3000);
  setTimeout(() => add1.onmouseout(), 4000);

  const flip2 = document.getElementById('flip-up2');
  setTimeout(() => flip2.onmouseover(), 4500);
  setTimeout(() => flip2.click(), 5000);
  setTimeout(() => flip2.onmouseout(), 6000);

  const flipside2 = document.getElementById('flip-side2');
  setTimeout(() => flipside2.onmouseover(), 6500);
  setTimeout(() => flipside2.click(), 7000);
  setTimeout(() => flipside2.onmouseout(), 8000);

  const add2 = document.getElementById('add2');
  setTimeout(() => add2.onmouseover(), 8500);
  setTimeout(() => add2.click(), 9000);
  setTimeout(() => add2.onmouseout(), 9500);

  const flipside3 = document.getElementById('flip-side3');
  setTimeout(() => flipside3.onmouseover(), 10000);
  setTimeout(() => flipside3.click(), 10500);
  setTimeout(() => flipside3.onmouseout(), 11000);

  const add3 = document.getElementById('add3');
  setTimeout(() => add3.onmouseover(), 11500);
  setTimeout(() => add3.click(), 12000);
  setTimeout(() => add3.onmouseout(), 12500);

  const add4 = document.getElementById('add4');
  setTimeout(() => add4.onmouseover(), 13000);
  setTimeout(() => add4.click(), 13500);
  setTimeout(() => add4.onmouseout(), 14000);
};

module.exports = demo;
