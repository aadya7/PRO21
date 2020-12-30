var  speed,weight,wall;
var  bullet,wall,thickness;
 

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=(30,52);

  thickness=(22,83);

  bullet=createSprite(50, 200, 50,5);  
  bullet.velocityX = speed;

  wall=createSprite(1200, 200, thickness, height/2); 
  wall.shapeColor = (230,230,230);

  
}

function draw() {
  background("black");
  bullet.velocityX = speed;

   if(hasCollide(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5  *weight*speed*speed/(thickness  *thickness  *thickness);

    } 
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
    

  hasColliode();
  drawSprites();
  }
  function hasCollide(lbullet,lwall){
    bulletRightEdge=lbullet.x + lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true
    }
    else{
      return false;
    }
   
  }