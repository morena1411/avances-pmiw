let juego;
let imageBombon, fondo, imgCucas, imgVida;
let imagenesMario = [];

function preload() {
  imageBombon= loadImage("data/bombon.png");
  fondo=loadImage("data/escenario.png");
  imgCucas=loadImage("data/cucaracha.png");
  imgVida = loadImage ("data/vida.png");
  for (let i=0; i<4; i++) {
    imagenesMario[i] = loadImage ("data/mario"+i+".png");
  }
}
function setup() {
  createCanvas (800, 400);
  juego= new Juego(fondo, 5, imageBombon, imgCucas, imagenesMario,imgVida);
}


function draw() {
  background(200);
  juego.dibujaBombones();
  juego.marioJuega();
  juego.interfazMM();
}
