let niz = [3, 2, 5, 1, 5, 2, 6, 7];
// napraviti funkciju koja sumira brojeve i ispisuje u konzoli koriscenjem callback fje

function sumaBr(a, b) {
    suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    b(suma);
}
sumaBr(niz, dsds => {
    console.log(dsds);
});





let blog1 = {
    title: "musaka od tikvica",
    likes: 1,
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


// Napravati arrow funkciju kojoj se prosledjuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju vise pozitivnih nego negativnih ocena

let nizovi = nizObj => {
    nizObj.forEach(element => {
        if (element.likes > element.dislikes) {
            console.log(element.title)
        }
    });
}

nizovi(nizBlogova1);
