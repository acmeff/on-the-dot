const Card = require('./card');
const Target = require('./target_pattern');
const Stack = require('./stack');

document.addEventListener("DOMContentLoaded", () => {
  const targetCanvas = document.getElementById('target-canvas');

  targetCanvas.width = 300;
  targetCanvas.height = 300;
  const targetCtx = targetCanvas.getContext('2d');

  const stackCanvas = document.getElementById('stack');
  stackCanvas.width = 300;
  stackCanvas.height = 300;
  const stackCtx = stackCanvas.getContext('2d');

  const canvas1 = document.getElementById('canvas-1');
  canvas1.width = 300;
  canvas1.height = 300;
  const ctx1 = canvas1.getContext('2d');
  const card1 = new Card(ctx1, canvas1, [285,75], [75, 195], [105, 75], [225, 285], 1);

  const canvas2=document.getElementById('canvas-2');
  canvas2.width = 300;
  canvas2.height = 300;
  const ctx2 = canvas2.getContext('2d');
  const card2 = new Card(ctx2, canvas2, [15, 225], [225, 105], [105, 75], [225, 285], 2);

  const canvas3=document.getElementById('canvas-3');
  canvas3.width = 300;
  canvas3.height = 300;
  const ctx3 = canvas3.getContext('2d');
  const card3 = new Card(ctx3, canvas3, [75, 195], [285,75], [225, 285], [105, 75], 3);

  const canvas4=document.getElementById('canvas-4');
  canvas4.width = 300;
  canvas4.height = 300;
  const ctx4 = canvas4.getContext('2d');
  const card4 = new Card(ctx4, canvas4, [225, 105], [15, 225], [225, 285], [105, 75], 4);

  const target = new Target(card1, card2, card3, card4, targetCtx, targetCanvas);

  const go = document.getElementById('gen-stack');

  go.onclick = () => new Stack(stackCtx, stackCanvas, card1, card2, card3, card4);

  const clear = document.getElementById('clear-stack');

  clear.onclick = () => stackCtx.clearRect(0,0,300,300);
});
