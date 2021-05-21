let blog = {
    title: "Funkcije",
    likes: 21,
    dislikes: 15,
}

let nizBlogova = [
    { title: "Nizovi", likes: 20, dislikes: 10 },
    { title: "grananje", likes: 10, dislikes: 5 }
];

console.log(nizBlogova);


////////////////////////


let blog1 = {
    title: "musaka od tikvica",
    likes: 105,
    dislikes: 30
};
let blog2 = {
    title: "sarma!",
    likes: 15,
    dislikes: 0
};
let blog3 = {
    title: "boranija!",
    likes: 100,
    dislikes: 1
};

let nizBlogova1 = [blog1, blog2, blog3];
// ispis objekata iz niza objekata
nizBlogova1.forEach(Element => {
    console.log(Element);
});

// Ispis naslova iz niza objekata forEach petljom
console.log(blog1.title);
nizBlogova1.forEach(Element => {
    console.log(Element.title);
});

// Ispis naslova iz niza blogova for petljkom

console.log(nizBlogova1[0]);
console.log(nizBlogova1[0].title);

for (let i = 0; i < nizBlogova1.length; i++) {
    console.log(nizBlogova1[i].title);
};

// napraviti arrow funkciju kojoj se prosleduje niz objekata a ona vraca ukupan broj lajkova

let lajkovi = nizObj => {
    let brojlajkova = 0;
    nizObj.forEach(Element => {
        brojlajkova += Element.likes;
    });
    return brojlajkova;
}

console.log(lajkovi(nizBlogova1));

// Napravati arrow funkciju kojoj se prosleduje niz objekata a ona vraca prosecan broj lajkova

let prosekLajkova = nizObj => {
    let brojlajkova = lajkovi(nizObj);
    let prosecanBroj = brojlajkova / nizObj.length;
    return prosecanBroj;
}

console.log(prosekLajkova(nizBlogova1));

// Napravati arrow funkciju kojoj se prosledjuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju vise pozitivnih nego negativnih ocena

let visePoz = nizObj => {
    //let titlovi = "";
    nizObj.forEach(Element => {
        if (Element.likes > Element.dislikes) {
            // titlovi += Element.title;
            console.log(Element.title)
        }
    });
    //return titlovi;
}
visePoz(nizBlogova1);
//console.log(visePoz(nizBlogova1));

// Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona ispisuje sve naslove blogova koji imaju najmanje duplo vise pozitivnih nego negativnih ocena

let duploVise = nizObj => {
    nizObj.forEach(Element => {
        if (Element.likes - Element.dislikes <= Element.likes) {
            console.log(Element.title);
        }
    });
}
duploVise(nizBlogova1);

// Napisati arrow fn kojoj se prosledjuje niz objekata a ona ispisuje sve naslove koji se zavrsavaju sa uzvicnikom
let rec = "Hello!";
let poskednjeSlovo = rec[rec.length - 1];
let poslednjiKarakter = rec.charAt(rec.length - 1);
if (poskednjeSlovo == "!") {
    console.log("ima !");
}
let poslednjiKarakter2 = rec.endsWith("!"); // vraca tacno ako se string zavrsava uzvincikom!

// let uzvicnik = nizObj => {
//     nizObj.forEach(Element => {
//         if (Element.title[Element.title.length - 1] == "!") {
//             console.log(Element.title);
//         }
//     });
// }
// uzvicnik(nizBlogova1);
// Drugi nacin
let uzvicnik = nizObj => {
    nizObj.forEach(Element => {
        if (Element.title.endsWith("!")) {
            console.log(Element.title);
        }
    });
}
uzvicnik(nizBlogova1);

//
