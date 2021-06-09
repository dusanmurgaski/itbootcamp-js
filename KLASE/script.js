class Automobil {
  constructor(a, b, v, d) {
    this._boja = a;
    this._model = b;
    this._brzina = v;
    this._krov = d;
  }
  sviraj() {
    console.log(`${this._model}beep beep beep beep`);
  }
}
// kreiranje novog objekta
let auto1 = new Automobil("crvena", "opel", "100", true);

let auto2 = new Automobil(["red", "blie", "green"], "mc", "100", false);
auto1.sviraj();
let auto3 = new Automobil("black", "mm", "1000", false);
console.log(auto2);
console.log(auto3._model);

let automobili = [auto1, auto2, auto3];
console.log(automobili);

auto3.sviraj();
