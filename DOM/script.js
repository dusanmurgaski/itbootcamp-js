// U DOM-u, svaki HTML element je jedan JS objekt. 
console.log(document);
console.log(typeof document);

console.log((document.URL));
console.log(document.body);
console.log(document.documentElement);
console.log(document.links);

let r1 = document.getElementById("div1");
console.log(r1);

let r2 = document.getElementsByClassName("container");
console.log(r2);

let r3 = document.getElementsByTagName("div");
console.log(r3);

let r4 = document.getElementsByName("link");
console.log(r4);


// HTML collection se moze koristiti u for petlji ali ne i u forEach
for (let i = 0; i < r2.length; i++) {
    console.log(r2[i]);
}
// HTML collection se moze kolektovati u nizove pa onda koristiti forEach

let nr2 = Array.from(r2);
nr2.forEach(element => {
    console.log(element);
});

// elemntima nodeliste se moze pristupiti i forEach petljom


let r5 = document.querySelector(".container");
console.log(r5);

let r6 = document.querySelectorAll(".container");
console.log(r6);

r6.forEach(elem => {
    console.log(elem);
});

let r7 = document.querySelectorAll("a");
console.log(r7);
// document.getElementByName("link");
let r8 = document.querySelectorAll(`[name="link"]`);
console.log(r8);

// quaryselectorALL uvek vraca nodelist



// Dohvatiti prvi paragraf na stranici
let prviParagraf = document.querySelector("p");
console.log(prviParagraf);

// Dohvatiti prvi tag sa klasom "error"

let prviDiv = document.querySelector(`[class="error"]`);
console.log(prviDiv);

// Poslednji red u tabeli
let poslednjiRed = document.getElementsByTagName("tr");
console.log(poslednjiRed);
console.log(poslednjiRed[poslednjiRed.length - 1]);
for (let i = 0; i < poslednjiRed.length; i++) {
    if (i == poslednjiRed.length - 1) {
        console.log(poslednjiRed[i]);
    }
}


// Dohvatiti sve linkove
let sviLinkovi = document.getElementsByTagName("a");
console.log(sviLinkovi);

// Dohvatiti sve slike

let sveSlike = document.getElementsByTagName("img");
console.log(sveSlike);


// menjanje elemenata iz HTML-a
console.log(r1.id);
console.log(r1.innerHTML);
r1.innerHTML += "SADRZAJ JE PROMENJENA DIV1";

let prviLink = document.querySelector("a");
prviLink.href = "https://www.google.com/?client=safari";
// prviLink.target = "_blank";
// prviLink.setAttribute("target", "_blank");
prviLink.style.textDecoration = "none";
prviLink.style.color = "red";

r1.style.color = "blue";

// Selektovati sve paragrafe u i svakom od njih pridodati text VAZNO

let sviParagrafi = document.querySelectorAll("p");

sviParagrafi.forEach(elem => {
    elem.innerHTML += "VAZNO!!!!!";
});

//svim divovima na stranici sa klasom eror dodati po jedan naslov najvece velicine teskm greska

let sviDivoviSaKlasomError = document.querySelectorAll(`div.error`);

sviDivoviSaKlasomError.forEach(elem => {
    elem.innerHTML += `<h1> GRESKA!!!</h1>`;
});

let sveSlike1 = document.querySelectorAll("img");

sveSlike1.forEach(element => {
    element.alt = "ALTERNATIVNI TEXT";
});


sviParagrafi.forEach(elem => {
    elem.style.color = "purple";
});


// svim parnim P zelena pozadnisnka a neparnim crvena
// for (let i = 0; i < sviParagrafi.length; i++) {
//     if (i % 2 != 0) {
//         sviParagrafi[i].style.backgroundColor = "green";
//     }
//     else {
//         sviParagrafi.[i].style.backgroundColor = "red";
//     }
// }

sviParagrafi.forEach((elem, i) => {
    let i = 0;
    if (i % 2 != 0) {
        elem[i].style.backgroundColor = "green";
    }
    else {
        sviParagrafi.[i].style.backgroundColor = "red";
    }

})
