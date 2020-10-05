class Umbrella{
    constructor(x,y,w,h) {
        this.x = x
        this.y = y
        this.w = w
        this.h=h
        var options = {
            isStatic:true,
            friction:0
        }
        this.body=Bodies.rectangle(this.x=x,this.y=y,this.w=w,this.h=h)
        World.add(world,this.body)
        this.image = loadAnimation("Walking Frame/walking_1.png")
    }
    display() {
        var pos = this.umbrella.position;
        imageMode(CENTER)
        image(this.animation,pos.x,pos.y+70,300,300)
    }
}