var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    // music = preload("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(290,580,200,30);
    block2.shapeColor = "orange";

    block3= createSprite(500,580,200,30)
    block3.shapeColor = "green";

    block4= createSprite(710,580,200,30)
    block4.shapeColor = "brown";
    


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX= -4;
    ball.velocityY= 4;
}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        // music.play();
        
    }
    if(ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        // music.play();
    
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        // music.play();
    }
    if(block3.isTouching(ball) ){
        ball.shapeColor= "red";
        // music.play();  
    }

    if(block4.isTouching(ball)){
        ball.shapeColor = "green";
        // music.play();
    }
        

    //write code to bounce off ball from the block3
     if (ball.bounceOff(block3)){
         ball.shapeColor = "red";
         
     }


    //write code to bounce off ball from the block4
    if (ball.bounceOff(block4)){
        ball.shapeColor = "green";

    }

    

    drawSprites();
}
