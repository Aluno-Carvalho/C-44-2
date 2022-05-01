var estrela=[];
var estrela_img;

var posxEstrela, posyEstrela;
var nave;
function preload(){
estrela_img = loadImage('./images/estrela.png');
 
}
function setup(){
  createCanvas(400,400);
  nave = new Nave();

}
function draw(){
background(0);

drawSprites();

nave.show()
if(keyDown("LEFT_ARROW")){
  console.log(nave.x)
  nave.x=nave.x-10;
  
}
if(keyDown("RIGHT_ARROW")){
  console.log(nave.x)
  nave.x=nave.x-10;
  
}


}
