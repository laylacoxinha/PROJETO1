function setup() {
  createCanvas(1000, 800);
   background("rgb(196,26,56)");
}

function draw() {
  fill("rgb(31,4,4)")
  stroke("rgb(223,190,190)")
  if(mouseIsPressed)
    rect(mouseX,mouseY,50,70);

}
