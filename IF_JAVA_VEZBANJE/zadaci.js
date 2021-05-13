// zadatak br 13
let broj1 = 14;

if (broj1 % 2 == 0) {
    console.log("broj je paran")
}
else {
    console.log("broj nije deljiv sa 2");
}

// zadatak br 15

let n = 5;
let m = 5;

if (n > m) {
    console.log(n - m);
}
else {
    console.log(m - n);
}

// zadatak br  16

let unetiBroj = -3

if (unetiBroj <= 0) {
    console.log(unetiBroj - 1)
}
else {
    console.log(unetiBroj + 1);
}

// zadatak br 17
let prvi = 155;
let drugi = 2;
let treci = 67;

if (prvi > drugi) {
    if (prvi > treci) {
        console.log("prvi je najveci broj");
    }
}
else if (prvi < treci) {
    console.log("prvi broj je najmanji")
}
if (drugi > prvi) {
    if (drugi > treci) {
        console.log("drugi broj je najveci")
    }
}
else if (drugi < treci) {
    console.log("drugi broj je najmanji")
}
if (treci > prvi) {
    if (treci > drugi) {
        console.log("treci broj je najveci")
    }
}
else if (treci < drugi) {
    console.log("treci broj je najmanji")
}


// zadatak br 18
let ceobr = -14;

if (ceobr % 1 == 0) {
    console.log("broj je ceo");
}
else {
    console.log("broj nije ceo");
}


// zadatak br 20


let nm = 20;
let nn = 39;

if (nm > nn) {
    if (nm % 2 == 0)
        console.log("nm je veci broj i deljiv je sa dva")
    else {
        console.log("nm je veci broj ali nije deljiv sa dva")
    }

}
else if (nn > nm) {
    if (nn % 2 == 0) {
        console.log("nn je veci i deljiv je sa dva")
    }
    else {
        console.log("nn je veci ali nije deljiv sa dva")
    }
}


