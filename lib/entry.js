const Card = require('./card');

document.addEventListener("DOMContentLoaded", () => {
  const targetCanvas = document.getElementById('target-canvas');

  targetCanvas.width = 300;
  targetCanvas.height = 300;
  const targetCtx = targetCanvas.getContext('2d');

  const canvas1 = document.getElementById('canvas-1');
  canvas1.width = 300;
  canvas1.height = 300;
  const ctx1 = canvas1.getContext('2d');
  const card1 = new Card(ctx1, [285,75], [75, 195], [105, 75], [225, 285], 1);

  const canvas2=document.getElementById('canvas-2');
  canvas2.width = 300;
  canvas2.height = 300;
  const ctx2 = canvas2.getContext('2d');
  const card2 = new Card(ctx2, [285,75], [75, 195], [105, 75], [225, 285], 2);

  const canvas3=document.getElementById('canvas-3');
  canvas3.width = 300;
  canvas3.height = 300;
  const ctx3 = canvas3.getContext('2d');
  const card3 = new Card(ctx3, [75, 195], [285,75], [225, 285], [105, 75], 3);

  const canvas4=document.getElementById('canvas-4');
  canvas4.width = 300;
  canvas4.height = 300;
  const ctx4 = canvas4.getContext('2d');
  const card4 = new Card(ctx4, [75, 195], [285,75], [225, 285], [105, 75], 4);

  card1.rotateCounter();
  card2.rotateClock();
  card3.flipSide();



});
