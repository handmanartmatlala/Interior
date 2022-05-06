let interior;
let peek;
let furniture;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  interior = loadImage('interior.jpg');
  peek = loadImage('peek.gif');
  furniture = loadImage('furniture.png')
}

function draw() {
  background(220);
  orbitControl();
  
  camera(0, 0, 0 , 0, 0, 0, 0, 1, 0);  camera(5,10, 220, 0, 0, 1, 0, 1, 0);
  
  noStroke();
  
  push();
  texture(interior);
  rotateY(frameCount * 0.001);
  cylinder(260, 220)
  pop();
  
  push();
  
  pop();
}