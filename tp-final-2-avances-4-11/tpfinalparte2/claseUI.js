class Interfaz {
  constructor(corazon) {
    this.vida=corazon;
    this.cantVidas=3;
  }

  dibujaCorazon() {
    for (let i=0; i<this.cantVidas; i++) {
      image(this.vida, 20+(i*40), 20, 30, 30);
    }
  }
}
