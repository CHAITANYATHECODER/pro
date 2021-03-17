var bird;
var birdAnimation;
var background;
var bc

function preload(){
bc = loadImage("sprites/background.png")
birdAnimation = loadAnimation("sprites/bird-animation/bird1.png","sprites/bird-animation/bird2.png","sprites/bird-animation/bird3.png","sprites/bird-animation/bird4.png","sprites/bird-animation/bird5.png","sprites/bird-animation/bird6.png","sprites/bird-animation/bird7.png","sprites/bird-animation/bird8.png");

}
function setup() {
  createCanvas(windowWidth,windowHeight);

 background = createSprite(width/2,height/2,width,height)
background.addImage(bc);
background.scale=5;

bird = createSprite(180,height/2,20,20)
bird.addAnimation("fly", birdAnimation);
bird.scale = 0.3
}



function draw() {

  if (background.x < 0){

    background.x = background.width/2;

  }

  drawSprites();

 
}













