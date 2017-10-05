//Declare
// make variables
//   1. Declare&Name (variables)
//     name them by their uses
//   2. initialize (give it value)
//   3. use!

// && for and, || for or

var xPos =200;
var yPos =300;
var speed=5;
var xfill=250;
var yfill=0;
var zfill=0;

function setup() {
  createCanvas (600,400);
  // background (250,250,100);

}

function draw () {
  background (250,250,100);

  // if (mouseX >300){
  //   fill (255,0,0);
  //   rect (300,200,100,100);
  //   console.log("hooray!")
  // }

  // // this is a circle
  fill(xfill,yfill,zfill);
  ellipse(xPos,yPos,100,100);
  xPos = xPos + speed;
  yPos = yPos + speed*2;
  tra = 100

  if (xPos > width || xPos < 0){
  speed = speed * -2;
  yPos = yPos-10;
  xfill=xfill-6;
  yfill=yfill+5;
  zfill=zfill+2;
}
  if (yPos >height || yPos <0) {
    speed = speed *-1
    xfill=xfill-6;
    yfill=yfill+10;
    zfill=zfill+5;
  }


  //something called width=canvas width
  //something called height=canvas height




  // if (mouseX>300){
  //   line (0,0,600,400);
  // }else if (mouseX>200){
  //   fill (255,0,0);
  //   rect(200,200,100,100);
  // }else if (mouseX>100){
  //   fill(0.255,0);
  //   triangle(300,400,200,150,600,400);
  // }else{
  //   fill (0,0,255);
  //   ellipse(40,40,200,200);
  // }




  // // this is a circle
  // fill(250,200,200);
  // ellipse(xPos,100,100,100);
  //
  // xPos=xPos+5

  // When the circle gets to the end of the canvas, reverse
  // in Javascript: we can use ==, ===, >,<,>=,<=
  // use "if statements"
  // if (____turns out ture_______) { // statements

  // }



  //This is a square
  // fill(200,250,200);
  // rect(400,100,50,50);


}
