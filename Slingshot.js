class SlingShot {
    constructor(bodyA,pointB) {
      var options={
          stiffness:0.04,
          length:10,
          bodyA:bodyA,
          pointB:pointB
      }
this.pointB=pointB
this.image1=loadImage("sprites/sling1.png");
this.image2=loadImage("sprites/sling2.png");
this.image3=loadImage("sprites/sling3.png");

      this.sling=Constraint.create(options)
      World.add(world, this.sling);
    }
    attach(body){
      this.sling.bodyA=body;
    }
     Fly(){
      this.sling.bodyA=null;
    }
    display(){
      image(this.image1,200,23);
      image(this.image2,170,23);
      if(this.sling.bodyA){
      
      
      var pointA=this.sling.bodyA.position 
      var pointB=this.pointB
      push();
      strokeWeight(12);
      stroke(48,23,8);
      line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
      image(this.image3,pointA.x-18,pointA.y+20,45,15);
      line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
      pop();
    }
  };
}