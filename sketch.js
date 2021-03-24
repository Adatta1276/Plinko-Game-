
//decrease size of text, add friction of particles, color text randomly, then SUBMIT. 



var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;
var ground;
var divisionHeight=300;
var score =0;
var turns = 0;
var gameState ="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background(0);
  



  fill("DeeepPink");
  textSize(35);
  text("Score : "+score,20,40);
  
  //text(mouseX + "," + mouseY, 20, 50);
  if(gameState === "play") {
    textSize(35);
    fill("red");
    text(" 500 ", 5, 550);
    text(" 500 ", 80, 550);
    text(" 500 ", 160, 550);
    text(" 500 ", 240, 550);
    fill("lime");
    text(" 100 ", 320, 550);
    text(" 100 ", 400, 550);
    text(" 100 ", 480, 550);
    fill("blue");
    text(" 200 ", 560, 550);
    text(" 200 ", 640, 550);
    text(" 200 ", 720, 550);
    Engine.update(engine);
    ground.display();
  
    for (var i = 0; i < plinkos.length; i++) {
      plinkos[i].display();  
   }
  
     if(particle!=null)
     {
        particle.display();
         
         if (particle.body.position.y>760)
         {
               if (particle.body.position.x < 300) 
               {
                   score=score+500;      
                   particle=null;
                   if ( turns>= 5) gameState ="gameOver";                          
               }
  
  
               else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
               {
                     score = score + 100;
                     particle=null;
                     if ( turns>= 5) gameState ="gameOver";
  
               }
               else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
               {
                     score = score + 200;
                     particle=null;
                     if ( turns>= 5)  gameState ="gameOver";
  
               }      
               
         }
   
       }
  
    for (var k = 0; k < divisions.length; k++) 
    {
      divisions[k].display();
    }


  }
  
  
   else if (gameState =="gameOver") {
    
    textSize(100);
    fill("red");
    text("GAME OVER !!", 87, 250);
    textSize(20);
    text("Press CTRL + R to restart the game. ",255,350);
    //return
  }

  

  

  
 
}


function mousePressed()
{
  if(gameState!=="gameOver")
  {
      turns++;
     particle=new Particle(mouseX, 10, 15, 15); 
  }   
}