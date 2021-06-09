class Auto {
  constructor(b, m, k) {
    this.boja = b; // this.boja je seter, seter pozivamo kao promenljivu bez navodjenja zagrada iako je meotd
    this.model = m;
    this.krov = k;
  }
  // Seteri - Postavljaju vrednosti poljimo
  // Pravimo seter za svako polje
  set boja(x) {
    this._boja = x;
  }
  set model(x) {
    this._model = x;
  }
  set krov(x) {
    if (x === true || x === false) {
      this._krov = x;
    } else {
      this._krov = true;
    }
  }
  // Geteri - Vracaju/Citaju vrednost polja
  get boja() {
    return this._boja;
  }
  get model() {
    return this._model;
  }
  get krov() {
    return this._krov;
  }
}

let auto1 = new Auto("red", "fiat");
// OVAKO NE!!!
// console.log(auto1._boja);
// auto1._boja = "white";
// console.log(auto1._boja);

// Ovako DA!
// pristup poljima samo preko setera i getera
console.log(auto1.boja);
auto1.boja = "white";
console.log(auto1.boja);
