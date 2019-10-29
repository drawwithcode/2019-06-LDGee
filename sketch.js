var canvas;
var slider1;
var sliderR;
var sliderG;
var sliderB;
var button;
var dropzone;
var smile;
var papercanvas;
var mySong;

function preload() {
  smile = loadImage("./assets/smile.png");
  mySong = loadSound("./assets/audio.mp3");

}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight)
  resizeCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  //canvas in the background of everything
  canvas.style("z-index", "-1");

  //setup analyzer and music
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong)

  //song plays from the beginning
  mySong.loop();
  mySong.setVolume(0.5);

  //squared paper sheet texture for the background
  var lato = width / 50;
  for (var x = 0; x < width; x += lato) {
    for (var y = 0; y < height; y += lato) {

      fill(255, 255, 252);
      strokeWeight(0.5);
      stroke(0, 0, 120, 30);
      rect(x, y, lato, lato);
    }
  }

  //dropzone for image drop
  dropzone = select("#dropzone");
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);

  //stroke slider
  createP('〰 stroke');

  slider1 = createSlider(1, 40, 2.5);
  slider1.style('margin-bottom', '40px');
  slider1.style('margin-left', '50px');
  slider1.style('margin-top', '-20px');

  //R slider
  createP('❤ value');

  sliderR = createSlider(0, 255, 253);
  sliderR.style('margin', '20px');
  sliderR.style('margin-bottom', '40px');
  sliderR.style('margin-left', '50px');
  sliderR.style('margin-top', '-20px');

  //G slider
  createP('💚 value');

  sliderG = createSlider(0, 255, 102);
  sliderG.style('margin', '20px');
  sliderG.style('margin-bottom', '40px');
  sliderG.style('margin-left', '50px');
  sliderG.style('margin-top', '-20px');

  //B slider
  createP('💙 value');

  sliderB = createSlider(0, 255, 112);
  sliderB.style('margin', '20px');
  sliderB.style('margin-bottom', '0px');
  sliderB.style('margin-left', '50px');
  sliderB.style('margin-top', '-20px');

  //clear the canvas button
  createP();

  button = createButton('click here to clear the canvas');
  button.mousePressed(clearCanvas);
  button.style('margin-top', '-100px');
  button.style('margin-left', '1200px');
  button.style('background', '#FD6670');
  button.style('color', '#FFFFFF');

}

function draw() {

  //function to draw (i used the keyIsDown function because the mousePressed function doesn't allow the user to use the sliders without painting everything underneath them )
  if (keyIsDown(65)) {
    strokeWeight(slider1.value());
    stroke(sliderR.value(), sliderG.value(), sliderB.value());
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
//function to highlight the dropzone when you drag something to it
function highlight() {
  dropzone.style('background', '#FD6670');
  dropzone.style('color', '#FFFFFF');
  dropzone.html('yes. put it in here.');
}

//function to unhighlight the dropzone when you move out of it
function unhighlight() {
  dropzone.style('background', 'white');
  dropzone.style('color', '#FD6670');
  dropzone.html('drag your file in here please')
}

//function to make the dropzone get the file and don't open the file in the browser automatically
function gotFile(file) {
  var img = createImg(file.data);
  img.hide();
  imageMode(CENTER)
  translate(width / 2, height / 2);
  image(img, 0, 0, 500, 312.5);
}

//function to clear the canvas and redraw the paper sheet texture zzz
function clearCanvas() {
  clear();
  var lato = width / 50;
  for (var x = 0; x < width; x += lato) {
    for (var y = 0; y < height; y += lato) {

      fill(255, 255, 252);
      strokeWeight(0.5);
      stroke(0, 0, 120, 30);
      rect(x, y, lato, lato);
    }
  }

}
