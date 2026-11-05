class Juego {
  constructor(fondo, cantBombones, imgBombon, imgCuca, imagenesMario,imgVidas) {
    this.fondo=fondo;
    this.cant=cantBombones;
    this.bombones=[];
    this.cucarachas=[];
    this.mario= new Mario(200, 200, imagenesMario);
    this.interfaz= new Interfaz(imgVidas);
    for (let i=0; i<this.cant; i++) {
      this.bombones[i]=new Bombon(random(50,700), -60 - i * 300, imgBombon);
      this.cucarachas [i] = new Cucaracha (random (50,700), -210 - i * 300, imgCuca);
    }
  }

  }
  dibujaBombones() {
    image(this.fondo, 0, 0, width, height);
    for (let i=0; i<this.cant; i++) {
      this.bombones[i].dibujaBombon();
      this.bombones[i].caenBombones();
      this.cucarachas[i].dibujaCucaracha();
      this.cucarachas[i].caenCucarachas();
    }
  }
  marioJuega() {
    this.mario.dibujarMario();
    this.mario.moverMario();
  }
  interfazMM(){
  this.interfaz.dibujaCorazon();
  }
}
