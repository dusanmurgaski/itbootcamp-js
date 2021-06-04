// Dohvatiti dugme;
let dugme = document.querySelector("button");

// Dodati event listener na taj element;
// dugme.AddEventListener("naziv eventa, callback funkcija")
dugme.addEventListener("click", () => {
    console.log("kliknuli ste button");
});


let dugmeDva = document.getElementById("dupliKlik");
// let dugmeDva = document.querySelector("#dupliKlik");
dugmeDva.addEventListener("dblclick", () => {
    console.log("kliknuli ste button DVA");
});
// DRUGI NACIN DODAVANJA EVENT
function klikni() {
    console.log("klinuti TRI");
}

// Napraviti dugme klikom na koje se u komzoli upisuje vrednost brojaca br. Brojac na pocetku ima vrednost 1 a svaki put kada se klikne na dugme povecati vrednost brojaca za jedan

let dugmeBr = document.getElementById("brojac");
let br = 0;
dugmeBr.addEventListener("click", () => {
    br++;
    console.log(br);
});

// napraviti paragfat i vrenost prethnodene funckije ispistavti u paragraf umesto u komzoli

let drugiZa = document.getElementById("brojac2");
let paragraf = document.getElementById("drugiZadatak");
br = 0;
paragraf.innerHTML = br;
drugiZa.addEventListener("click", () => {
    br++;
    paragraf.innerHTML = br;
});



let dugmePlus = document.getElementById("plus");
let dugmeMinus = document.getElementById("minus");
let spanic = document.getElementById("spanPlusMinus");
br = 0;
spanic.innerHTML = br;

dugmePlus.addEventListener("click", () => {
    spanic.style.color = "black";
    br++;
    spanic.innerHTML = br;
});
dugmeMinus.addEventListener("click", () => {
    spanic.style.color = "black";
    br--;
    if (br <= 0) {
        br = 0;
        spanic.style.color = "red";
    }
    spanic.innerHTML = br;
});


let inputPolje = document.getElementById("ImePrezime");
let inputDugme = document.getElementById("inputDugme");
let inputPar = document.getElementById("inputPar");
inputDugme.addEventListener("click", () => {
    let ime = inputPolje.value;
    inputPar.innerHTML = `Zdravo! ${ime}`;
});

// dopuniti dodavanjem eventa i proizvljnog alerta kada se klikne dva puta na dugme
inputDugme.addEventListener("dblclick", () => {
    let ime = inputPolje.value;
    alert(`hello ${ime}`);
});


// drugi nacin
let inputPrezime = document.getElementById("prezime");
let btnPrezime = document.getElementById("posaljiPrezime");
let pIspisiPrezime = document.getElementById("prikaziPrezime");

btnPrezime.addEventListener("click", f => {
    f.preventDefault();
    console.log(f);
    pIspisiPrezime.innerHTML = `Uneli ste prezime ${inputPrezime.value}`;
});


let kvadrirajInput = document.getElementById("kvBroj");
let kvadrirajBtn = document.getElementById("kvBtn");
let prepoloviInput = document.getElementById("prepolovi");
let prepoloviBtn = document.getElementById("prepoloviBtn");
let poluprecnikInput = document.getElementById("poluprecnik");
let poluprecnikBtn = document.getElementById("poluprecnikBtn");
let rezultatKvadriraj = document.getElementById("rezultatKvadriraj");
let rezultatPrepolovi = document.getElementById("rezultatPrepolovi");
let rezultatPoluprecnik = document.getElementById("rezultatPoluprecnik");

// Kvadriraj
kvadrirajBtn.addEventListener("click", e => {
    e.preventDefault();
    rezultatKvadriraj.innerHTML = `${Math.pow(kvadrirajInput.value, 2)}`;
});
// Prepolovi
prepoloviBtn.addEventListener("click", e => {
    e.preventDefault();
    rezultatPrepolovi.innerHTML = `${prepoloviInput.value / 2}`;

});
// Poluprecnik
poluprecnikBtn.addEventListener("click", e => {
    e.preventDefault();
    rezultatPoluprecnik.innerHTML = `${3.14 * Math.pow(poluprecnikInput.value, 2)}`;
});


