
let dani = new Date();
let dan = dani.getDay();

console.log(dan);

if (dan >= 6) {
    console.log("vikend je")
}
else {
    console.log("Radni dan je")
}



let h = dani.getHours();

if (h < 12) {
    console.log("dobro jutro");
}
else if (h < 18) {
    console.log("dobar dan");
}
else {
    console.log("dobro vece");
}


if (h < 9) {
    console.log("firma ne radi");
}
else if (h < 17) {
    console.log("firma radi");
}
else {
    console.log("firma ne radi");
}


let poeni = 50;
if (poeni < 50) {
    console.log("pao je ispit")
}
else if (poeni >= 50, poeni <= 59) {
    console.log(6);
}
else if (poeni >= 60, poeni <= 69) {
    console.log(7);
}
else if (poeni >= 70, poeni <= 79) {
    console.log(8);
}
else if (poeni >= 80, poeni <= 89) {
    console.log(9);
}
else {
    console.log(10);
}


// ynesite dva datuma i videti ikoji je raniji
let dat1 = "2021-04-23";
let dat2 = "2020-05-01";

if (dat2 > dat1) {
    console.log(`${dat1} je bio pre ${dat2}`);
}
else if (dat2 < dat1) {
    console.log(`${dat2} je bio pre ${dat1}`);
}
else {
    console.log("datumi su isti")
}

// 2 nacin

let dan1 = 02;
let mes1 = 01;
let god1 = 2022;

let dan2 = 01;
let mes2 = 01;
let god2 = 2022;

if (god1 > god2) {
    console.log("datum 2 je raniji");
}
else if (god2 > god1) {
    console.log("datum 1 je raniji");
}
else if (mes1 > mes2) {
    console.log("datum 2 je raniji");
}
else if (mes2 > mes1) {
    console.log("datum 1 je raniji");
}
else if (dan1 > dan2) {
    console.log("datum 2 je raniji");
}
else if (dan2 > dan1) {
    console.log("datum 1 je raniji");
}
else {
    console.log("datum je isti");
}

///////////////////////////////

let stepeni = -10;

if (stepeni < 0) {
    console.log("ispod 0 stepeni");
}
if (stepeni < 10) {
    console.log("ispod 10 stepeni");
}
if (stepeni < 20) {
    console.log("ispod 20 stepeni");
}
else {
    console.log("iznad 20 stepeni ili 20 stepeni");
}


////// Ugnjezdavanje

let pol = "m";
let god = "20";

if (pol == "z") {
    console.log("osoba zenskog pola");

    if (god >= 18) {
        console.log("osoba je zenka punoletna");
    }
    else {
        console.log("osoba je zenka maloletna");
    }
}
else {


    if (god >= 18) {
        console.log("osoba je muskog punoletna");
    }
    else {
        console.log("osobaj e mal i muska");
    }
}


// za unet pocetak i kraj radnog vremena dva lekara ispisati DA ukoliko se njene smene preklapaju u suprotnom ispisati ne 
let p1 = 14;
let k1 = 20;
let p2 = 8;
let k2 = 16;

if (k1 < p2) {
    console.log("NE");
}
else if (k2 < p1) {
    console.log("NE")
}
else {
    console.log("DA");
}



let num1 = 5;
let num2 = 3;
if (num1 % num2 == 0) {
    console.log(` ${num1} je deljiv brojem ${num2}`)
}
else {
    console.log("br 1 nije deljiv br 2 ");
}



