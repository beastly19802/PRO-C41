const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world

var frameNumber = 1

var walking1,walking2,walking3,walking4,walking5,walking6,walking7,walking8
var umbrella

var drop1,drop2,drop3,drop4,drop5,drop6,drop7,drop8,drop9,drop10,drop11,drop12,drop13,drop14,drop15,drop16,drop17,drop18,drop19,drop20

function preload(){
    walking1 = loadImage("Walking Frame/walking_1.png")
    walking2 = loadImage("Walking Frame/walking_2.png")
    walking3 = loadImage("Walking Frame/walking_3.png")
    walking4 = loadImage("Walking Frame/walking_4.png")
    walking5 = loadImage("Walking Frame/walking_5.png")
    walking6 = loadImage("Walking Frame/walking_6.png")
    walking7 = loadImage("Walking Frame/walking_7.png")
    walking8 = loadImage("Walking Frame/walking_8.png")
}

function setup(){
   var canvas = createCanvas(400,800)
   engine = Engine.create()
   world = engine.world
   umbrella = new Umbrella(200,500)
}

function draw(){
    Engine.update(engine)
    background(0)
    if(frameCount%10===0) {
        umbrellaCreatedFrame = frameCount
        switch(frameNumber) {
            case 1: umbrella.addImage(walking1)
            frameNumber+=1
            break;
            
            case 2: umbrella.addImage(walking2)
            frameNumber+=1;
            break;

            case 3: umbrella.addImage(walking3)
            frameNumber+=1
            break;

            case 4: umbrella.addImage(walking4)
            frameNumber+=1;
            break;

            case 5: umbrella.addImage(walking5)
            frameNumber+=1;
            break;

            case 6: umbrella.addImage(walking6)
            frameNumber+=1;
            break;

            case 7: umbrella.addImage(walking7)
            frameNumber+=1;
            break;

            case 8: umbrella.addImage(walking8)
            frameNumber+=1;
            break;
        }
    }
    umbrella.display()

}   