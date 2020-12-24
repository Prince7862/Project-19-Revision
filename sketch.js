
var bananaImg,Banana,monkey,monkey_running,obstacleImg,rock,backImg,ground,invisibleground;

var GameState,PLAY,END,count

var BananaGroup,RockGroup


function preload(){
  backImg = loadImage("jungle.jpg")
  BananaImg = loadImage("banana.png")
  obstacleImg = loadImage("stone.png")
  
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png")
}


function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(50,360,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  
  ground = createSprite(200,150,400,25)
  ground.velocityX = -3
  ground.addAnimation("background",backImg)
  ground.scale = 1.0
  monkey.depth = ground.depth
  monkey.depth = monkey.depth + 1
  
  invisibleground = createSprite(200,360,400,25)
  invisibleground.visible = false
  
  BananaGroup = new Group()
  RockGroup = new Group()
  
  
  GameState = 1
  PLAY = 1
  END = 0
  
  count = 0
}

function draw() {
  //background(270);
  
  
  
  
  if(RockGroup.isTouching(monkey)){
    monkey.scale = 0.09  
  }
  
  
  
  if(keyDown("Space") && monkey.y > 280){
    monkey.velocityY = -12
  }
  
  if(ground.x < 0){
    ground.x = 200 
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  console.log(monkey.y)
  
  monkey.collide(invisibleground)
  
  banana();
  rocks();
  
  if(monkey.isTouching(BananaGroup)){
    BananaGroup.destroyEach()
    count = count + 2
  }
  
  switch(count){
    case 10 : monkey.scale = 0.12  
      break;
    case 20 : monkey.scale = 0.14
      break;
    case 30:  monkey.scale = 0.16
      break;
    case 40:  monkey.scale = 0.18
      break;
      default: break; 
  }
  
  
  
  
  
  drawSprites();
  
  stroke("White")
  textSize(18)
  text("Score : " + count,300,20)
}

function banana(){
  if(frameCount % 80 == 0){
  Banana = createSprite(400,200,10,10)
  Banana.addImage("banana",BananaImg)
  Banana.scale = 0.05
  Banana.velocityX = -4
  Banana.lifetime = 150
    
  BananaGroup.add(Banana)  
    
  monkey.depth = Banana.depth
  monkey.depth = monkey.depth + 1
  }
}

function rocks(){
  if(World.frameCount % 90 === 0){
  rock = createSprite(400,300,10,10)
  rock.addAnimation("obstacle", obstacleImg)
  rock.velocityX = -4
  rock.scale = 0.15 
  RockGroup.add(rock)  
    
  monkey.depth = rock.depth
  monkey.depth = monkey.depth + 1
    
  
    
  }
}



















