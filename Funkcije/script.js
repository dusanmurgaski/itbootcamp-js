let pr = 4;
let pr2 = 50;
if (pr < 10) {
    pr = "0" + pr;
}
if (pr2 < 10) {
    pr2 = "0" + pr2;
}
console.log(pr); // poziv funkcije log
console.log(pr2); // poziv funkcije log


// Definicija funkcije (telo funkcije)
function mojaFunkcija() {
    let poruka = "Zdravo svete!";
    console.log(poruka);
}

console.log("Neki tekst pre poziva funkcije");

// Poziv funkcije
mojaFunkcija();

console.log("Neki tekst posle poziva funkcije");

// Poziv funkcije
mojaFunkcija();
mojaFunkcija();



// Definicija druge funkcije
function ispisiTekst(tekst) {
    console.log("Ispisujem tekst: " + tekst); // Parametar tekst
}

// Pozivi funkcije
ispisiTekst("ITBootcamp"); // Prilikom poziva funkcije prosledjuje se neka vrednost
ispisiTekst('Pera Peric');
ispisiTekst(25);

let x = "Mika";
ispisiTekst(x);

console.log(x);
// console.log(tekst);

let tekst = "Zika"; // Globalna promenljiva
ispisiTekst(tekst); // Prosledjuje se vrednost promenljive

console.log(tekst); // Ovo nije parametar tekst, nego globalna promenljiva tekst

function test(x) {
    if (x % 2 == 0) {
        var y = "Paran"; // var - function scope (promenljiva vazi unutar funkcije)
    }
    else {
        let z = "Neparan"; // let - block scope (promenljiva vazi unutar bloka)
    }
    console.log(x);
    console.log(y);
    console.log(z);
}

//test(6);
//test(5);
//console.log(y);

// definicija funkcije
function korisnik(ime, prezime) {
    console.log(`korisnik: ${ime} ${prezime}`);
}
// poziv funkcije
korisnik("Dusan", "Murgaski");
korisnik("Dusan, Murgaski"); // druga vrednost je undefined

// Napisati funkcije koja ispisuje ime i prezime korisnika
// (koji se prosledjuju kao parametri),
// kao i info da li je prezime korisnika dugacko
// (dugacko ako ima vise od 10 karaktera).
function korisnikPrezime(ime, prezime) {
    if (prezime.length > 10) {
        console.log(`Korisnik ${ime} ${prezime} ima dugocko prezime`);
    }
    else {
        console.log(`Korisnik ${ime} ${prezime} nema dugacko prezime`);
    }
}

korisnikPrezime("Dusan", "Murgaskiddsdsdsdsds");
korisnikPrezime("Dusan", "Murgaski");


function imeGod(ime, god) {
    if (god >= 18) {
        console.log(`${ime}, ${god} punoletan je`);
    }
    else {
        console.log(`${ime}, ${god} nije punoletan`);
    }
}
imeGod("Dusan", 20);


function zbir(a, b) {
    let rez = a + b;
    console.log(rez);
}
zbir(5, 10);

let a = 3;
let b = 1;

zbir(a, b);

//let datum = new Date();
//let dan = datum.getDay(); // VRACA dan u nedelji

//if (dan==6 || dan == 0) {

//}
//else {

//}
//datum.getDay(); // NE ISPISUJE dan u nedelji 

// Funkcija koja vraca zbir svoja dva parametara
function zbir2(a, b) {
    let rez = a + b;
    return rez;
}
let z = zbir2(5, 6);
if (z >= 0) {
    console.log("Zbir je nenegativan broj ");
}
else {
    console.log("Zbir je negativan broj");
}

function proizvod(a, b) {
    return a * b;
    console.log("Hello world!");
}

// return ima dvojaku ulogu
// 1) Vraca vrednost fucnkiji
// 2) Prekida izvrsenja funkcije

console.log(proizvod(5, 5));

// Treci zadatak
function zadatakTri(n) {
    if (n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(zadatakTri(2));

// Cetvrti zadatak

function maks2(a, b) {
    if (a > b) {
        return a;
    }
    else if (a < b) {
        return b;
    }
    else {
        return "Brojevi su isti";
    }
}
console.log(maks2(3, 3));

function maks4(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return a;
    }
    else if (b > a && b > c && b > d) {
        return b;
    }
    else if (c > a && c > b && c > d) {
        return c;
    }
    else {
        return d;
    }
}
console.log(maks4(11, 10, 5, 4));

// peti zadatak

function slika(s) {
    document.body.innerHTML += `<img src="${s}">`;
}
slika("0.png")



// sesti zadatak

function paragraf(p) {
    document.body.innerHTML += `<p style="color:${p}"> TEKST </p>`;
}
paragraf("green");


// sedmi zadatak
function sedmiDan(n) {
    if (n == 0) {
        console.log("Nedelja")
    }
    else if (n == 1) {
        console.log("Ponedeljak")
    }
    else if (n == 2) {
        console.log("Utorak")
    }
    else if (n == 3) {
        console.log("Sreda")
    }
    else if (n == 4) {
        console.log("Cetvrtak")
    }
    else if (n == 5) {
        console.log("Petak")
    }
    else if (n == 6) {
        console.log("Subota")
    }
    else if (n == 7) {
        console.log("Nedelja")
    }
}
sedmiDan(6);

// osmi zadatak
function deljivSaTri(n, m) {
    let zbirBrojeva = 0;
    for (n; n <= m; n++) {
        if (n % 3 == 0) {
            console.log(n);
            zbirBrojeva++;
        }
    }
    console.log(`Brojeva koji su deljivi sa 3 ima ${zbirBrojeva}`);
}
deljivSaTri(1, 20);

// deveti zadatak
function sumiraj(n, m) {
    suma = 0;
    for (n; n <= m; n++) {
        suma += n;
    }
    return suma;
}
console.log(sumiraj(1, 3));

// deseti zadatak
function mnozi(n, m) {
    let p = 1;
    for (n; n <= m; n++) {
        p *= n;
    }
    return p;
}
console.log(mnozi(1, 5));

// 11

function aritmeticka(n, m) {
    let sred = (n + m) / 2;
    return sred;
}
console.log(aritmeticka(1, 100));

// 12

function aSredBrojeva(n, m) {
    let suma = 0;
    let broj = 0;
    for (n; n <= m; n++) {
        if (n % 10 == 3) {
            suma += n;
            broj++;
        }
    }
    return suma / broj;
}
console.log(aSredBrojeva(3, 33));

// 13

function font(n) {
    document.body.innerHTML += `<p style="font-size:${n}px"> NEKI TEKST NEKI TEKST NEKI TEKST </p>`;
}
font(100);


// 14

function istaRecenica(n) {

    for (n = 1; n <= 5; n++) {
        document.body.innerHTML += `<p style="font-size:${n * 10}px"> NEKI TEKST NEKI TEKST NEKI TEKST </p>`;
    }
}
istaRecenica(1);
