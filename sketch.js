const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var man_image;
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];
var thunder1,thunder2,thuder3,thunder4;
var umbrella;

function preload(){
    man_image = loadImage("walking_1.png");
    man_image1 = loadImage("walking_2.png");
    man_image2 = loadImage("walking_3.png");
    man_image3 = loadImage("walking_4.png");
    man_image4 = loadImage("walking_5.png");
    man_image5 = loadImage("walking_6.png");
    man_image6 = loadImage("walking_7.png");
    man_image7 = loadImage("walking_8.png");

    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");

}

function setup(){
    var canvas = createCanvas(500,500);

    engine = Engine.create();
    world  = engine.world;

    umbrella = new Umbrella();
    
    if(frameCount%100 ===0){
        for(var i=0; i<maxDrops;i){
            drop.push(new Drop(random(0,400),random(0,400),8,8));

        }
    }
}

function draw(){
    backgroud(0);
    Engine.update(engine);

    var rand = Math.round(random(1,2));
    if(frameCount%80===0){
        var thunderCreatedFrame = frameCount;
        var thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1 : thunder.addImage(thunder1);
            break;
            case 2 : thunder.addImage(thunder2);
            break;
            case 3 : thunder.addImage(thunder3);
            break;
            case 4 : thunder.addImage(thunder4);
            break;
            default : break;
        }
        thuder.scale = random(1.5,2.5);

        if(thunderCreatedFrame + 10 ===frameCount&& thunder){

        }
    }
    umbrella.display();

for(var i = 0; i<maxDrops;i++){
    drop[i].display();
    drop[i].display();
}

drawSprites();
}