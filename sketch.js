
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2,bobObject3,bobObject4;
var roof,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(300,400,30,30);
	bobObject2 = new Bob(360,400,30,30);
	bobObject3 = new Bob(420,400,30,30);
	bobObject4 = new Bob(480,400,30,30);
	bobObject5 = new Bob(540,400,30,30);
 
	roof = new rope1 (420, 100, 350, 30);
	rope1 = new Rope(bobObject1.body,roof.body,-60,0);

	


	Engine.run(engine);
  
}


function draw() { 


rectMode(CENTER);
background(0);
roof.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
rope1.display();
drawSprites();
 
}



