const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var drops=[];
var maxDrops=50;

function setup() {
  var canvas=createCanvas(800,720);
  

  engine = Engine.create();
	world = engine.world;
  
  ground=new Ground(0,700,1700,20);
  
  if(frameCount%60===0){
    for(var i=0;i<maxDrops;i++){
    drops.push(new Ball(random(0,700),random(0,0)));
    }
  }


  for (var i = 50; i < 800; i=i+80) {
    var balls  = createSprite(i, 50,20,20);
    var balls2 = createSprite(i,150,20,20);
    var balls3 = createSprite(i,250,20,20);
    var balls4 = createSprite(i,350,20,20);
  }

  var line1=createSprite(10,545,25,300);
  var line2=createSprite(160,545,25,300);
  var line3=createSprite(310,545,25,300);
  var line4=createSprite(460,545,25,300);
  var line5=createSprite(610,545,25,300);
  var line6=createSprite(760,545,25,300);

  Engine.run(engine);
}

function draw() {
  background(0);
  rectMode(CENTER);
  
 ground.display(); 

 for(var i=0;i<maxDrops;i++){
  drops[i].showdrop();
  drops[i].updateY()
 }
 
  drawSprites();
}