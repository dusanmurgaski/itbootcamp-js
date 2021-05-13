let i;
for (let i = 1; i <= 5; i++) {
    console.log(` Na redu je broj: ${i}`);
}


// Parne brojeve od 1 do 20
// Prvi nacin

for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Drugi nacin
for (i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Ispisati brojeve od 1 do 20

for (i = 1; i <= 20; i++) {
    console.log(i);
}

// ispisati brojeve od 20 do 1
for (i = 20; i >= 1; i--) {
    console.log(i);
}

//ispisati dvostruku vrednost brojeva od 5 do 15
for (i = 5; i <= 15; i++) {
    console.log(i * 2);

}
// Odrediti sumu brojeva od 1 do n

let n = 50;
let suma = 0;
for (i = 1; i <= n; i++) {
    suma += i;
}
console.log(suma);

// odrediti sumu brojeva od n do m
n = 1;
m = 100;
suma = 0;

for (n; n <= m; n++) {
    suma += n;

}
console.log(suma);

// odrediti proizvod brojeva od n do m

n = 3;
m = 5;
p = 1;
for (n; n <= m; n++) {
    p *= n;
}
console.log(p);


// odrediti sumu kvadrata brojeva od n do m

n = 2;
m = 3;
sumaKv = 0;
for (n; n <= m; n++) {
    sumaKv += n ** 2;
}
console.log(sumaKv)

// preuzeti prozvolje 3 slike sa racunara i for petljom ih prikazati na ekranu
// uz pomoc iteratora
m = 3;
for (i = 1; i <= m; i++) {
    document.body.innerHTML += `<img src="slike/${i}.png">`
}


//Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100

p = 1;
for (i = 20; i <= 100; i++) {
    if (i % 11 == 0) {
        p *= i
    }
}
console.log(p);


// Prebrojati i izracunati sumu brojeva od
// n do m kojima je poslednja cifra 4 i parni su

let prebrojani = 0;
let sumaBr = 0
n = 5;
m = 100;
a = 4;
for (i = n; i <= m; i++) {
    if (i % 10 == 4) {
        sumaBr += i;
        prebrojani += 1;
    }
}
console.log(`suma je ${sumaBr}`);
console.log(`prebrojani brojevi: ${prebrojani}`);

// Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 5;
m = 100;
a = 3;
suma = 0;

for (i = n; i <= m; i++) {
    if (i % a != 0) {
        suma += i;

    }
}
console.log(suma);

// Odrediti proizvod brojeva od n do m koji nisu deljivi brojem a
n = 5;
m = 10;
a = 3;
p = 1;

for (i = n; i <= m; i++) {
    if (i % a == 0) {
        p *= i;
    }
}
console.log(p);

//napraviti tabelu sa 6 reddova. Svaki red tabele trbea da ima po dve celije
//Svakom parnom redu dodati klasu obojen
// Koriscenjem cssa klasi obojen postaviti proizvoljnu pozadinu

let redovi = 10;
let tabela = `<table>`
for (i = 1; i <= redovi; i++) {
    if (i % 2 == 0) {
        tabela += `<tr class="obojen">`

    }
    else {

        tabela += `<tr>`;
    }
    tabela += `<td> Tekst </td>
              <td> Tekst </td>
              </tr>` ;
}

tabela += `</table > `;
document.body.innerHTML += tabela;

//////////////////////////
let element = document.getElementById("naslov");
element.innerHTML = "OVO JE NASLOV" + element.innerHTML;



// Drugi nacin
let htmlTabela = document.getElementById("mojaTabela");

for (i = 1; i <= redovi; i++) {
    if (i % 2 == 0) {
        htmlTabela.innerHTML +=
            `<tr class="obojen"><td> Tekst</td> <td> Tekst</td> </tr>`;
    }
    else {
        htmlTabela.innerHTML +=
            `<tr><td> Tekst</td> <td> Tekst</td> </tr>`;

    }
}





// koristeci for petlju kreirati neuredjenu listu 
// sa ugnjezdenima elemntima kao sto je prikazano na slici
let brI = 10;
let Lista = `<ul>`;
for (i = 1; i <= brI; i++) {
    if (i % 3 == 0) {

    }
    else {


        Lista += `<li> Element ${i} </li>`;
    }
}

Lista += `</ul > `;
document.body.innerHTML += Lista;


// Kreirati 64 span elemenata

let brojSpanova = 64;

for (i = 1; i <= 64; i++) {
    if (i % 8 == 1) {
        document.body.innerHTML += `<br> <br>`
    }
    document.body.innerHTML += `<span>${i} </span>`;


}


