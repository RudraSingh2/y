var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, boxSprite, box1Sprite, box2Sprite,boxBody,box1Body,box2Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	boxSprite = createSprite(400,650,200,20);
	boxSprite.shapeColor="red";

	box1Sprite = createSprite(290,600,20,120);
	box1Sprite.shapeColor="red";

	box2Sprite = createSprite(500,600,20,120);
	box2Sprite.shapeColor="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)




	engine = Engine.create();
	world = engine.world;

	boxBody = Bodies.rectangle(400, 640 , 200 ,20, { restitution:2, isStatic:true});
	World.add(world, boxBody);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:false});
	World.add(world, packageBody);

	

	
	
  }
}



