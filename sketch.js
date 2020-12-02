// namespacing
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,word,body1,ground,body2
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  var boptions= {restitutiton:1}
  body1=Bodies.rectangle(100,100,20,20,boptions)
  World.add(world,body1);
  //jSON format
  var options= {isStatic:true}
  ground=Bodies.rectangle(200,380,500,10,options)
  World.add(world,ground)
  body2=Bodies.circle(200,30,20,boptions)
  World.add(world,body2);
}

function draw() {
  background("yellow");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(body1.position.x,body1.position.y,20,20)
  rect(ground.position.x,ground.position.y,500,10)
  ellipseMode(RADIUS);
  ellipse(body2.position.x,body2.position.y,20)
}