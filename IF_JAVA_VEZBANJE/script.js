
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

