
var dog,HappyDog,database,foodS,foodStock ;

var database;
function preload (){

Dog = loadImage("Dog.png")
MILK = loadImage("bottler.png")
HappyDog = loadImage("happydog.png")
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();

 var dog = createSprite(250, 250, 50, 50);
 dog.addImage("Dog",Dog);
 dog.scale = 0.2;


 foodStock = database.ref('Food');
 foodStock.on("value",readStock);

}

function draw() {
  background(46, 139, 87);  
  

  text("press UP_ARROW KEY TO FEED THE DOG")


if(keyWentDown(UP_ARROW)){

  writeStock(foodS);
  dog.addImage(HappyDog)

}

  drawSprites();
 
  
  
  //text("Remaing Food ::" + foodStock,200,50)
}

function readStock(data){

foodS = data.val();

}

function writeStock(x){

database.ref('/').update({
  Food:x
})

}