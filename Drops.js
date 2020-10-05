class Drops{
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 0.1
        }
        this.x = x
        this.y = y
        this.r = r
        
        this.body=Bodies.circle(this.x = x,this.y = y, this.r,options)
        World.add(world,this.body)
    }
    display() {
        var angle = this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        pop()
    }
    reposition(){
        if (this.y > 800) {
            this.y = -1
        }
    }
}