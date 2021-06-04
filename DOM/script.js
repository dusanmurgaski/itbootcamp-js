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

// neka je n broj paragrafa u dodatum dokumentu. u svakoom i-tom dodati broj i2 za svako i=1,2,...n.
sviParagrafi.forEach((elem, i) => {
    elem.innerHTML += (i + 1) ** 2;
})


// svim slikama dodati alternativni tekst
let sveSlike1 = document.querySelectorAll("img");

sveSlike1.forEach(element => {
    element.alt = "ALTERNATIVNI TEXT";
});

// svim p postaviti atribut style tako da budu ljubicasti
sviParagrafi.forEach(elem => {
    elem.style.color = "purple";
});


// svim parnim P zelena pozadnisnka a neparnim crvena
for (let i = 0; i < sviParagrafi.length; i++) {
    if (i % 2 != 0) {
        sviParagrafi[i].style.backgroundColor = "green";
    }
    else {
        sviParagrafi[i].style.backgroundColor = "red";
    }
}


// svim linkovima dati  padding fontsize 18 itd...
for (let i = 0; i < sviLinkovi.length; i++) {
    sviLinkovi[i].style.padding = "5px";
    sviLinkovi[i].style.textDecoration = "none";
    sviLinkovi[i].style.fontSize = "8px";
    if (i % 2 == 0) {
        sviLinkovi[i].style.backgroundColor = "green";
        sviLinkovi[i].style.color = "purple";
    }
    else {
        sviLinkovi[i].style.backgroundColor = "blue";
        sviLinkovi[i].style.color = "white";
    }
}


// svim slikama na stranici koji su .png postaviti okvir na debiljinu 2 px i crvenu boju
// sveSlike1 = document.querySelectorAll("img[src*='.png']");
// for (let i = 0; i < sveSlike1.length; i++) {
//     sveSlike1[i].style.border = "solid red 20px";
// }
// DRUGI NACIN
// let slike = document.querySelectorAll("img");
// slike.forEach(element => {
//     if (element.src.includes(".png") || element.src.includes(".PNG")) {
//         element.style.border = "2px solid red";
//     }
// });
// // svim likovima promeniti _blank i _top
// for (let i = 0; i < sviLinkovi.length; i++) {
//     if (sviLinkovi[i].target == "_blank") {
//         sviLinkovi[i].target = "_top";
//     }
//     else {
//         sviLinkovi[i].target = "_blank";
//     }
// }


// Napraviti niz od najmanje tri imena. Poric nizom i ismena ispisati
// Svako u novom linku. Ako ime pocinje na slovo s link se otvara u novom tabu inace se otvara na istoj stranici
// u listi kao stavke liste naizmenicno stavke liste obojite sa deve raz boje
// u jednoj koloni tabele. postaviti okvir marginu i padding celijama tabele



let niz = ["stefan", "mladen", "jelena", "marko"];

niz.forEach(elem => {
    if (elem[0] == "s") {
        document.body.innerHTML += `<a href="#" target="_blank"> ${elem} </a>`
    }
    else {
        document.body.innerHTML += `<a href="#"> ${elem} </a>`
    }
});

let result = "<ul>";
niz.forEach((ime, i) => {
    if (i % 2 == 0) {
        result += `<li style="color: blue"> ${ime}</li>`;
    }
    else {
        result += `<li style="color: red"> ${ime}</li>`;
    }
});
result += "</ul>";

document.body.innerHTML += result;


// dohvatanje roditeljskog cvora 
linkovi = document.querySelectorAll("a");

linkovi.forEach(link => {
    console.log(link.parentNode);
    link.parentNode.style.border = "2px solid red";
});

// dohvatanje deteta nekog cvora
let prviDiv1 = document.querySelector("div.container");

console.log(prviDiv.childNodes[0]);

prviDiv.childNodes.forEach(child => {
    console.log(child);
});
let n = prviDiv.childNodes.length;
for (let i = 0; i < n; i++) {
    console.log(prviDiv.childNodes[i]);
}
let link1 = prviDiv.childNodes[1];
console.log(link1.previousSibling);
console.log(link1.nextSibling);
console.log(link1.nextSibling.nextSibling);



// menjanje klasa elemenata


// svim parnim paragrafima na stranici dodati klasu error a svim neparnim dodati klasu sucess

sviParagrafi = querySelectorAll("p");

for (let i = 0; i < sviParagrafi.length; i++) {
    if (i % 2 != 0) {
        sviParagrafi[i].classList.add("success");
    }
    else {
        sviParagrafi[i].classList.add("error");
    }
}