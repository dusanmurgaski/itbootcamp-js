let a = 5;
let b = 7;

if (a == b) {
    console.log(`a je jednako b`);
}
else {
    console.log(`a i b nisu jednaki`);
}

if (a != b) {
    console.log(`Razliciti su`)
}
else {
    console.log(`Jednaki su`);
}



// Prvi zadatak
let x = 15;
let y = 15;
if (x > y) {
    console.log(`X je vece od Y`)
}
else {
    console.log(`X je maje od y`)
}


// Drugi zadatak
let temp = 5;
if (temp >= 0) {
    console.log(`temperatura je u plusu`)
}
else {
    console.log(`temperatura je u minusu`)
}

// Treci zadatak
let m = "m"
let z = "z"
let pol = "m"

if (pol == m) {
    document.body.innerHTML = `<img src="og_icon.png">`
}
else {
    document.body.innerHTML = `<img src="og_icon.png">`

}

// Cetvrti zadatak 
let d = new Date();
let h = d.getHours();

if (h >= 12) {
    console.log("Trenutno je posle podne")
}
else {
    console.log("Trenutno je pre podne")
}

// Peti zadatak
let g = new Date().getFullYear();
console.log(g);
let godine = 1995;
let razlika = g - godine;
console.log(razlika);

if (razlika >= 18) {
    console.log(`Osoba je punoletna`);
}
else {
    console.log(`Osoba nije punoletna`);
}


let p = 10;
let k = 5;
let l = 9;

if (p > k) {
    if (p > l) {
        console.log(`P je najveci broj`)
    }
}





let broj = -5;

if (broj < 0) {
    console.log("broj je manji od nule");
}
else if (broj == 0) {
    console.log("broje je jednak nuli");

}
else {
    console.log("broj je veci od nule");
}
console.log("KRAJ");