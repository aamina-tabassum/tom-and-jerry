var background_1,backgroundImage;
var tom,tomImage;
var jerry,jerryImage;

function preload() {
    //load the images here
    backgroundImage = loadImage('images/garden.png');
    tomImage = loadImage('images/tomOne.png');
    jerryImage = loadImage('images/jerryOne.png');

}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    background_1 = createSprite(400,200,10,10);
    background_1.addImage(backgroundImage);

    tom = createSprite(400,200,10,10);
    tom.addImage(tomImage);
    tom.scale = 0.2;

    jerry = createSprite(300,400,10,10);
    jerry.addImage(jerryImage);
    jerry.scale = 0.2;
}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide

    tom.x = World.mouseX;
    tom.y = World.mouseY;
  
   

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 
/*if(tom.x - jerry.x <= tom.width/2 + jerry.width/2 &&
    jerry.x - tom.x <= jerry.width/2 + tom.width/2 && 
    tom.y - jerry.y <= tom.height/2 + jerry.height/2 &&
    jerry.y - tom.y <= jerry.height/2 + tom.height/2){*/

}









