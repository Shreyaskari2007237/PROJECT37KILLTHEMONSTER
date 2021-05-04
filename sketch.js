const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gamingBackground2;

var ground;
var hero;
var fly;

function preload() {
//preload the images here
gamingBackground2=loadImage("sprites/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  // create sprites here
  ground=new Ground(310,600,2000,20);
  hero=new Hero(302,500,400)
  fly= new Fly(hero.body,{x:300, y:500});

  Engine.run(engine);
}

function draw() {
  background(gamingBackground2);
  text(mouseX + ',' + mouseY, 30, 45);
  Engine.update(engine);

  ground.display();
 hero.display();
  fly.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  Fly.fly();
}

