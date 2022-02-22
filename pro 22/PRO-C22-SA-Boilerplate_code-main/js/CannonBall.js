class CannonBall{

    contructor(x,y){
      this.r =20;
      var options = {
      
        isStatic:true

      }
      this.body = Bodies.circle(x,y,this.r,options) 
      console.log(this.body); 
      this.image = loadImage("assets/cannonball.png");
      World.add(world,this.body)
     
    }
    display(){
   
    push();
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.r)



    pop();   



    }
    shoot(){
  var shootAngle= cannon.angle-28;
  shootAngle= shootAngle*(3.14/180);
  var velocity = p5.Vector.fromAngle(shootAngle);
  velocity.mult(0.5);
  Matter.Body.setStatic(this.body,false);
  Matter.Body.setVelocity(this.body,{
  x:velocity.x *(180/3.14),
  y:velocity.y *(180/3.14)


})




    }
}