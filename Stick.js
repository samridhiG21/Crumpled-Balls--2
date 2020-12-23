class Stick{
    constructor(x, y, width, height) {

        var options = {
          isStatic : true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("dustbingreen.png");
        this.image.height = 8;
        
        World.add(world, this.body);
      }

      display(){
        var pos =this.body.position;
        push()
            translate(pos.x, pos.y);
            imageMode(CENTER);
            if(pos.x === 867.7){
              image(this.image,0,0,this.width,150);
            }
		      	image(this.image,0,0,this.width,this.height);
        pop();
      }
    }