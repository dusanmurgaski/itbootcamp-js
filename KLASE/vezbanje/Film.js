// KLASA FILMOVI
class Film {
  constructor(n, r, g, o) {
    this.naslov = n;
    this.reziser = r;
    this.godina = g;
    this.ocena = o;
  }
  set naslov(x) {
    this._naslov = x;
  }
  set reziser(x) {
    this._reziser = x;
  }
  set godina(x) {
    if (x > 1800) {
      this._godina = x;
    } else {
      this._godina = 1800;
    }
  }
  set ocena(x) {
    this._ocena = x;
  }
  get naslov() {
    return this._naslov;
  }
  get reziser() {
    return this._reziser;
  }
  get godina() {
    return this._godina;
  }
  get ocena() {
    return this._ocena;
  }
  stampaj() {
    console.log(this.godina, this.reziser, this.naslov);
  }
  prosek() {
    let prosecnaOcena = 0;
    let sumaOcena = 0;
    this.ocena.forEach((elem) => {
      sumaOcena += elem;
    });
    prosecnaOcena = sumaOcena / this.ocena.length;
    return prosecnaOcena;
  }
}

let film1 = new Film("Irreversible", "Gaspar Noe", 2002, [1, 3, 2, 6, 8]);
let film2 = new Film("Piano Teacher", "Michael Haneke", 1999);
let film3 = new Film("I Stand Alone", "Gaspar Noe", 1998);

let niz = [film1, film2, film3];
console.log(film1.prosek());
