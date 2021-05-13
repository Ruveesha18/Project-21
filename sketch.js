var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,180,40);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,180,40);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,180,40);
    block3.shapeColor = "red";

    block4 = createSprite(700,580,180,40);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100,35,35);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX= 4;
    ball.velocityY= 3.5;

}

function draw() {
    background(rgb(10,10,10));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

     if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }
   

    drawSprites();
}
