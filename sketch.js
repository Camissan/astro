var fondo;
var bath;
var drink;
var eat;
var sleep;
var move;
var gym;
var brush;
var astronauta;

function preload(){
fondo=loadImage("iss.png");
bath=loadAnimation("bath2.png","bath1.png");
drink=loadAnimation("drink1.png","drink2.png");
eat=loadAnimation("eat1.png","eat2.png");
sleep=loadAnimation("sleep.png");
move=loadAnimation("move.png","move1.png");
gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
brush=loadImage("brush.png");
}

function setup(){
createCanvas(500,500);
astronauta=createSprite(250,250);
astronauta.addAnimation("sleep",sleep);
}

function draw(){
background(fondo);
astronauta.scale=0.1
drawSprites()
textSize(20); 
fill("white"); 
text("Instrucciones:",20, 35); 
textSize(15);
text("Flecha hacia Arriba = Cepillarse",20, 55); 
text("Flecha hacia Abajo = Ejercitarse",20, 70); 
text("Flecha hacia la Izquierda = Comer",20, 85); 
text("Flecha hacia la Derecha = Bañarse",20, 100); 
text("tecla m = Moverse",20, 115);
edges=createEdgeSprites(); 
astronauta.bounceOff(edges);
if(keyDown("DOWN_ARROW")){ 
astronauta.addAnimation("gym", gym); 
astronauta.changeAnimation("gym"); 
astronauta.y = 350; 
astronauta.velocityX = 0; 
astronauta.velocityY = 0; }
if(keyDown("LEFT_ARROW")){ 
astronauta.addAnimation("eat", eat); 
astronauta.changeAnimation("eat"); 
astronauta.y = 350; astronauta.velocityX = 1; 
astronauta.velocityY = 0; }
if(keyDown("RIGHT_ARROW")){ 
    astronauta.addAnimation("bath", bath); 
    astronauta.changeAnimation("bath"); 
    astronauta.y = 350; astronauta.velocityX = 1; 
    astronauta.velocityY = 0; }
    if(keyDown("UP_ARROW")){ 
        astronauta.addAnimation("brush",brush ); 
        astronauta.changeAnimation("brush"); 
        astronauta.y = 350; astronauta.velocityX = 0; 
        astronauta.velocityY = 0; }
        if(keyDown("M")){ 
            astronauta.addAnimation("move", move); 
            astronauta.changeAnimation("move"); 
            astronauta.y = 300; astronauta.velocityX = 1; 
            astronauta.velocityY = 1; }

}