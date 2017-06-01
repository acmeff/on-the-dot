const demo = function(){

  const flip1 = document.getElementById('flip-up1');
  flip1.onmouseover();
  setTimeout(() => flip1.click(), 1000);
  setTimeout(() => flip1.onmouseout(), 2000);

  const add1 = document.getElementById('add1');
  setTimeout(() => add1.onmouseover(), 2500);
  setTimeout(() => add1.click(), 3000);
  setTimeout(() => add1.onmouseout(), 4000);
};


module.exports = demo;
