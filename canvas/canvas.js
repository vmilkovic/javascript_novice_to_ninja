const canvasElement = document.getElementById('canvas');
//dohvačanje canvasa (3-D sa WebGL)
const context = canvasElement.getContext('2d');
context.fillStyle = "#0000cc"; // a blue fill color
context.strokeStyle = "#ccc"; // a gray stroke color
context.lineWidth = 4;
//puni pravokutnik
context.fillRect(10,10,100,50);
//prazan pravokutnik
context.strokeRect(10,100,100,50);
//za nacrtati nešto (T)
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke(); //za pokrenut crtanje
//za narctiati arc od nekog radiusa od određenog pointa(200,200 (centar)) 30->radius PI*2->cijeli krug(360°)
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();
//unos texta u canvas
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);