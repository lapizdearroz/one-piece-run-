var PLAY = 1;
var END = 0;
var jump = 0;
var gameState = PLAY;
var luffy,luffyimg,luffypulando
var chao
var chaoinvisivel
var background,backgroundimg
var score
var enemyImg
var enemygroup
function preload(){
 luffyimg = loadAnimation("luffy.gif");
 luffypulando = loadAnimation("luffy pulando.gif");
 backgroundimg = loadImage("sea.png");
 enemyimg = loadAnimation("images.jpg");
}

function setup() {
 createCanvas(700,300);

   background = createSprite(350,150,700,300);
   background.addImage(backgroundimg);
   background.scale = 0.5

   luffy = createSprite(100,250,20,20);
   luffy.addAnimation(luffyimg);
   luffy.scale = 0.3

   chao = createSprite(350,290,700,20);
   chao.x = chao.width /2;
   chao.velocityX = -4;

   enemyGroup = new Group();
   
   score = 0;
   
}
function draw() {
   if (gameState===PLAY){
      score = score + Math.round(getFrameRate()/60);
      chao.velocityX = -(6 + 3*score/100);
      
      if(keyDown("space")&& luffy.y >= 100) {
         luffy.velocityY = -10;
         luffy.changeAnimation("pular",luffypulando);
      }
      
      luff.velocityY = trex.velocityY + 0.8
    
      if (chao.x < 0){
        chao.x = chao.width/2;
      }
      spawnenemy();
   }
     
      luffy.collide(chao);

      drawSprites();
}
function spawnenemy() {

   if (frameCount % 60 === 0) {
     var enemy = createSprite(100,250,40,10);
     enemy.addAnimation("enemy", enemyimg);
     enemy.scale = 0.5;
     enemy.velocityX = -4;
     enemy.lifetime = 300;
     enemy.velocityX = -(6 + 3*score/100);
     enemygroup.add(enemy);

   }
}