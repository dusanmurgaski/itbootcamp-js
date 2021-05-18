//Dat je niz stavki za kupovinu (članovi niza su stringovi).
// Prolaskom kroz niz napraviti neuređenu listu i
//  ispisati je u html dokument.


let namirnice = ["kukuruz", "brasno", "so", "voda"];

let kupovina = namirnice => {
    let uLista = "<ul>";
    namirnice.forEach(e => {
        document.body.innerHTML += `<li> ${e}</li>`;
    });
    uLista += namirnice;
    uLista += "</ul>";
}


kupovina(namirnice);


// u nizu stringova ispisati sve elemente koji imaju :
// maksimalnu duzinu 
// i minimalnu duzinu


let imena = ["stefan", "mikola", "djordje", "Milijana", "vuk", "Nenad", "vladimir", "ana"];


let maxDuzinaNiza = niz => {
    let maxDuzina = niz[0].length;
    niz.forEach(elem => {
        if (elem.length > maxDuzina) {
            maxDuzina = elem.length;
        }
    });
    return maxDuzina;
}

console.log(maxDuzinaNiza(imena));

let ispisStringSvojstva = (niz, svojstvo) => {
    let md = svojstvo(niz);
    niz.forEach(elem => {
        if (elem.length == md) {
            console.log(elem);
        }
    });
}

let minDuzinaNiza = niz => {
    let minDuzina = niz[0].length;
    niz.forEach(elem => {
        if (elem.length < minDuzina) {
            minDuzina = elem.length;
        }
    });
    return minDuzina;
}

ispisStringSvojstva(imena, maxDuzinaNiza); // maxDuzinaNiza je callback funkcija
ispisStringSvojstva(imena, minDuzinaNiza); // minDuzinaNiza je callback funkcija



let zad24a = (a, b) => {
    let n = a.length; // let n = b.length;
    let c = [];
    for (let i = 0; i < n; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }
    return c;
}

let zad24b = (a, b) => {
    let n = a.length;
    let c = [];
    for (let i = 0; i < n; i++) {
        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];
    }
    return c;
}

let zad24c = (a, b) => {
    let n = a.length;
    let c = [];
    let j = 0;
    for (let i = 0; i < n; i++) {
        c[j] = a[i];
        j++;
        c[j] = b[i];
        j++;
    }
    return c;
}



let a = [4, 3, -4, 1];
let b = [5, 2, 1, 6];
let c = zad24a(a, b);
console.log(c);

c = zad24b(a, b);
console.log(c);

c = zad24c(a, b);
console.log(c);

let zad25 = (a, b) => {
    let n = a.length;
    let c = [];
    for (let i = 0; i < n; i++) {
        c[i] = a[i] * b[i];
    }
    return c;
}
let zad 26 = a => {
    let n = a.length;
    let b = [];
    for (let i = 0; i < n / 2; i++) {
        b[i] = (a[i] + a[n - 1 - i]) / 2;
    }
}

