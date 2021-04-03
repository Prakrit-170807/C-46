var play,play_img
var introduce
var levelselector=1
var GameMode=0
var UP_arrow,UP_arrow_img,DOWN_arrow,DOWN_arrow_img
var con,con_img

function preload(){
  play_img = loadImage("PLAY.png")
  UP_arrow_img = loadImage("up.png")
  DOWN_arrow_img = loadImage("down.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  introduce = createSprite(width/2,0,width/2,width)
  play = createSprite(width/2,500,200,80)
  play.addImage(play_img)
}

function draw() {
  background('#2E2E2E'); 
  drawSprites(); 
  if(mousePressedOver(play)){
    GameMode=1
  }
  if(GameMode==1){
    play.destroy()
    fill("black")
    textSize(40)
    // textFont("")
    text(levelselector,width/2-10,520)

    UP_arrow = createSprite(width/2,440,40,40)
    UP_arrow.addImage(UP_arrow_img)
    UP_arrow.scale=0.5
    if(mousePressedOver(UP_arrow)){
      levelselector++
    }
    if(keyWentDown("UP_ARROW")){
      levelselector++
    }
    DOWN_arrow = createSprite(width/2,560,40,40)
    DOWN_arrow.addImage(DOWN_arrow_img)
    DOWN_arrow.scale=0.5
    if(mousePressedOver(DOWN_arrow)){
      levelselector--
    }
    con = createSprite(width/2+50,500,50,20)
    con.shapeColor="black"
    if(mousePressedOver(con)){
      GameMode=2
    }
  }

  if(GameMode==2){
    introduce.destroy()
    UP_arrow.destroy()
    DOWN_arrow.destroy()
  }
  console.log(GameMode)
  textSize(50)
  fill("black")
  textFont("Fattern") 
  text('Mind Mapping',width/2-170,90)

}