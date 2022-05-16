// You could have multiple flags like: start, launch to indicate the state of the game.

//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.


 
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
var ground1
var ball

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1580,1000)
    engine = Engine.create()
    world = engine.world
    Engine.run(engine)

    ground1=new Ground(790,1000,1580,50)
    ball =new CanonBall(700,500,100)
}


function draw() {
    
   ground1.display()
   ball.display()
}


function keyReleased() {
    // Call the shoot method for the cannon.
}