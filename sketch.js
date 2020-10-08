var thickness,wall;
var bullet, speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet=createSprite(50,200,50,10);
  bullet.shapeColor="white";
  bullet .velocityX=speed;
  
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeCoLor=color(225);
  
 }
function draw() {
  background(0,0,0);  
  
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
   if(damage>10)
   {
     wall.shapeColor="red";
   }
   if(damage<10)
   {
     wall.shapeColor="green";
   }
  }
  
  hascollided(bullet,wall);
    drawSprites();
}
function hascollided(walll,bulletl){
bulletRightEdge=bulletl.x+bulletl.width;
wallLeftEdge=walll.x;
if(bulletRightEdge<=wallLeftEdge){
  return true;
}
return false;
}
