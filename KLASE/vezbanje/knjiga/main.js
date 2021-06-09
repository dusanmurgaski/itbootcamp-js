import Knjiga from "./knjiga.js";

let knjiga1 = new Knjiga("naslov1", "123456781781818181", 1990, 714, 1500);
let knjiga2 = new Knjiga("naslov2", "autor2", 1949, 304, 500);
let knjiga3 = new Knjiga("naslov3", "autor3", 1766, 186, 10000);
let nizKnjiga = [knjiga1, knjiga2, knjiga3];
console.log(nizKnjiga);

console.log(knjiga3.skupa());

nizKnjiga.forEach((elem) => {
  if (elem.dugackoIme()) {
    console.log(elem.autor);
  }
});

nizKnjiga.forEach((elem) => {
  if (elem.obimna() && elem.skupa()) {
    console.log(elem.naslov);
  }
});

function ukupnaCena(nizKnjiga) {
  let ukupnoNovca = 0;
  nizKnjiga.forEach((elem) => {
    ukupnoNovca += elem.cena;
  });
  return ukupnoNovca;
}
console.log(ukupnaCena(nizKnjiga));

function prosecnaCena(nizKnjiga) {
  let cena = ukupnaCena(nizKnjiga);
  let arSr = cena / nizKnjiga.length;
  return arSr;
}
console.log(prosecnaCena(nizKnjiga));

function prosecnaStranica(nizKnjiga) {
  let sumaStranica = 0;
  let cenaStranice = 0;
  nizKnjiga.forEach((elem) => {
    sumaStranica += elem.brS;
  });
  cenaStranice = ukupnaCena(nizKnjiga) / sumaStranica;
  return cenaStranice;
}
console.log(prosecnaStranica(nizKnjiga));
