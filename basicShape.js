window.addEventListener('load',draw); 
function draw(e) {
  console.log("hello");
  window.canvas = document.querySelector("#shape");
  const ctx = canvas.getContext("2d");

  canvas.height=window.innerHeight;
  canvas.width=window.innerWidth;

  if (ctx) {
    //red
    ctx.beginPath();
    ctx.fillStyle='#ff0000';
    ctx.moveTo(500,250);
    ctx.lineTo(500,50)
    ctx.moveTo(500,250);
    ctx.arc(500,250,200,0,Math.PI/6);
    ctx.closePath();
    ctx.fill();

    //orange
    ctx.beginPath();
    ctx.fillStyle='#ff7700';
    ctx.moveTo(500,250);
    ctx.lineTo(500,50)
    ctx.moveTo(500,250);
    ctx.arc(500,250,200,Math.PI/6,Math.PI/3);
    ctx.closePath();
    ctx.fill();

    //yellow
    ctx.beginPath();
    ctx.fillStyle='#ffff00';
    ctx.moveTo(500,250);
    ctx.lineTo(500,50)
    ctx.moveTo(500,250);
    ctx.arc(500,250,200,Math.PI/3,Math.PI/2);
    ctx.closePath();
    ctx.fill();
    
    //spring green
    ctx.beginPath();
    ctx.fillStyle='#77ff00';
    ctx.moveTo(500,250);
    ctx.lineTo(500,50)
    ctx.moveTo(500,250);
    ctx.arc(500,250,200,Math.PI/2,2*Math.PI/3);
    ctx.closePath();
    ctx.fill();

    //green
    ctx.beginPath();
    ctx.fillStyle='#00ff00';
    ctx.moveTo(500,250);
    ctx.lineTo(500,50)
    ctx.moveTo(500,250);
    ctx.arc(500,250,200,2*Math.PI/3,5*Math.PI/6);
    ctx.closePath();
    ctx.fill();

    //turqoise
    ctx.beginPath();
    ctx.fillStyle='#00ff77';
    ctx.moveTo(500,250);
    ctx.lineTo(500,50)
    ctx.moveTo(500,250);
    ctx.arc(500,250,200,5*Math.PI/6,Math.PI);
    ctx.closePath();
    ctx.fill();

    //cyan
    ctx.beginPath();
    ctx.fillStyle='#00ffff';
    ctx.moveTo(500,250);
    ctx.lineTo(500,50)
    ctx.moveTo(500,250);
    ctx.arc(500,250,200,Math.PI,7*Math.PI/6);
    ctx.closePath();
    ctx.fill();

    //ocean
    ctx.beginPath();
    ctx.fillStyle='#0077ff';
    ctx.moveTo(500,250);
    ctx.lineTo(500,50)
    ctx.moveTo(500,250);
    ctx.arc(500,250,200,7*Math.PI/6,4*Math.PI/3);
    ctx.closePath();
    ctx.fill();
    
    //blue
    ctx.beginPath();
    ctx.fillStyle='#0000ff';
    ctx.moveTo(500,250);
    ctx.lineTo(500,50)
    ctx.moveTo(500,250);
    ctx.arc(500,250,200,4*Math.PI/3,3*Math.PI/2);
    ctx.closePath();
    ctx.fill();

    //violet
    ctx.beginPath();
    ctx.fillStyle='#7700ff'
    ctx.moveTo(500,250);
    ctx.lineTo(500,50)
    ctx.moveTo(500,250);
    ctx.arc(500,250,200,3*Math.PI/2,5*Math.PI/3);
    ctx.closePath();
    ctx.fill();

    //magenta
    ctx.beginPath();
    ctx.fillStyle='#ff00ff'
    ctx.moveTo(500,250);
    ctx.lineTo(500,50)
    ctx.moveTo(500,250);
    ctx.arc(500,250,200,5*Math.PI/3,11*Math.PI/6);
    ctx.closePath();
    ctx.fill();

    //raspberry
    ctx.beginPath();
    ctx.fillStyle='#ff0077'
    ctx.moveTo(500,250);
    ctx.lineTo(500,50)
    ctx.moveTo(500,250);
    ctx.arc(500,250,200,11*Math.PI/6,2*Math.PI);
    ctx.closePath();
    ctx.fill();

  }
  

  e.preventDefault();
}



window.addEventListener('resize',function(e){
    const canvas = document.querySelector("#shape");     
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
    e.preventDefault();
});


// const colors=[
//   {blue:'#0000ff'},
//   {ocean:'#0077ff'},
//   {cyan:'#00ffff'},
//   {turquoise:'#00ff77'},
//   {green:'#00ff00'},
//   {springGreen:'#77ff00'},
//   {yellow:'#ffff00'},
//   {orange:'#ff7700'},
//   {red:'#ff0000'}, 
//   {rasberry:'#ff0077'},
//   {magenta:'#ff00ff'},
//   {violet:'#7700ff'}
// ];
  

/*optimsating code but getting error
if (ctx) {
  for(let i=0;i<colors.length;i++){
   ctx.beginPath();
   ctx.fillStyle=Object.values(colors[i]);
   ctx.moveTo(500,250);
   ctx.lineTo(500,50)
   ctx.moveTo(500,250);
   for(let j=i;j<2*Math.PI;j+=Math.PI/6){
     ctx.arc(500,250,200,j,j+Math.PI/6);
  }
  ctx.closePath();
  ctx.fill();
 }
*/