var towerImg, tower;
var doorImg,door,doorsGroup;
var climber, climberImg,climbersGroup;
var ghost, ghostImg;
var invisibleBlock,invisibleBlockGroup;
var gameState="play";
var spookySound;

function preload(){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
   spookySound=loadSound("spooky.wav");
}





function setup(){
  createCanvas(600,600);
  
  
 tower=createSprite(300,300,50,50);
  tower.addImage("tower",towerImg);
  tower.y=tower.height/2;
  tower.velocityY=2;
  
  ghost=createSprite(200,100,30,30);
  ghost.addImage("bhoot",ghostImg);
  ghost.scale=0.3;
  
  
  doorsGroup=new Group();
  climbersGroup=new Group();
  invisibleBlockGroup=new Group();
}






function draw(){
  background(0);
  
  //spookySound.loop();
  
  if(gameState==="play"){
   if(tower.y>600){
    tower.y=tower.height/2;
    
  }
  
  
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
  }
  
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }
  
  if(keyDown("space")){
    ghost.velocityY=-5;
  
  }
  
  
  ghost.velocityY=ghost.velocityY+0.8;
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  
  spawnDoors();
    if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
      ghost.destroy();
      gameState="end";
    }
  }
  
  if(gameState==="end"){
    textSize(30);
    fill("blue");
    text("GameOver",230,250);
    
  }
  
  drawSprites();
  
}

function spawnDoors(){
if(frameCount%230===0){
  door=createSprite(200,-50,30,30);
  door.addImage("door",doorImg);
  door.x=Math.round(random(120,400));
  door.velocityY=2;
  door.lifetime=300;
  doorsGroup.add(door);
  
  
  climber=createSprite(200,10,30,30);
  climber.addImage("climb",climberImg);
  climber.x=door.x;
  climber.velocityY=2;
  climber.lifetime=300;
  climbersGroup.add(climber);
  
  ghost.depth=door.depth;
  ghost.depth=ghost.depth+1;
  
  invisibleBlock=createSprite(200,15,30,2);
  invisibleBlock.x=door.x;
  invisibleBlock.velocityY=2;
  invisibleBlock.lifetime=300;
  invisibleBlockGroup.add(invisibleBlock);
  
}
  
  
  
  
   }















