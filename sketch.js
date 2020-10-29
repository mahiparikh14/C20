var movingRect, fixedRect;
var b1, b2;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100,100,50,50);
  fixedRect = createSprite(400,200,50,80);
  movingRect.shapeColor="crimson"
  fixedRect.shapeColor = "crimson"

  b1 = createSprite(0,100,50,50);
  b2 = createSprite(800, 100,55,55)
  b1.shapeColor = "yellow"
b2.shapeColor = "aqua";
b1.velocityX = 5;
b2.velocityX = -5;
}

function draw() {
  background(0);

  console.log(movingRect.x - fixedRect.x);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (b1.x - b2.x < b2.width/2 + b1.width/2
    && b2.x - b1.x < b2.width/2 + b1.width/2) {
      b1.velocityX = b1.velocityX * (-1);
      b2.velocityX = b2.velocityX * (-1);
}
if (b1.y - b2.y < b2.height/2 + b1.height/2
  && b2.y - b1.y < b2.height/2 + b1.height/2){
    b1.velocityY = b1.velocityY * (-1);
    b2.velocityY = b2.velocityY * (-1);
}


  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2&&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "lightblue"
    fixedRect.shapeColor = "lightblue"
  }else{
    movingRect.shapeColor="crimson"
  fixedRect.shapeColor = "crimson"
  }

  drawSprites();
}   