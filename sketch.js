 
function preload(){
  
}

function setup() {
  createCanvas(640,640);
  Canvas.position(110,250);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
Image(video,0,0,640,480);
tint(tintColor);
}
function TakeSnapshot(){
  save('studentName.png');
}
function aplicarFiltro() {
  tintColor= document.getElementById("colorName").val