
var wall, thickness;
var speed,weight, bullet
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
 bullet = createSprite(50,200,50,30);
  wall = createSprite(1300,200,thickness,height/2);
  bullet.velocityX = speed;
  bullet.shapeColor = "white"
  wall.shapeColor = color(80,80,80)
  thickness=random(22,83)

  
  }

function draw() {
  background(128,128,128)
  text(mouseX + "," + mouseY, 20,20)
  
  if(hasCollided(bullet, wall)) 
  {
    bullet.x = 1225
    bullet.y = 190
    bullet.velocityX = 0;
    
var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage>10)
    {
      bullet.shapeColor =color(255,0,0)
      
    }  
    
    if(damage<10)
    {
      bullet.shapeColor = color(0,255,0)
  
    }
   
    
  }
  drawSprites();
}
function hasCollided(Lbullet, Lwall){
  bulletRightEdge = Lbullet.x +Lbullet.width;
  wallLeftEdge = Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}