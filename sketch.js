let hold = false;
let selected = -1;
let number = 0;
let logo;
let hands;
let diamond = [5];
let x = [80, 80, 320, 330, 330, 331, 331, 339, 339, 155, 150, 156, 150];
let y = [430, 350, 555, 670, 670, 765, 765, 860, 860, 560, 696, 830, 696];

function setup() {
  createCanvas(1680, 990);
  diamond[0] = loadImage("Image/gold.png");
  diamond [3] = loadImage("Image/13.png");
  diamond [4] = loadImage("Image/14.png");
  diamond [5] = loadImage("Image/14.png");
  diamond [6] = loadImage("Image/14.png");
  diamond [7] = loadImage("Image/15.png");




  // Continue loading other images
  logo = loadImage("Image/Logo0013.png");
  hands = loadImage("Image/Asset 7.png");

}

function draw() {
  background(255, 250, 233); // using RGB values
  image(logo, 307, 2);
  noFill();
  stroke(208, 62, 31);
  rect(52, 323, 457, 625);
  fill('#f5efdc');
  stroke('#2D4E9B');
  rect(627, 323, 976, 625);

  for (let i = 0; i < diamond.length; i++) {
    if (diamond[i]) {
      image(diamond[i], x[i], y[i]);
      if (hold && i === selected) {
        x[i] += (mouseX - pmouseX);
        y[i] += (mouseY - pmouseY);
      }
    }
  }
}

function mousePressed() {
    for (let i = 0; i < diamond.length; i++) {
      if (diamond[i] && mouseX > x[i] && mouseX < x[i] + diamond[i].width &&
          mouseY > y[i] && mouseY < y[i] + diamond[i].height) {
        selected = i;
        hold = true;
        return;
      }
    }
  }
  
  function mouseReleased() {
    hold = false;
  }
  
  function keyPressed() {
    if (key === 's' || key === 'S') {
      console.log("Saving...!");
      let fileName = "Logo" + nf(number, 5) + ".png";
      saveCanvas(canvas, fileName, 'png');
      number++;
      console.log("Done saving.");
    }
  }
  