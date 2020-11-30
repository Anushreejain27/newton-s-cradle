
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   stick1=new stick(400,100,400,40) 
   ball1=new ball(400,400,35,35)
	ball2=new ball(475,400,35,35)
	ball3=new ball(325,400,35,35)
	ball4=new ball(250,400,35,35)
	ball5=new ball(550,400,35,35)

  chain1=new chain(ball1.body,{x:400,y:100})
  chain2=new chain(ball2.body,{x:475,y:100})
  chain3=new chain(ball3.body,{x:325,y:100})
  chain4=new chain(ball4.body,{x:250,y:100})
  chain5=new chain(ball5.body,{x:550,y:100})






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");


 stick1.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display()
 chain1.display()
 chain2.display()
 chain3.display()
 chain4.display()
 chain5.display()
 
 
 
 
keyPressed();




fill("white")
textSize(40)
stroke("cyan")
strokeWeight(4)
text("Press the up arrow key",200,550)
text("then the down arrow key",190,600)




  
  drawSprites();
 
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball4.body, ball4.body.position, {x:-5,y:-2});
     

  }
}





