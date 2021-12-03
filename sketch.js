var naruto,narutoimg,bckgrd;
var danzo;




function preload(){
narutoimg=loadImage("player.png")
bckgrd=loadImage("gif.gif")
danzoimg=loadImage("villian.jpg")

}





function setup() {
  createCanvas(windowWidth,windowHeight);
 naruto=createSprite(70,height/2, 50, 50);
 naruto.addImage(narutoimg);
 naruto.scale=0.14

 danzo=createSprite(1200,height/2, 50, 50);
 danzo.addImage(danzoimg);
 danzo.scale=0.8









}

function draw() {
  background(bckgrd);
  
  if(keyDown(UP_ARROW)){
naruto.velocityY=-4
}

if(keyDown(DOWN_ARROW)){
  naruto.velocityY=4
  }
  


  drawSprites();
}