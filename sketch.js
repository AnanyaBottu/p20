 var ball1;

function setup(){
   createCanvas(1350,1000);
   
ball1=createSprite(200,200,50,50);
}


function draw(){
   background("#ef7b76");

 ball1.shapeColor="#f709eb";
   ball1.x=World.mouseX; 
   ball1.y=World.mouseY;

   if(ball1.x>=500){
      background("#07f4c5");
   }

   if(ball1.x>=1000){
      background("pink");
   }
   if(ball1.x>=750){
      background("yellow");
   }
   
   
   
   drawSprites();

}

