class Celulares {
  constructor(color, peso, resPantalla, resCamara, memRam) {
    this.color = color;
    this.peso = peso;
    this.resPantalla = resPantalla;
    this.resCamara = resCamara;
    this.memRam = memRam;
    this.encendido = false;
  }
  botonEncendido() {
    if (this.encendido === false) {
      alert(`Celular ${this.color} prendido`);
      this.encendido = true;
    } else {
      alert(`el celular ${this.color} ya está apagado`);
    }
  }
  reiniciar() {
    if (this.encendido === true) {
      alert(`reiniciando celular ${this.color}`);
    } else {
      alert(`el celular ${this.color} esta apagado`);
    }
  }
  tomarFotos() {
    alert(`Foto tomada en una resolución de: ${this.resCamara}`);
  }
  grabarVideo() {
    alert(`grabando video en: ${this.resCamara}`);
  }
  mostrarInfo() {
    return `
    Color: <b>${this.color}</b></br>
    Peso: <b>${this.peso}</b></br>
    Tamaño: <b>${this.resPantalla}</b></br>
    Resolución de Cámara: <b>${this.resCamara}</b></br>
    Memoria Ram: <b>${this.memRam}</b></br>
    Resolución de Video: <b>${this.resCamara}</b></br>
    `;
  }
}

class CelularAltaGama extends Celulares {
  constructor(color, peso, resPantalla, resCamara, memRam, resCamaraExtra) {
    super(color, peso, resPantalla, resCamara, memRam);
    this.resCamaraExtra = resCamaraExtra;
  }
  grabarEnCamaraLenta() {
    alert("estas grabando en camara lenta");
  }
  recFacial() {
    alert("iniciando reconocimiento facial");
  }
  mostrarAltaGamaInfo() {
    return (
      this.mostrarInfo() +
      `Resolución de Camara Trasera: <b>${this.resCamaraExtra}</b>`
    );
  }
}

// let celular1 = new Celulares("AZUL", "200GR", "5 PULGADAS", "FULL HD", "2GB");
// let celular2 = new Celulares("NEGRO", "180GR", "5.8 PULGADAS", "2K", "6GB");
// let celular3 = new Celulares("BLANCO", "1KG", "7.1 PULGADAS", "4K", "8GB");

// celular1.botonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.botonEncendido();

let celular1 = new CelularAltaGama("rojo", "600gr", "5.6'", "2K", "4GB", "2K");
let celular2 = new CelularAltaGama("negro", "900gr", "5.7'", "4K", "5GB", "4K");
let celular3 = new CelularAltaGama("verde", "1Kg", "6.4'", "4K", "8GB", "4K");

document.write(`
${celular1.mostrarAltaGamaInfo()}<br><br>
${celular2.mostrarAltaGamaInfo()}<br><br>
${celular3.mostrarAltaGamaInfo()}
`);
