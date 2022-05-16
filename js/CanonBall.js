class CanonBall {
  constructor(x, y, r) {
    var options = {
    /*  "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    */
      isStatic:false
    }
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body)
  };

  display(){
    var canonballpos=this.body.position

    console.log(canonballpos)
    push()
    translate(canonballpos.x,canonballpos.y)      
    fill("green")
    ellipse(0,0,this.r,this.r)

  pop()
  };
};
