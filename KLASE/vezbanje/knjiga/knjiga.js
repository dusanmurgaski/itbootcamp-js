export default class Knjiga {
  constructor(n, a, g, br, c) {
    this.naslov = n;
    this.autor = a;
    this.godina = g;
    this.brS = br;
    this.cena = c;
  }
  set naslov(x) {
    this._naslov = x;
  }
  set autor(x) {
    this._autor = x;
  }
  set godina(x) {
    this._godina = x;
  }
  set brS(x) {
    this._brS = x;
  }
  set cena(x) {
    this._cena = x;
  }
  get naslov() {
    return this._naslov;
  }
  get autor() {
    return this._autor;
  }
  get godina() {
    return this._godina;
  }
  get brS() {
    return this._brS;
  }
  get cena() {
    return this._cena;
  }
  obimna() {
    if (this.brS > 600) {
      return true;
    } else {
      return false;
    }
  }
  skupa() {
    if (this.cena > 8000) {
      return true;
    } else {
      return false;
    }
  }
  dugackoIme() {
    if (this.autor.length > 18) {
      return true;
    } else {
      return false;
    }
  }
}

// let knjiga1 = new Knjiga("dsdsdsdsdsdsdsdsdsdsdsdsdsds", 1990, 3000, 1500);
// let knjiga2 = new Knjiga("naslov2", "autor2", 1949, 1500, 500);
// let knjiga3 = new Knjiga("naslov3", "autor3", 1766, 7000, 10000);
// let nizKnjiga = [knjiga1, knjiga2, knjiga3];
// console.log(nizKnjiga);

// // nizKnjiga.forEach((elem) => {
// //   if (elem.dugackoIme()) {
// //     console.log(elem.autor);
// //   }
// // });
// console.log(knjiga1.dugackoIme());
