const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, sling, polygon, polygon_img;

function preload() {
  polygon_img = loadImage("images/polygon.png")
}

function setup() {
  createCanvas(800,400);
  rectMode(CENTER)

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground (340,350,300,15)
  ground2 = new Ground (650,250,200,15)

  box1 = new Box (325,200,30,40)
  box2 = new Box (355,200,30,40);
  box3 = new Box (295,240,30,40)
  box4 = new Box (325,240,30,40)
  box5 = new Box (355,240,30,40)
  box6 = new Box (385,240,30,40);
  box7 = new Box (265,280,30,40)
  box8 = new Box (295,280,30,40)
  box9 = new Box (325,280,30,40)
  box10 = new Box (355,280,30,40)
  box11 = new Box (385,280,30,40)
  box12 = new Box (415,280,30,40);
  box13 = new Box (220,320,30,40)
  box14 = new Box (250,320,30,40)
  box15 = new Box (280,320,30,40)
  box16 = new Box (310,320,30,40)
  box17 = new Box (340,320,30,40)
  box18 = new Box (370,320,30,40)
  box19 = new Box (400,320,30,40)
  box20 = new Box (430,320,30,40)
  box21 = new Box (460,320,30,40);

  box22 = new Box (635,155,30,40)
  box23 = new Box (665,155,30,40);
  box24 = new Box (605,185,30,40)
  box25 = new Box (635,185,30,40)
  box26 = new Box (665,185,30,40)
  box27 = new Box (695,185,30,40);
  box28 = new Box (575,215,30,40)
  box29 = new Box (605,215,30,40)
  box30 = new Box (635,215,30,40)
  box31 = new Box (665,215,30,40)
  box32 = new Box (695,215,30,40)
  box33 = new Box (725,215,30,40);

  polygon = Bodies.circle(100,200,20);
  World.add(world,polygon);
  sling = new Sling (this.polygon,{x:100,y:200})
}

function draw() {
  background("black");  
  Engine.update(engine)

  //text(mouseX+","+mouseY,mouseX,mouseY)

  ground1.display();
  ground2.display();

  fill("orange")
  box1.display()
  box2.display();
  fill("lightblue")
  box3.display()
  box4.display()
  box5.display()
  box6.display();
  fill("green")
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display();
  fill("yellow")
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display();

  fill("lightblue")
  box22.display()
  box23.display();
  fill("yellow")
  box24.display()
  box25.display()
  box26.display()
  box27.display();
  fill("orange")
  box28.display()
  box29.display()
  box30.display()
  box31.display()
  box32.display()
  box33.display();

  sling.display();

  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY})
}

function mouseReleased() {
  sling.fly();
}