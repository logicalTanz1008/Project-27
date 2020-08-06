class Bob {
    constructor(x, y, width, height){
        var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
        }
        this.body = Matter.Bodies.circle(x, y, 6);
        this.width = width;
        this.height = height;
    
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(6);
        ellipse(this.body.position.x, this.body.position.y, 20, 20);
        pop();
      }
    };