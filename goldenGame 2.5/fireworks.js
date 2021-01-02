class Fireworks {
    constructor(x,y){
      var options= {
          restitution: 0,
          density: 0.2,
          friction: 0.2,
          isStatic: true
      }

     this.body = Bodies.circle(x,y, 30,options);
     this.radius = 30 ; 
     this.image = loadImage("images/heart lives2.jpg");
     World.add(world,this.body);

    }
    
 
  display()
  {
   //var angle = this.body.angle;
   push();
   translate(this.body.position.x,this.body.position.y);
   //rotate(angle);
   if(keyIsDown(LEFT_ARROW))
    {
     //Body.rotate(this.body,-30);
     this.body.position.x -= 7;
    }
    if(keyIsDown(RIGHT_ARROW))
    {
     //Body.rotate(this.body, 30); 
     this.body.position.x += 7;
    }

   //tint(255,0)
   imageMode(CENTER);
   image(this.image,0,0,70,70);
   pop();
   
  }
}