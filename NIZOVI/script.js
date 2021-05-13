let voce = ["Jabuka", "Banana", "Breskva", "Kruska"];
console.log(voce);
console.log(voce[2]);

voce[2] = "Malina";
console.log(voce[2]);
console.log(voce);

// Ispis elemenata niza 
console.log(voce[0], voce[1], voce[2], voce[3]);

// Ispis elemenata niza koriscenjem petlje
for (let i = 0; i < voce.length; i++) {
    console.log(voce[i]);
}


// Broj elemenata niza
console.log(voce.length);


const povrce = ["tikvica", "boranija", "krompir"];
console.log(povrce);
povrce[0] = "Blitva";
console.log(povrce);


// Odrediti zbir elemenata celobrojnog niza.
let celobrojniNiz = [1, 5, 8, 10, 9, 30, 15, 55];
let suma = 0;
for (let i = 0; i < celobrojniNiz.length; i++) {
    suma += celobrojniNiz[i];
}
console.log(suma);


// Odrediti proizvod elemenata celobrojnog niza.

let proizvodNiza = [5, 32, 2, 7];
let p = 1;
for (let i = 0; i < proizvodNiza.length; i++) {
    p *= proizvodNiza[i];
}
console.log(p);

// Odrediti srednju vrednost elemenata celobrojnog niza.

let arsr = [5, 10, 32, 20];
let suma1 = 0;
let brojBrojeva = 0;
for (let i = 0; i < arsr.length; i++) {
    suma1 += arsr[i];
    brojBrojeva++;
}
console.log(`Srednja vrednost niza je ${suma1 / brojBrojeva}`);
// drugi nacin
let sredina = suma1 / arsr.length;
console.log(sredina);
// preko funcija 
let aritmeticka = arsr => {
    let suma = 0;
    let br = 0;
    for (let i = 0; i < arsr.length; i++) {
        suma += arsr[i];
        br++;
    }
    return suma / br;
}
console.log(aritmeticka([1, 5, 2, 6, 6, 16, 62]));


// odrediti maksimalnu vrednost u celobrojnom nizu

let br1 = 5;
let br2 = 6;
let br3 = 7

let maksvr = br1;

if (maksvr < br2) {
    maksvr = br2;
}
if (maksvr < br3) {
    maksvr = br3;
}


// celobrojniNiz = [1, 5, 8, 10, 9, 30, 15];

let maks = celobrojniNiz[0];
for (let i = 0; i < celobrojniNiz.length; i++) {
    if (maks < celobrojniNiz[i]) {
        maks = celobrojniNiz[i];
    }
}
console.log(maks);

// // celobrojniNiz = [1, 5, 8, 10, 9, 30, 15];
// Odrediti indeks maksimalnog elementa celobrojnog niza.

// 1. Nacin.
let indeks = 0;

for (let i = 0; i < celobrojniNiz.length; i++) {
    if (maks == celobrojniNiz[i]) {
        indeks = i;
        break;
    }
}
console.log(indeks);

let maksimalnaVr = celobrojniNiz[0];
let maksIndex = 0;

for (let i = 0; i < celobrojniNiz.length; i++) {
    if (maksimalnaVr < celobrojniNiz[i]) {
        maksimalnaVr = celobrojniNiz[i];
        maksIndex = i;
    }
}
console.log(maksIndex);


//Odrediti minimalnu vrednost u celobrojnom nizu.
// // celobrojniNiz = [1, 5, 8, 10, 9, 30, 15];
celobrojniNiz = [2, 5, 7, 2, 9, 1];
let indeksMin = 0;
let minimalnaVr = celobrojniNiz[0];
for (let i = 0; i < celobrojniNiz.length; i++) {
    if (minimalnaVr > celobrojniNiz[i]) {
        minimalnaVr = celobrojniNiz[i];
    }
}
console.log(minimalnaVr);
// Odrediti indeks minimalnog elementa celobrojnog niza.

let minIndex = 0;
for (let i = 0; i < celobrojniNiz.length; i++) {
    if (minimalnaVr == celobrojniNiz[i]) {
        indeksMin = i;
    }
}
console.log(indeksMin);


suma1 = 0;
brojBrojeva = 0;
for (let i = 0; i < celobrojniNiz.length; i++) {
    suma1 += celobrojniNiz[i];
    brojBrojeva++;
}
sredina = suma1 / brojBrojeva;
console.log(sredina);
// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let brElemenata = 0;
for (let i = 0; i < celobrojniNiz.length; i++) {
    if (celobrojniNiz[i] > sredina) {
        brElemenata++;
    }
}
console.log(brElemenata);

// Izračunati zbir pozitivnih elemenata celobrojnog niza.

celobrojniNiz = [2, 5, 7, -2, 9, -1, -5, 10];

let zbirPozEl = 0;

for (let i = 0; i < celobrojniNiz.length; i++) {
    if (celobrojniNiz[i] > 0) {
        zbirPozEl += celobrojniNiz[i];
    }
}
console.log(zbirPozEl);

//Odrediti broj parnih elemenata u celobrojnom nizu.

let brojParnih = 0;

for (let i = 0; i < celobrojniNiz.length; i++) {
    if (celobrojniNiz[i] % 2 == 0) {
        brojParnih++;
    }
}
console.log(brojParnih);