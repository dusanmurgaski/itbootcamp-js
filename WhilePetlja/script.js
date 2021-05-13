// ispis brojeva od 1 do 5

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let a = 1;

while (a <= 5) {
    console.log(a);
    a++;
}
console.log(`vrednost promenljive a nakon while petlje jednaka je : ${a}`)


//zadaci

// 1. Ispisati brojeve od 1 do 20;
let b = 1;
while (b <= 20) {
    console.log(b);
    b++;
}

// ispisati u istom redu
b = 1;
let res = "";

while (b <= 20) {
    res = res + b + " ";
    b++;

}
console.log(res);
//brojev od 20 do 1
b = 20

while (b >= 1) {
    console.log(b);
    b--;
}

b = 1;
while (b <= 20) {
    console.log(21 - b);
    b++;
}


// parni brojevi od 1 do 20
// prvi nacin
b = 1

while (b <= 20) {
    if (b % 2 == 0) {
        console.log(b);
    }
    b++;
}
// drugi nacin 
b = 1;
while (b <= 10) {
    console.log(2 * b);
    b++;
}
// treci nacin
b = 2;
while (b <= 20) {
    console.log(b);
    b += 2;
}



// kreirati n paragrafa sa proizvoljnim tekstom i naizmenicno ih obojiti u tri razlicite boje 


document.body.innerHTML += "<p> jedan d</p>"

let i = 1;
let n = 20;
while (i <= n) {
    if (i % 3 == 1) {
        document.body.innerHTML += `<p style="color: red;"> Ovo je ${i}. paragraf</p>`
    }
    else if (i % 3 == 2) {
        document.body.innerHTML += `<p style="color: blue;"> Ovo je ${i}. paragraf</p>`
    }
    else {
        document.body.innerHTML += `<p style="color: green;"> Ovo je ${i}. paragraf</p>`
    }

    i += 1
}

// kreirati n proizvljnoih slika i saviti im naizmenicno dva razlicita okvira

i = 1;
n = 10;
while (i <= n) {
    if (i % 2 == 1) {
        document.body.innerHTML += `<img src ="slika.png" class="okvir1">`;
    }
    else {
        document.body.innerHTML += `<img src ="slika.png" class="okvir2">`;
    }
    i += 1;
}

// ciklicno prikazivanje tri slike
i = 1;
n = 7;
while (i <= n) {
    let ost = i % 3;
    document.body.innerHTML += `<img src="slike/${ost}.png">`;
    i += 1;
}

// 6. zadatak
// odrediti sumu brojeva od 1 do 100

i = 1;
let suma = 0;
while (i <= 100) {
    suma += i;
    i += 1;
}
console.log(suma);

//
let suma1 = 100 * (100 + 1) / 2
console.log(suma1);


// odrediti prozivod broejva od 1 do 5

i = 1;
let proizvod = 1;
while (i <= 5) {
    proizvod *= i;
    i += 1;
}
console.log(proizvod);


//
// odrediti sumu brojeva od 1 do n

i = 1;

suma = 0;
n = 100;
while (i <= n) {
    suma += i;
    i += 1;
}
console.log(suma);

// odrediti sumu brojeva od n do m

n = 5;
m = 10;
suma = 0;
while (n <= m) {
    suma += n;
    n += 1;
}
console.log(suma);

// odrediti proizovd brojeva od n do m
n = 5;
m = 11;
let p = 1;
while (n <= m) {
    p *= n;
    n += 1;
}
console.log(p);


// Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
n = 3;
m = 10;
let sParnihKv = 0;
let sNeKub = 0;


while (n <= m) {
    if (n % 2 == 0) {
        sParnihKv += Math.pow(n, 2);

    }
    else {
        sNeKub += Math.pow(n, 3);
    }
    n += 1;
}
console.log(sParnihKv);
console.log(sNeKub);

///////////////////////////////




let k = 10;
let brDeljivih = 0;
i = 1;
while (i <= k) {
    if (k % i == 0) {
        brDeljivih++;
    }
    i += 1;
}
console.log(brDeljivih);

// 12. zadatak
// odrediti da li je dati prirodan broj n prost, 
//broj je prost samo ako je deljiv 
//samo sa jedan i samim sobom

if (brDeljivih == 2) {
    console.log("broj je prost");
}
else {
    console.log("broj nije prost");
}

// Drugi nacin


n = 15;
i = 2;
while (i <= n / 2) {
    if (n % i == 0) {
        console.log(`broj ${n} nije prost.`)
        break;
    }
    i += 1;

}
if (i > n / 2) {
    console.log(`broj ${n} je prost.`)
}

// Treci nacin 
n = 24;
i = 2;
let prime = true;
while (prime && (i <= n / 2)) {
    if (n % i == 0) {
        prime = false;
    }
    i++;
}
if (prime) {
    console.log("Broj n je prost");
}
else {
    console.log("Broj n nije prost.");
}






