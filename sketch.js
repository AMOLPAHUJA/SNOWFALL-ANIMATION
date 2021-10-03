const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg
var engine;
var world;
var snow1;

function preload() {

  bgImg = loadImage("snow3.jpg")



}


function setup() {
  createCanvas(1800, 1000);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;


  snow1=new Snow(random(100,1700),-10,13)










}

function draw() {
  background(bgImg);
  Engine.update(engine);

  snow1.display();


  drawSprites();
}