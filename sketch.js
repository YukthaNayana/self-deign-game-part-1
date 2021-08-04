var land;
var player;

function setup() {
  createCanvas(windowWidth,windowHeight);
  land=createSprite(width/2,height/2,windowWidth+500,windowHeight+500);
  player=createSprite(width/2,height/1.25,50,50);
 player.shapeColor="black";
}

function draw() {
  background("red");
  drawSprites();  
fill("blue");
  text(land.x+","+land.y,100,100);
textSize(200);
  if(keyDown(LEFT_ARROW)){
    land.x+=4;
  }
   if(keyDown(RIGHT_ARROW)){
    land.x+=-4;
  }
  
   if(keyDown(UP_ARROW)){
    land.y+=4;
  }
   if(keyDown(DOWN_ARROW)){
    land.y+=-4;
  }
if (land.x<=-3){
  console.log("player will fall right");
  text ("you will fall out of land",200,500);
  textSize(100);
  
}
if (land.x>=990){
  console.log("player will fall left");
  text ("you will fall out of land",200,500);
  textSize(100);
} 
if (land.y>=915){
  console.log("player will fall front");
  text ("you will fall out of land",200,500);
  textSize(100);
}
if (land.y<=-23){
  console.log("player will fall back");
  text ("you will fall out of land",200,500);
  textSize(100);
} 

}