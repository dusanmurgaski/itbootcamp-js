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


// 12. Odrediti broj parnih elemenata sa neparnim indeksom

let noviNizBrojeva = [10, 16, 15, 17, 12, -14];
let brElem = 0;
for (let i = 0; i < noviNizBrojeva.length; i++) {
    if (noviNizBrojeva[i] % 2 == 0 && i % 2 != 0){
        brElem ++;
    }
}
console.log(brElem);

// 13. Izracunati sumu elemenata niza sa parnim indeksom

let sumaElemenata = 0;
for (let i = 0; i < noviNizBrojeva.length; i++){
    if ( i % 2 == 0){
        sumaElemenata += noviNizBrojeva[i];
    }
}
console.log(sumaElemenata);

// 14. Promeniti znak svakom elementu celobrojnog niza 

for ( let i = 0; i < noviNizBrojeva.length; i++){
    noviNizBrojeva[i] = -noviNizBrojeva[i]
}
console.log(noviNizBrojeva);

// 15. Promeniti znak svakom neparnom elementu celobrojnog niza
// sa parnim indeksom

for ( let i = 0; i < noviNizBrojeva.length; i++){
    if(noviNizBrojeva[i] % 2 != 0 && i % 2 ==0){
        noviNizBrojeva[i] = -noviNizBrojeva[i]
    }
}
console.log(noviNizBrojeva);
// 16. Dat je niz stavki za kupovinu (stringovi)
// Prolaskom kroz niz napraviti neuredjenu listu i ispisati je u 
// html dokument

let stavke = [`brasno`, `secer`, `mast`, `meso`, `hleb`];
console.log(stavke);
let nLista = `<ul>`;
let nListaZ = `</ul>`;
let lista = "";

for (let i = 0; i <stavke.length; i++){
    lista += `<li> ${stavke[i]} </li>`
}

document.body.innerHTML += nLista + lista + nListaZ;

// Nacin sa casa



// 17. Dat je niz imena kosarkaskog tima. Prolaskom kroz niz formiratu
// tabelu u cijim redovima imena tima , i tabelu ispisati u html;

let imena = ["Rale", "Marko", "Dusan", "Rastko", "Dimitrije"];
let tabela = `<table>`;


for (let i = 0; i < imena.length; i++){
    tabela += `<tr><td> ${imena[i]}</td></tr>`;
}

document.body.innerHTML += tabela + "</table>";

// 18. Dat je niz stringova ciji su clanovi putanje do slike.
// Prikazati sve slike u htmlu sa putanjama u navedenom nizu

let slike = ["1.png", `2.png`, `3.png`];

for (let i = 0; i < slike.length; i++){
    document.body.innerHTML += `<img src="${slike[i]}">`
}

// 19. ispisati duzinu svakog elemenat u nizu stringova
// let imena = ["Rale", "Marko", "Dusan", "Rastko", "Dimitrije"];

for (i=0; i < imena.length; i++){
    console.log(`Element ${imena[i]} ima ${imena[i].length} karaktera`);
}

// 20. Odrediti element u nizu stringova sa najvecom duzinom
// let imena = ["Rale", "Marko", "Dusan", "Rastko", "Dimitrije"];
imena = ["Rale", "Marko", "Dusanadsds", "Rda", "Ditrije"];

maks = imena[0];
// let ime = imena[0];

for (let i = 0; i < imena.length; i++){
    if( maks.length < imena[i].length){
        maks = imena[i];
       // ime = imena[i];
    }
}
console.log(maks);
// console.log(ime);


// 21. Odrediti broj elemenata u nizu 
//stringova cija je duzina veca od prosecne
// duzine svih stringova u nizu

imena = ["Rale", "Marko", "Dusanadsds", "Rda", "Dimitrije","dkasidaksdsak", "dksdmafsakfas", "ddd", "dfff"];
let brojArsr = 0;
let brojac = 0;
for ( let i = 0; i<imena.length; i++){
    brojArsr += imena[i].length
    brojac ++;
}
arsr = brojArsr / brojac;
    let brojArsrElemenata = 0;
for (let i = 0; i < imena.length; i++){
    if (imena[i].length > arsr){
        brojArsrElemenata ++;
    }
}
console.log(brojArsrElemenata);


// 22. Odrediti broj elemenata u nizu stringova koji sadrze slovo a

let slovoAStringovi = ["d","adsd", "kklkg"];

// Ugradjena funkcija includes  rec.includes("a"); true/false
let num = 0;    num++;
for (let i = 0; i < slovoAStringovi.length; i++){
    let rec = slovoAStringovi[i];
    if (rec.includes("a")){
        num++;
    }
}
console.log(num);
