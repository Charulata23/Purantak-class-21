var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  gameObject1 = createSprite(200,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(300,100,50,50);
  gameObject1.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching( movingRect, gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  drawSprites();
}
function isTouching( object1, object2){
    if (object1.x -  object2 <  object2 + object1.width/2
      &&  object2 - object1.x <  object2.width/2 + object1.width/2
      && object1.y - object2.y <  object2.height/2 + object1.height/2
      &&  object2.y - object1.y <  object2.height/2 + object1.height/2) {
   return true;
  }
  else {
    return false;
  } 
}
