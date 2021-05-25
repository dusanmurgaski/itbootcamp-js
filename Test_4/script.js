let sportista1 = {
    imePrezime: "Stevan Djukic",
    visina: 1.9,
    timovi: ["Zvezda", "Cibona", "Hemofarm"]
};

let sportista2 = {
    imePrezime: "Milos Obrenovic",
    visina: 1.8,
    timovi: ["Milenijum", "Cortanovci", "Cibona", "Hibiskus"]
};

let sportista3 = {
    imePrezime: "Stefan Markovic",
    visina: 2.2,
    timovi: ["Real Madrid", "Barselona", "Zvezda", "Ugrinovci"]
};


let nizSportista = [sportista1, sportista2, sportista3];
// Napisati funkciju prosečnaVisina kojoj se prosleđuje niz sportista, a ona vraća
// prosečnu visinu sportista. Pozvati funkciju i rezultat ispisati u konzoli.
function prosecnaVisina(nizSportista) {
    let suma = 0;
    let prosecnaVisina = 0;
    nizSportista.forEach(element => {
        suma += element.visina;
    });
    prosecnaVisina = suma / nizSportista.length;
    return prosecnaVisina;
}
console.log(prosecnaVisina(nizSportista));


// Napisati funkciju igraliZaTim kojoj se prosleđuje niz sportista i naziv tima, a funkcija
// prebrojava koliko puta se prosleđeni tim pojavljuje među timovima za koje su
// sportisti igrali i vraća taj broj. Pozvati funkciju i rezultat ispisati u konzoli.

function igraliZaTim(nizSportista, tim) {
    let brojac = 0;
    nizSportista.forEach(element => {
        element.timovi.forEach(timovi => {
            if (timovi == tim) {
                brojac++;
            }
        });
    });
    return brojac;
}
console.log(igraliZaTim(nizSportista, "Zvezda"));

// Napisati funkciju najmanjeTransfera kojoj se prosleđuje niz sportista, a funkcija
// vraća ime i prezime onog sportiste koji je imao najmanji broj transfera (najmanje
// puta je promenio tim). Pozvati funkciju i rezultat ispisati u konzoli. Ukoliko postoji
// više takvih sportista, vratiti ime i prezime bilo kog od takvih sportista.

function najmanjeTransfera(nizSportista) {
    let min = nizSportista[0].timovi.length;
    let minTimova = nizSportista[0].imePrezime;
    nizSportista.forEach(element => {
        if (element.timovi.length < min) {
            min = element.timovi.length;
            minTimova = element.imePrezime;
        }

    });
    return minTimova;
}

console.log(najmanjeTransfera(nizSportista));



// Trener igrače na treningu deli u dva tima kako bi se što bolje pripremili za utakmicu.
// Kada trener dobije spisak sportista (niz sportista) on ih deli na sledeći način:
// Ukoliko je na spisku paran broj igrača, trener u prvi tim stavlja prvu polovinu
// igrača sa spiska, dok drugi tim čine igrači sa druge polovine liste
// Ukoliko je na spisku neparan broj igrača, trener u prvi tim stavlja jednog
// igrača više nego u drugi tim.
// Napisati funkciju višiTimPodela, kojoj se prosleđuje niz sportista a funkcija ispisuje
// na ekranu tekst “Viši je prvi tim” ukoliko je prosečna visina igrača u prvom timu veća
// od prosečne visine igrača u drugom timu. U suprotnom funkcija na ekranu ispisuje
// “Viši je drugi tim”. Ako su te dve prosečne visine iste, funkcija ispisuje tekst “Oba
// tima su u proseku iste visine”. Pozvati funkciju.



function visiTimPodela(nizSportista) {
    let tim1 = [];
    let tim2 = [];
    if (nizSportista.length % 2 == 0) {
        for (let i = 0; i < nizSportista.length; i++) {
            if (i < nizSportista.length / 2) {
                tim1 += nizSportista[i];
            }
            else {
                tim2 += nizSportista[i];
            }
        }

    }
    else if (nizSportista.length % 2 != 0) {
        for (let j = 0; j < nizSportista.length; j++) {
            if (j <= nizSportista.length / 2) {
                tim1 += nizSportista[j];
            }
            else {
                tim2 += nizSportista[j];
            }
        }
    }
    console.log(tim1);
}
visiTimPodela(nizSportista);

