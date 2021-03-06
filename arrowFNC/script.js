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



// Dobili ste pla??enu programersku praksu u trajanju od n meseci.
//  Prvog meseca, plata ??e biti a dinara, a ako budete vredno radili
// svakog narednog meseca ??ete dobiti povi??icu od d dinara. 
// Brojeve n, a i d odre??ujete sami.
//Napi??ite funkciju kojoj se prosle??uju brojevi n i a. 
///Funkcija treba da vrati vrednosti koliko ??ete ukupno navca zaraditi, 
//ukoliko svakog meseca budete dobijali povi??icu.
///Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vra??a).

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
//??to kra??e vreme pre??e stazu na kojoj se nalazi pokretni most. 
// Takmi??aru ove ekipe od polazne ta??ke do mosta treba t sekundi. 
// Ta??no p sekundi od kada takmi??ar mo??e da krene sa polazne ta??ke 
// (tj. od po??etka merenja) most po??inje da se podi??e. Od trenutka 
// podizanja pa do spu??tanja mosta proti??e n sekundi i prelaz preko
// mosta za to vreme nije mogu??. Nakon toga most ostaje spu??ten. 
//Takmi??ari za ??ekanje kod mosta dobijaju negativne poene, 
//pa je tim re??io da napravi program koji ??e im ta??no odrediti 
//u kojoj sekundi treba da po??u sa startne pozicije kako ne bi 
//dobijali negativne poene. Pomozite timu da napravi funkciju na
//osnovu prosle??enih vrednosti t, p i n. Funkcija vra??a koliko 
//sekundi nakon po??etka merenja vremena treba da po??e, kako bi 
//pro??li poligon bez zaustavljanja.
//npr: t=15, p=20, n=25, ??ekanje je 0s
//npr: t=15, p=10, n=12, ??ekanje je 7s



let trcanje = (t, p, n) {


}



