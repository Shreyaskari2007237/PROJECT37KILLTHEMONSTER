class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.fly= Constraint.create(options);
        World.add(world, this.fly);
    }


      display(){
       if(this.fly.bodyA){


            var pointA = this.fly.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
}
        
    }
    
    fly(){
        this.fly.bodyA=null;
    }
}