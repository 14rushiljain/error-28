
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world;
var boy,stone,tree;
var platform;
var boyImg,treeImg,stoneImg;

function preload()
{
	boyImg = loadImage("sprites/boy.png");
}

function setup() {
	var canvas = createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,200,20,20);
	boy.addImage(boy.png);
	ground = new Ground(600,height,1200,20);
	platform = new Ground(150, 305, 300, 170);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  boy.display();
  ground.display();
  platform.display();
	
  
 
}



