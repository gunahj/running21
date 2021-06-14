var track
var edges
var leftboundary
var rightboundary
var boy

  function preload(){
    //pre-load images
  trackbg=loadImage("path.png");
  boya=loadAnimation("Runner-1.png","Runner-2.png");
  }

  function setup(){
    createCanvas(400,400);
    //create sprites here
    track=createSprite(200,200,50,50);
    track.addImage("t",trackbg);
    track.scale=1.2;

    boy=createSprite(200,300,10,10)
    boy.addAnimation("b",boya);;
    boy.x=10
    boy.scale=0.1
    
    leftboundary=createSprite(375,200,10,400);
    leftboundary.visible=false;
    rightboundary=createSprite(26,200,10,400);
    rightboundary.visible=false;

    edges=createEdgeSprites()
  }

  function draw() {
    background(0);
  boy.x=World.mouseX

    track.velocityY=2
    if(track.y>400) {
      track.y=200
    }
  boy.collide(leftboundary);
  boy.collide(rightboundary);
  drawSprites();
  }
