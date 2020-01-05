const canvas=document.querySelector('#shape');
const rotateButton=document.querySelector('#rotateBtn');
const triangleButton=document.querySelector('.triangle');

window.addEventListener('load',draw); 
function draw(e) {
  console.log("hello");
  window.canvas = document.querySelector("#shape");
  const ctx = canvas.getContext("2d");

  canvas.height=window.innerHeight;
  canvas.width=window.innerWidth;

  if (ctx) {
    drawCircle(ctx,'#45454725',216);//shadow
    drawCircle(ctx,'#454547',206);
    drawColorWheel(ctx,'#ff0000',0,Math.PI/6);// red
    drawColorWheel(ctx,'#ff7700',Math.PI/6,Math.PI/3);//orange
    drawColorWheel(ctx,'#ffff00',Math.PI/3,Math.PI/2);//yellow
    drawColorWheel(ctx,'#77ff00',Math.PI/2,2*Math.PI/3);//springGreen
    drawColorWheel(ctx,'#00ff00',2*Math.PI/3,5*Math.PI/6);//green
    drawColorWheel(ctx,'#00ff77',5*Math.PI/6,Math.PI);//turquoise
    drawColorWheel(ctx,'#00ffff',Math.PI,7*Math.PI/6);//cyan
    drawColorWheel(ctx,'#0077ff',7*Math.PI/6,4*Math.PI/3);//ocean
    drawColorWheel(ctx,'#0000ff',4*Math.PI/3,3*Math.PI/2);//blue
    drawColorWheel(ctx,'#7700ff',3*Math.PI/2,5*Math.PI/3);//violet
    drawColorWheel(ctx,'#ff00ff',5*Math.PI/3,11*Math.PI/6);//magenta
    drawColorWheel(ctx,'#ff0077',11*Math.PI/6,2*Math.PI);//rasberry
    drawCircle(ctx,'#fff',125);

    // console.log(window.innerWidth/2,window.innerHeight/2); 
  }
  positionClickButton();
  positionTriangleButton();
  e.preventDefault();
}

window.addEventListener('resize',function(e){
    const canvas=document.querySelector("#shape");   
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
    draw(e);
    e.preventDefault();
});

rotateButton.addEventListener('click',function(e){
  console.log('rotating....');
  let randomAngle=Math.floor(Math.random()*360);
  console.log(randomAngle);
  if(randomAngle==0||randomAngle==30||randomAngle==60||randomAngle==90||randomAngle==120||randomAngle==150||randomAngle==180||randomAngle==210||randomAngle==240||randomAngle==270||randomAngle==300||randomAngle==330){
    randomAngle+=1;
  }
  canvas.style.transition='transform 2s ease-in-out'
  canvas.style.transform=`rotate(${randomAngle}deg)`;
  changeBackgroundColor(randomAngle);
  e.preventDefault();
});

triangleButton.addEventListener('click',function(e){
  console.log(e.clientX+"\t"+e.clientY)
  e.preventDefault();
});

function drawColorWheel(ctx,color,startAngle,endAngle){
  ctx.beginPath();
  ctx.fillStyle=color;
  ctx.moveTo(window.innerWidth/2,window.innerHeight/2);
  ctx.lineTo(window.innerWidth/2,50)
  ctx.moveTo(window.innerWidth/2,window.innerHeight/2);
  ctx.arc(window.innerWidth/2,window.innerHeight/2,200,startAngle,endAngle);
  ctx.closePath();
  ctx.fill();
}

//function draw circle
function drawCircle(ctx,color,radius){
  // for white circle inside color wheel
  ctx.beginPath();
  ctx.fillStyle=color;
  ctx.moveTo(window.innerWidth/2,window.innerHeight/2);
  ctx.arc(window.innerWidth/2,window.innerHeight/2,radius,0,2*Math.PI);
  ctx.closePath();
  ctx.fill();
}

//positioning the button inside color wheel
function positionClickButton(){
  let x=window.innerWidth/2-70;
  let y=window.innerHeight/2-33;
  rotateButton.style.position='absolute';
  rotateButton.style.top=`${y}px`;
  rotateButton.style.left=`${x}px`;
}

//postioning the triangle inside the color wheel
function positionTriangleButton(){
  let x=window.innerWidth/2-40.7;
  let y=window.innerHeight/2-242;
  triangleButton.style.position='absolute';
  triangleButton.style.top=`${y}px`;
  triangleButton.style.left=`${x}px`;
}

//to change the background color of canvas
function changeBackgroundColor(angle){
  let color='#fff';
  if(angle>0 && angle<30){
    color='#0000ff';//blue
  }
  if(angle>30 && angle<60){
    color='#0077ff';//ocean
  }
  if(angle>60 && angle<90){
    color='#00ffff';//cyan
  }
  if(angle>90 && angle<120){
    color='#00ff77';//turquoise
  }
  if(angle>120 && angle<150){
    color='#00ff00';//green
  }
  if(angle>150 && angle<180){
    color='#77ff00';//spring green
  }
  if(angle>180 && angle<210){
    color='#ffff00';//yellow
  }
  if(angle>210 && angle<240){
    color='#ff7700';//orange
  }
  if(angle>240 && angle<270){
    color='#ff0000';//red
  }
  if(angle>270 && angle<300){
    color='#ff0077';//rasberry
  }
  if(angle>300 && angle<330){
    color='#ff00ff';//magenta
  }
  if(angle>330 && angle<360){
    color='#7700ff';//violet
  }
  document.querySelector('body').style.transitionProperty='background-color';
  document.querySelector('body').style.transitionDuration='2.5s';
  document.querySelector('body').style.background=color;
}

//clear the console window in 5 min
setInterval(function(){console.clear()},60000);