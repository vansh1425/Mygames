var ironman,img1,img2,img3,img4,img5,img6,img7;
var backgroundImg,b2,planet;
var laser,laser1,lai1,lai2,lai3,laserGroup,laserGroup1,laserGroup2;
var thanoes,t1,t2,t3,t4;
var obstaclesGroup,spaceShipGroup,powerGroup,asteroid,spaceship,power;
var repulsorsound;
var ground;
var gameState = "serve";
function preload(){
img1 =loadImage("ironman.png");
img2 = loadImage("ironman 2.png");
img3 =loadImage("ironman3.png");
backgroundImg = loadImage("space.jpeg");
lai1 = loadImage("laser.png");
img4 = loadImage("ironman7.png");
lai2=loadImage("laser2.png");
img5 = loadImage("ironman5.png");
t1 =loadImage("thanoes.png");
t2 =loadImage("thanoes1.png");
img6 = loadImage("ironman1.png");
t3 = loadImage("thanoes2.png");
t4 = loadImage("thanos.png");
asteroid = loadImage("asteroid.png");
spaceship = loadImage("spaceship.png");
power = loadImage("power.png");
img7 = loadImage("ironman 1.png");
lai3 = loadImage("lase3.png");
repulsorsound = loadSound("repulsor sound.mp3");
}
function setup() {
  createCanvas(1000,500);
  ground = createSprite(750,120);
  ground.addImage(backgroundImg);
  ground.scale=5.4;
 //planet = createSprite(200,350);
 //planet.addImage(b2)
 //planet.scale=2;
  ironman =createSprite(150, 370, 50, 50);
 
 thanoes =createSprite(650,380,50,50);
 thanoes.addImage(t1);
 
 
 laserGroup = new Group();
 laserGroup1 = new Group();
 laserGroup2 =new Group();
 obstaclesGroup =new Group();
 spaceShipGroup = new Group();
 powerGroup = new Group();
}

function draw() {
 
  if (gameState === "serve") {
    serve();
     }
   if(keyDown("U")){
     gameState="play";
     thanoes.visible=false;
      }
   
  if(gameState === "play"){
    ironman.addImage(img1);
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    ground.velocityX=-2;
    if(keyDown (UP_ARROW) ){
    ironman.y = ironman.y-5;
     ironman.addImage(img2);
  }
  else{
    ironman.addImage(img1)
  }
  if(keyDown(DOWN_ARROW)){
    ironman.y=ironman.y+5;
    ironman.addImage(img2);  
  }

   if(keyDown(RIGHT_ARROW)){
    //ironman.velocityX=2;
    ironman.x=ironman.x+5;
    ironman.addImage(img2);
    //ironman.scale=0.1;
     }
     if(keyDown(LEFT_ARROW)){
    
     ironman.x=ironman.x-5; 
     ironman.addImage(img2);
      //ironman.scale=0.1;
       }
      
       if(keyDown("space")){
         ironman.addImage(img4);
         repulsorsound.play();
       createlaser();
        
        }
       
        if(keyDown("Z")){
          repulsorsound.play();
          ironman.addImage(img5);
          createlaser1();
         
        }
        if(keyDown("X")){
          ironman.addImage(img7);
         
          createlaser2()
        }
        spawnObstacles();    
      }
  drawSprites();
}
function createlaser() {
  var laser= createSprite(100, 100, 60, 10);
  laser.addImage(lai1);
  laser.x = ironman.x+200;
  laser.y=ironman.y-70;
  
  laser.lifetime = 1;
  laserGroup.add(laser); 
  return laser;
   
}
function createlaser1() {
  var laser1= createSprite(100, 100, 60, 10);
  laser1.addImage(lai2);
  laser1.x = ironman.x+160;
  laser1.y=ironman.y-20;
  laserGroup1.add(laser1); 
  laser1.lifetime = 1;
 
  return laser1;
   
}
function createlaser2() {
  var laser2= createSprite(100, 100, 60, 10);
  laser2.addImage(lai3);
  laser2.velocityX = 3;
  laser2.x = ironman.x+100;
  laser2.y=ironman.y-80;
  laserGroup2.add(laser2); 
  laser2.lifetime = 1;
 
  return laser1;
   
}
function serve(){
 
ironman.addImage(img6);
thanoes.addImage(t3);
}
function spawnObstacles() {
  if(frameCount % 250 === 0) {
    var obstacle = createSprite(600,165,10,40);
     obstacle.addImage(asteroid);
     obstacle.scale=0.2;
      obstacle.velocityX = -5
      obstacle.y = Math.round(random(10,550));
     obstacle.lifetime = 300;
     var spaceships= createSprite(600,165,10,40);
     spaceships.addImage(spaceship);
     spaceships.scale=2;
     spaceships.velocityX = -5;
     spaceships.y = Math.round(random(1,550));
     spaceships.lifetime = 300;
     var powers = createSprite(600,165,10,40);
     powers.addImage(power);
     powers.scale=1;
     powers.velocityX = -5;
     powers.lifetime = 300;
      
      powers.y = Math.round(random(20,550));
          
   powers.depth = spaceships.depth;
     powers.depth = powers.depth+0.4;
     powers.depth = obstacle.depth;
     powers.depth = powers.depth+0.4;
      obstacle.depth = spaceships.depth;
     obstacle.depth = obstacle.depth+0.2;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
     spaceShipGroup.add(spaceships);
     powerGroup.add(powers);
}
}
