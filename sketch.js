var box;

function setup() {
  createCanvas(1200,700);

box = createSprite(600,350,200,100);


}

function draw() 
{
  background(30);

if (keyIsDown(RIGHT_ARROW)) {
  box.position.x = box.position.x + 10;
}

if (keyIsDown(LEFT_ARROW)) {
  box.position.x = box.position.x - 10;
}


drawSprites();



}




