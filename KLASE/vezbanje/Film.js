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

let film1 = new Film("Irreversible", "Gaspar Noe", 2000, [5]);
let film2 = new Film("Piano Teacher", "Michael Haneke", 1900, [10]);
let film3 = new Film("I Stand Alone", "Gaspar Noe", 1901, [1]);

let niz = [film1, film2, film3];
console.log(film1.prosek());

function vekFilmova(niz, vek) {
  niz.forEach((elem) => {
    if ((elem.godina / 100) % 1 == 0) {
      if (elem.godina / 100 == vek) {
        console.log(elem.naslov);
      }
    } else if (Math.floor(elem.godina / 100 + 1) == vek) {
      console.log(elem.naslov);
    }
  });
}
vekFilmova(niz, 19);

function prosecnaOcena(niz) {
  let sumaOcena = 0;
  let brojac = 0;
  let prosek = 0;
  niz.forEach((elem) => {
    elem.ocena.forEach((el) => {
      sumaOcena += el;
      brojac++;
    });
  });
  prosek = sumaOcena / brojac;
  return prosek;
}

console.log(prosecnaOcena(niz));

function najboljeOcenjeni(niz) {
  let najbolji = niz[0];
  niz.forEach((elem) => {
    if (elem.prosek() > najbolji.prosek()) {
      najbolji = elem;
    }
  });
  return najbolji;
}

console.log(najboljeOcenjeni(niz));

function osrednjiFilm(niz) {
  niz.forEach((elem) => {
    if (elem.prosek() - prosecnaOcena(niz) == 1) {
      console.log(elem.naslov);
    }
  });
}

osrednjiFilm(niz);

function najmanjaOcena(niz) {
  let nO = niz[0].ocena[0];
  niz.forEach((elem) => {
    elem.ocena.forEach((el) => {
      if (el < nO) {
        nO = el;
      }
    });
  });
  return nO;
}

console.log(najmanjaOcena(niz));

function iznadOcene(niz, ocena) {
  let nizFilmova = [];
  niz.forEach((elem) => {
    if (elem.prosek() > ocena) {
      nizFilmova.push(elem);
    }
  });
  return nizFilmova;
}

console.log(iznadOcene(niz, 3));
