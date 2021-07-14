var mainship,mainship1

var subship,subship1,subship2,subship3,subship4

var bg
 
var hasdocked = false

function preload(){
  bg=loadImage("Docking-undocking/spacebg.jpg")
  mainship1=loadImage("Docking-undocking/iss.png")
  subship1=loadImage("Docking-undocking/spacecraft1.png")
  subship2=loadImage("Docking-undocking/spacecraft2.png")
  subship3=loadImage("Docking-undocking/spacecraft3.png")
  subship4=loadImage("Docking-undocking/spacecraft4.png")
  
}







function setup() {
  createCanvas(1200,800);
  mainship=createSprite(300,350,20,20);
  mainship.addImage(mainship1)
  subship=createSprite(900,420,20,20);
  subship.addImage(subship1)
  
}

function draw() {
  background(bg);  
 
  subship.scale=0.3
  if(!hasdocked){
  if(keyDown(RIGHT_ARROW)){
    subship.addImage(subship4)

    subship.x=subship.x+10
  
  }
  else{
    subship.addImage(subship1)
  }

 
  if(keyDown(LEFT_ARROW)){
    subship.addImage(subship3)
    subship.x=subship.x-10
    
  }
  if(keyDown(UP_ARROW)){
    subship.addImage(subship2)
    subship.y=subship.y-10
    
  }
  if(keyDown(DOWN_ARROW)){
    subship.addImage(subship2)
    subship.y=subship.y+10
    
  }
  }
  if(subship.y<=(mainship.y+80)&&subship.x<=(mainship.x-10)){
     hasdocked=true
     textSize(14)
     fill("yellow")
     text("DOCKING SUCCESSFUL",100,100)
  }
  
  drawSprites();
}