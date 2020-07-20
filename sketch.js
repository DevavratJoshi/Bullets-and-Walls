var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1500,400);
  speed = random(223, 321);
  weight = random(30, 52);
  bullet = createSprite(200, 200, 50, 50);
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
}

function draw() {
  background(255,255,255); 
  console.log("lol")
  if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
 if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}
else if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
else if(damage>10 && damage<180)
    {
      bullet.shapeColor=color(255,0,0);
    }
  }
  drawSprites();
}
function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}