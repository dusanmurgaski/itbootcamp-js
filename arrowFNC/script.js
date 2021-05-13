function suma(a, b) { // deklaracija imenovanja funkc
    return a + b;
}
console.log(suma(1, 2)); // poziv funkcije sa vrednostima



// Anonimne funkcije 

let suma2 = function (a, b) {
    return a + b;
} // deklaracija anonimne funkcije


console.log(suma2(3, 4)); // poziv anonimne funkcije


// Arrow funkcije
let suma3 = (a, b) => {
    return a + b;
}
console.log(suma3(3, 4));



// 3 zadatak
let neparan = (n) => {
    if (n % 2 == 0) {
        console.log("paran");

    }
    else {
        console.log("Neparan");
    }
}
neparan(3);

// 4 zadatak
let maks2 = (a, b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(maks2(1, 5));

// maks4

let maks4 = (maks2, c, d) => {
    let veciCd = 0;
    if (c > d) {
        veciCd += c;
    }
    else {
        veciCd += d;
    }
    if (veciCd > maks2) {
        return veciCd;
    }
    else {
        return maks2;
    }
}
console.log(maks4(5, 5, 10));


// 5 zadatak

let slika = (link) => {
    document.body.innerHTML += `<img src="${link}">`
}
slika("https://media-exp1.licdn.com/dms/image/C560BAQG7oROAjKhzvg/company-logo_200_200/0/1555569807308?e=2159024400&v=beta&t=qJ4k3xBqj1qdBDdxCyI2IKwhV1Vspnxq2wQ2JACAntU");

// prvi nacin

let slika1 = (putanja) => `<img src="${putanja}">`;
document.body.innerHTML += slika1("https://media-exp1.licdn.com/dms/image/C560BAQG7oROAjKhzvg/company-logo_200_200/0/1555569807308?e=2159024400&v=beta&t=qJ4k3xBqj1qdBDdxCyI2IKwhV1Vspnxq2wQ2JACAntU");

// 3 nacin 
let slika2 = putanja => `<img src="${putanja}">`;
document.body.innerHTML += slika2("https://media-exp1.licdn.com/dms/image/C560BAQG7oROAjKhzvg/company-logo_200_200/0/1555569807308?e=2159024400&v=beta&t=qJ4k3xBqj1qdBDdxCyI2IKwhV1Vspnxq2wQ2JACAntU");



// 6 zadatak

let boja = (n) => {
    document.body.innerHTML += `<p style="color:${n}"> neki tekst neki tekst </p>`;
}
boja("red");

// 7 zadatak

let sedmiDan = (n) => {
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
    else {
        console.log("Nije unet odgovarajuci broj")
    }
}
sedmiDan(6);

// 8 zadatak

let deljiv




// 4 zadatak maks2 maks2   return if (a>b) {a} else {b}
let maksDva = (a, b) => (a > b) ? a : b;

console.log(maks2(3, 4));

let maksCet = (a, b, c, d) => maksDva(maksDva(a, b), maksDva(c, d));
console.log(maksCet(1, 5, 7, 111));
// let maksCet = (a, b, c, d) => maksDva(maksDva(maksDva(a, b), c), d);



// neparan
let neparanB = n => {
    if (n % 2 == 1) {
        return true;
    }
    else {
        return false;
    }
}
console.log(neparanB(5));
console.log(neparanB(6));

let neparan2 = n => (n % 2 == 1);
console.log(neparan2(7));
console.log(neparan2(8));



// Dobili ste plaćenu programersku praksu u trajanju od n meseci.
//  Prvog meseca, plata će biti a dinara, a ako budete vredno radili
// svakog narednog meseca ćete dobiti povišicu od d dinara. 
// Brojeve n, a i d određujete sami.
//Napišite funkciju kojoj se prosleđuju brojevi n i a. 
///Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, 
//ukoliko svakog meseca budete dobijali povišicu.
///Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

// n = 10;
// a = 1000;
// d = 500;

let plata = (n, a) => {
    let sumaNovca = 0;
    let d = 500;
    for (i = 1; i <= n; i++) {
        sumaNovca += a + d;
    }
    return sumaNovca - d;
}
console.log(plata(10, 1000));





// Na igrama bez granica, ekipi je postavljen zadatak da za 
//što kraće vreme pređe stazu na kojoj se nalazi pokretni most. 
// Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. 
// Tačno p sekundi od kada takmičar može da krene sa polazne tačke 
// (tj. od početka merenja) most počinje da se podiže. Od trenutka 
// podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko
// mosta za to vreme nije moguć. Nakon toga most ostaje spušten. 
//Takmičari za čekanje kod mosta dobijaju negativne poene, 
//pa je tim rešio da napravi program koji će im tačno odrediti 
//u kojoj sekundi treba da pođu sa startne pozicije kako ne bi 
//dobijali negativne poene. Pomozite timu da napravi funkciju na
//osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko 
//sekundi nakon početka merenja vremena treba da pođe, kako bi 
//prošli poligon bez zaustavljanja.
//npr: t=15, p=20, n=25, čekanje je 0s
//npr: t=15, p=10, n=12, čekanje je 7s



let trcanje = (t, p, n) {


}



