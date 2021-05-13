let a = 5;

if (a > 0 && a < 10) {
    console.log("oba logicna uslova su zadovoljena");
}
else {
    console.log("bar jedan uslov nije zadovoljen");
}

let b = 10;
if ((b > 15) || (a < 10)) {
    console.log("Jedan je bar tacan");
}
else {
    console.log("ni jeda ni ni drugi nisu tacni");
}

// negacija 
if (!(b > 11)) {
    console.log("tacno je ");
}
else {
    console.log("Netacno je");
}


// napisati program koji za uneti pol i br godina korisnika ispisuje
// da li je korisni muskarac ili zena i da li je punoletan

let pol = "zenski";
let god = 15;

if (pol == "muski" && god >= 18) {
    console.log("korisnik je muskarac i punoletan je")
}
else if (pol == "muski" && god < 18) {
    console.log("korisnik je muskarac i maloetan je")
}
else if (pol == "zenski" && god >= 18) {
    console.log("korisnik je zensko i punoletan je")
}
else {
    console.log("korisnik je zensko i maloetan je")
}


// Naci koji je najveci od tri uneta broja
// n m i z koricenjem logickih operatora

let n = 10;
let z = 30;
let m = 33;

if (n > z && n > m) {
    console.log("n je najveci broj");
}
else if (z > n && z > m) {
    console.log("z je najveci broj");
}
else {
    console.log("m je najveci broj");
}

// Ispisati na ekranu esktremna temperatura ukoliko je temp manja od - 15
// i ukoliko je veca od 40 

let temp = 44;

if (temp >= 40 || temp <= -15) {
    console.log("temperatura je ekstremna");
}

// Ispisati da li je godina prestupna (godinu preuzeti sa racunara)
// prestupna je ako je deljiva sa 4 i 
// nije deljiva sa 100 ili ako je deljiva sa 400
let vreme = new Date();
let godina = vreme.getFullYear();
console.log(godina);

if ((godina % 4 == 0) && (godina % 100 != 0)) {
    console.log("godina je prestupna");
}
else if (godina % 400 == 0) {
    console.log("godina je prestupna");
}
else {
    console.log("godina nije prestupna");
}


let rOd = 9;
let rDo = 20;
let vOd = 10;
let vDo = 18;

let dan = vreme.getDay();
let sat = vreme.getHours();

if ((dan < 6 && dan > 0) && (sat >= 9 && sat < 20)) {
    console.log("Radi")
}
else if ((dan == 6) || (dan == 0) && (sat >= 10 && sat < 18)) {
    console.log("Radi")
}
else {
    console.log("Ne radi");
}