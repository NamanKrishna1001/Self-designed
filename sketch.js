var obj1,obj2,obj3,obj4,obj5,obj6,obj7;
var obj8,obj9,obj10,obj11,obj11,obj12,obj13;
var obj14,obj15,obj16,obj17,obj18,obj19,obj20,obj21,obj22;
var paddle;
var ball;
var gameState="serve";
function setup(){
    createCanvas(800,400);
    paddle=createSprite(400,360,100,10);
    paddle.shapeColor="brown";
    ball=createSprite(400,350,10,10)
  obj1=createSprite(100,10,100,10);
  obj1.shapeColor="red";
obj2=createSprite(200,10,100,10);
obj2.shapeColor="green";
obj3=createSprite(300,10,100,10);
obj3.shapeColor="blue";
obj4=createSprite(400,10,100,10);
obj4.shapeColor="purple";
obj5=createSprite(500,10,100,10);
obj5.shapeColor="violet";
obj6=createSprite(600,10,100,10);
obj6.shapeColor="yellow";
obj7=createSprite(700,10,100,10);
obj7.shapeColor="white";
obj8=createSprite(150,20,100,10);
obj8.shapeColor="white";
obj9=createSprite(250,20,100,10);
obj9.shapeColor="yellow";
obj10=createSprite(350,20,100,10);
obj10.shapeColor="violet";
obj11=createSprite(450,20,100,10);
obj11.shapeColor="purple";
obj12=createSprite(550,20,100,10);
obj12.shapeColor="blue";
obj13=createSprite(650,20,100,10);
obj13.shapeColor="green";
obj14=createSprite(200,30,100,10);
obj14.shapeColor="red";
obj15=createSprite(300,30,100,10);
obj15.shapeColor="green";
obj16=createSprite(400,30,100,10);
obj16.shapeColor="blue";
obj17=createSprite(500,30,100,10);
obj17.shapeColor="purple";
obj18=createSprite(600,30,100,10);
obj18.shapeColor="violet";
obj19=createSprite(250,40,100,10);
obj19.shapeColor="violet";
obj20=createSprite(350,40,100,10);
obj20.shapeColor="purple";
obj21=createSprite(450,40,100,10);
obj21.shapeColor="blue";
obj22=createSprite(300,50,100,10);
obj22.shapeColor="blue";
obj23=createSprite(400,50,100,10);
obj23.shapeColor="red";
obj24=createSprite(350,60,100,10);
obj24.shapeColor="green";
}
function draw(){
    background(0);
  edges=createEdgeSprites();
    paddle.x=World.mouseX;
    if(gameState==="serve"){
      text("Press Space To Start",350,200);
    }
    if(keyDown("space")){
      gameState="play";
      ball.velocityX=6;
      ball.velocityY=6;
    }
     if(ball.isTouching(obj1)){
       obj1.destroy();
     ball.bounceOff(obj1);
     }
  if(ball.isTouching(obj2)){
       obj2.destroy();
 ball.bounceOff(obj2);
     }
  if(ball.isTouching(obj3)){
       obj3.destroy();
     
    
     }
  if(ball.isTouching(obj4)){
       obj4.destroy();
     
     }
  if(ball.isTouching(obj5)){
       obj5.destroy();
  
     }
  if(ball.isTouching(obj6)){
       obj6.destroy();
      
     }
  if(ball.isTouching(obj7)){
       obj7.destroy();
     
     }
  if(ball.isTouching(obj8)){
       obj8.destroy();
    
     }
  if(ball.isTouching(obj9)){
       obj9.destroy();
    
     }
  if(ball.isTouching(obj10)){
       obj10.destroy();
      
     }
  if(ball.isTouching(obj11)){
       obj11.destroy();
     
     }
  if(ball.isTouching(obj12)){
       obj12.destroy();
     
     }
  if(ball.isTouching(obj13)){
       obj13.destroy();
     
     }
  if(ball.isTouching(obj14)){
       obj14.destroy();
  
     }
  if(ball.isTouching(obj15)){
       obj15.destroy();
     
     }
  if(ball.isTouching(obj16)){
       obj16.destroy();
     
     }
  if(ball.isTouching(obj17)){
       obj17.destroy();
     
     }
  if(ball.isTouching(obj18)){
       obj18.destroy();
   
     }
  if(ball.isTouching(obj19)){
       obj19.destroy();
     
     }
  if(ball.isTouching(obj20)){
       obj20.destroy();
     
     }
  if(ball.isTouching(obj21)){
       obj21.destroy();
   
     }
  if(ball.isTouching(obj22)){
       obj22.destroy();
    
     }
  if(ball.isTouching(obj23)){
       obj23.destroy();

     }
  if(ball.isTouching(obj24)){
       obj24.destroy();
      
     }
  
  
  
  
ball.bounceOff(paddle);
  if (ball.isTouching(edges[2]) || ball.isTouching(edges[1] )) {
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[1]);
  }
  if(ball.isTouching(edges[0])){
     ball.bounceOff(edges[0]);
     }
  if(ball.isTouching(edges[3])){
   gameState="over";
    text("Game Over",350,200);
    text("Press R To Restart",360,200);
  }

  if(gameState==="over"){
       
    
    
  obj1=createSprite(100,10,100,10);
  obj1.shapeColor="red";
obj2=createSprite(200,10,100,10);
obj2.shapeColor="green";
obj3=createSprite(300,10,100,10);
obj3.shapeColor="blue";
obj4=createSprite(400,10,100,10);
obj4.shapeColor="purple";
obj5=createSprite(500,10,100,10);
obj5.shapeColor="violet";
obj6=createSprite(600,10,100,10);
obj6.shapeColor="yellow";
obj7=createSprite(700,10,100,10);
obj7.shapeColor="white";
obj8=createSprite(150,20,100,10);
obj8.shapeColor="white";
obj9=createSprite(250,20,100,10);
obj9.shapeColor="yellow";
obj10=createSprite(350,20,100,10);
obj10.shapeColor="violet";
obj11=createSprite(450,20,100,10);
obj11.shapeColor="purple";
obj12=createSprite(550,20,100,10);
obj12.shapeColor="blue";
obj13=createSprite(650,20,100,10);
obj13.shapeColor="green";
obj14=createSprite(200,30,100,10);
obj14.shapeColor="red";
obj15=createSprite(300,30,100,10);
obj15.shapeColor="green";
obj16=createSprite(400,30,100,10);
obj16.shapeColor="blue";
obj17=createSprite(500,30,100,10);
obj17.shapeColor="purple";
obj18=createSprite(600,30,100,10);
obj18.shapeColor="violet";
obj19=createSprite(250,40,100,10);
obj19.shapeColor="violet";
obj20=createSprite(350,40,100,10);
obj20.shapeColor="purple";
obj21=createSprite(450,40,100,10);
obj21.shapeColor="blue";
obj22=createSprite(300,50,100,10);
obj22.shapeColor="blue";
obj23=createSprite(400,50,100,10);
obj23.shapeColor="red";
obj24=createSprite(350,60,100,10);
obj24.shapeColor="green";
     }
   if (keyDown("r")) {
    gameState = "serve";
     ball.velocityX=7;
     ball.velocityY=7;
  }
drawSprites();
}
