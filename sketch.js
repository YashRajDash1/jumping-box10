var canvas;
var music;
var surf1,surf2,surf3,surf4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surf1=createSprite(60,550,200,50);
    surf2=createSprite(270,550,200,50);
    surf3=createSprite(480,550,200,50);
    surf4=createSprite(690,550,200,50);

    ball=createSprite(random(20,750),300,50,50);




    //create 4 different surfaces


    ball.velocityY=5;
    ball.velocityX=-5;
    //create box sprite and give velocity
    edges=createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

   
    
    
    surf1.shapeColor=("red");
    surf2.shapeColor=("green");
    surf3.shapeColor=("blue");
    surf4.shapeColor=("orange");

    
    
    

//ball.bounceOff(topEdge);
//ball.bounceOff(leftEdge);
//ball.bounceOff(rightEdge);



ball.bounceOff(edges);

    if(surf1.isTouching(ball) && ball.bounceOff(surf1)){
        ball.shapeColor=("red");
        
    }
   
    if(surf2.isTouching(ball) && ball.bounceOff(surf2)){
        ball.shapeColor=("green");
        music.play();
    }
    
    if(surf3.isTouching(ball) && ball.bounceOff(surf3)){
        ball.shapeColor=("blue")
    }
    
    if(surf4.isTouching(ball) && ball.bounceOff(surf4)){
        ball.shapeColor=("orange");
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
    }

 drawSprites() ;  //add condition to check if box touching surface and make it box
}
