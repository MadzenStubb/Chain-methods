class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }
  instalar() {
    if (this.instalada === false) {
      this.instalada = true;
      alert("Instalando App...");
    }
  }
  abrir() {
    if (this.iniciada === false && this.instalada === true) {
      this.iniciada = true;
      alert("App Abierta");
    }
  }
  cerrar() {
    if (this.iniciada === true && this.instalada === true) {
      this.iniciada = false;
      alert("App Cerrada");
    }
  }
  desinstalar() {
    if (this.instalada === true) {
      this.instalada = false;
      alert("Desinstalando App...");
    }
  }

  appInfo() {
    return `
    Descargas: <b>${this.descargas}</b></br>
    Puntuacion: <b>${this.puntuacion}</b></br>
    peso: <b>${this.peso}</b></br>
    `;
  }
}

let ClashOfClans = new App("100M", "4.5 ESTRELLAS", "94MB");
let ClashRoyale = new App("130M", "4.7 ESTRELLAS", "132MB");
let PVZ = new App("200M", "4.9 ESTRELLAS", "50MB");
let ZombieTsunami = new App("50M", "4.4 ESTRELLAS", "62MB");
let MobileLegends = new App("110M", "4.2 ESTRELLAS", "253MB");
let LoL = new App("40M", "4.2 ESTRELLAS", "243MB");
let Stickman = new App("10M", "4.3 ESTRELLAS", "42MB");
let Fnaf = new App("5M", "4.7 ESTRELLAS", "87MB");

ClashOfClans.instalar();
ClashOfClans.abrir();
ClashOfClans.cerrar();
ClashOfClans.desinstalar();

document.write(
  `
${ClashOfClans.appInfo()}</br>
${ClashRoyale.appInfo()}</br>
${PVZ.appInfo()}</br>
${ZombieTsunami.appInfo()}</br>
${MobileLegends.appInfo()}</br>
${LoL.appInfo()}</br>
${Stickman.appInfo()}</br>
${Fnaf.appInfo()}</br>
    `
);
