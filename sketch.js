
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ball,groundObj,leftSide,rightSide;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	

	}


	ball =Bodies.circle(20,300,30,ball_options)
	World.add(world,ball)

	groundObj = new Ground(400,400,800,10)
	leftSide = new Ground(500,360,10,80)
	rightSide = new Ground(700,360,10,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  keyPressed()
  
  ellipse(ball.position.x,ball.position.y,30,30)
  groundObj.display()
  leftSide.display()
  rightSide.display()
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:10,y:-10})
	}
}


