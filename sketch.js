
function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  background(0);
  //ball position x y 
  let x;
  //ramdom color of the ball
  let bcolor = color(random(0,255),random(0,255),random(0,255));
  //direction and demention, some of the lines are from the example we did in class
  
  let d = random(10,100);
  fill(bcolor);
  let xdirect = random(-400,400);
  let ydirect = random(-400,400);
 
  if (xdirect>=400 || xdirect <=0){
    xdirect = xdirect * -1;}
    else if (ydirect>=400 || ydirect <=0){
    ydirect = ydirect * -1;}
  circle(xdirect,ydirect,d);
  xdirect++;
  ydirect++;
  
  
  
}