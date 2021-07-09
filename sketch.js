var ironman,img1,img2,img3,img4,img5,img6,img7;
var I1,I2,gameoverImg,gameover;
var backgroundImg,b2,planet;
var laser,laser1,laser2,lai1,lai2,lai3,laserGroup,laserGroup1,laserGroup2;
var thanoes,t1,t2,t3,t4;
var obstaclesGroup,asteroid,spaceship,power;
var repulsorsound;
var planetGroup,Moon,alienPlanet,BlackHole;
var ground;

var Score = 0;
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

alienPlanet = loadImage("planet.png");
Moon = loadImage("moon.png");
BlackHole = loadImage("blackhole.png");
I1 = loadImage("ironman 3 .png");
I2 = loadImage("ironman 4.png");
gameoverImg = loadImage("download.png");
}
function setup() {
  createCanvas(800,500);
  ground = createSprite(750,120);
  ground.addImage(backgroundImg);
  ground.scale=5.4;
  planetGroup =new Group();
  ironman =createSprite(150, 370);
  ironman.setCollider("circle",0,0,60);
  ironman.debug= false;
 thanoes =createSprite(650,380,50,50);
 thanoes.addImage(t1);
 
 gameover = createSprite(200,200);
 gameover.addImage(gameoverImg);
 gameover.visible=false;

 life = 100 ;
 laserGroup = new Group();
 laserGroup1 = new Group();
 laserGroup2 =new Group();
 obstaclesGroup =new Group();

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
    spawnPlanets(); 
    ironman.addImage(img1);

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    ground.velocityX=-(1+Score/100);
   
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
    ironman.x=ironman.x+5;
    ironman.addImage(img2);
 
     }
     if(keyDown(LEFT_ARROW)){
    
     ironman.x=ironman.x-5; 
     ironman.addImage(img2);
      
       }
       
 
      if(ironman.isTouching(obstaclesGroup)){
        life=life-1;
        obstaclesGroup.destroyEach();
        ironman.addImage(I1);
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
        
          createlaser2();
          
        }
        if(laserGroup.isTouching(obstaclesGroup)){
          obstaclesGroup.destroyEach();
          Score = Score+3;
        }
        if(laserGroup1.isTouching(obstaclesGroup)){
          obstaclesGroup.destroyEach();
          Score = Score+1;
        }
        if(laserGroup2.isTouching(obstaclesGroup)){
          obstaclesGroup.destroyEach();
          Score = Score+2;
        }
        if(life === 0){
          gameState = "end";
        }
        if(gameState=== "end"){
          ironman.addImage(I2);
          endState();
        }
        
        spawnObstacles();   
        
      }
  drawSprites();
  textSize(30);
  fill("red");
  text("Life ="+life,50,60);
  text("Score ="+Score,300,50);
}
function createlaser() {
  laser= createSprite(100, 100, 60, 10);
  laser.addImage(lai1);
  laser.x = ironman.x+200;
  laser.y=ironman.y-70;
  
  laser.lifetime = 1;
  laserGroup.add(laser); 
  return laser;
   
}
function createlaser1() {
   laser1= createSprite(100, 100, 60, 10);
  laser1.addImage(lai2);
  laser1.x = ironman.x+160;
  laser1.y=ironman.y-20;
  laserGroup1.add(laser1); 
  laser1.lifetime = 1;
 
  return laser1;
   
}
function createlaser2() {
   laser2= createSprite(100, 100, 60, 10);
  laser2.addImage(lai3);
  laser2.velocityX = 3;
  laser2.x = ironman.x+100;
  laser2.y=ironman.y-80;
  laserGroup2.add(laser2); 
  laser2.lifetime = 1;
 if(keyDown("G")){
  laser2.x=laser.x+200;
 }
  return laser1;
   
}
function serve(){
  
 Score.visible = false;
 life.visible = false;
ironman.addImage(img6);
thanoes.addImage(t3);
}

function endState(){
ground.velocityX = 0;
obstaclesGroup.setVelociiyXEach =0;
planetGroup.setVelocityXEach=0;
gameover.visible=true;
}
var obstacle;
function spawnObstacles() {
  if(frameCount % 70 === 0) {
     obstacle = createSprite(600,400);
    //obstacle.debug = true;
    obstacle.velocityX = -6;
    obstacle.setCollider("rectangle",0,0,100,160);
    obstacle.debug= false;
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(asteroid);
               obstacle.scale=0.2;
               obstacle.rotationSpeed = 3;
              break;
      case 2: obstacle.addImage(spaceship);
              break;
      case 3: obstacle.addImage(power);
              break;
      default: break;
    }
    obstacle.y=Math.round(random(50,440))
    //assign scale and lifetime to the obstacle           
    //obstacle.scale = 0.5;
    obstacle.lifetime = 800;
    obstacle.depth = ironman.depth;
    ironman.depth+=1
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
function spawnPlanets() {
  //write code here to spawn the clouds
  if (frameCount % 250 === 0) {
    var planets = createSprite(600,100,10,40);
    //obstacle.debug = true;
    planets.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: planets.addImage(alienPlanet);
              // planets.scale=0.4;
              break;
      case 2: planets.addImage(Moon);
             planets.rotationSpeed = -1;
              break;
      case 3: planets.addImage(BlackHole);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    planets.scale = 1;
    planets.lifetime = 100;
    planets .depth = ironman.depth;
    ironman.depth +=1;
    planets.depth = obstacle.depth;
    obstacle.depth+=2;
    //add each cloud to the group
    planetGroup.add(planets);
  }
  
}


