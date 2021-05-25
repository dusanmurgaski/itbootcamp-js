let blog1 = {
    title: "Krava",
    likes: 10,
    dislikes: 3
}
let blog2 = {
    title: "Ovca",
    likes: 101,
    dislike: 5
}
let blog3 = {
    title: "Svinja",
    likes: 100,
    dislikes: 15
}

let user1 = {
    username: "badbrain",
    age: "23",
    blogs: [blog1, blog2, blog3],
    // Napraviti metod koji ispisuje sve blogove korisnike
    logBlogs: function () {
        this.blogs.forEach(Element => {
            console.log(Element.title);
        });
    },
    sumLikes: function () {
        let sum = 0;
        this.blogs.forEach(Element => {
            sum += Element.likes;
        });
        return sum;
    },
};
user1.logBlogs();

// napraviti niz korisnika gde svaki od korisnika sadrzi niz blogova
// svaki blog u ovom nisu je objekat

let user2 = {
    username: "Jelena",
    age: 17,
    blogs: [blog2, blog3],
    sumLikes: function () {
        let sum = 0;
        this.blogs.forEach(Element => {
            sum += Element.likes;
        });
        return sum;
    },
};

let user3 = {
    username: "Milena",
    age: 30,
    blogs: [blog1],
    sumLikes: function () {
        let sum = 0;
        this.blogs.forEach(Element => {
            sum += Element.likes;
        });
        return sum;
    },
};

let users = [user1, user2, user3];

// 1. Ispisati ismena onih autora koji imaju ispod 18 godina
users.forEach(Element => {
    let godine = Element.age;
    if (godine < 18) {
        console.log(Element.username);
    }
});

//2. Ispisati baslove onih blogova koji imaju vise od 50 lajkova
users.forEach(Element => {
    let userBlogs = Element.blogs;
    // element.blogs.foreach
    userBlogs.forEach(blog => {
        if (blog.likes > 50) {
            console.log(blog.title);
        }
    });
});

// ispisati sve blogove autora ciji je username milena

users.forEach(Element => {
    if (Element.username == "Milena") {
        console.log(Element.blogs);
    }
});

// ispisati imena onih autora koji imaju ukupno vise od 100 lajkova za blogove koje su napisali

users.forEach(Element => {
    let sumLikes = 0;
    Element.blogs.forEach(elementi => {
        sumLikes += elementi.likes;
    });
    if (sumLikes > 100) {
        console.log(Element.username);
    }
});

// 2. nacin
users.forEach(user => {
    if (user.sumLikes() > 100) {
        console.log(user.username);
    }
});

// 3. nacin
let sum = blogs => {
    let s = 0;
    blogs.forEach(blog => {
        s += blog.likes;
    });
    return s;
}
users.forEach(user => {
    let userBlogs = user.blogs;
    let likes = sum(userBlogs);
    if (likes > 100) {
        console.log(user.username);
    }
});

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
// Prvi nacin odredjivanje prosecnog broja poz ocena
let avgGeneral; // Prosecna ocena u odnosu na sve blogove svih korisnika
let sumGeneral = 0;
let countGeneral = 0;
// users.forEach(user => {
//     user.blogs.forEach(element => {
//         sumGeneral += element.likes;
//         countGeneral++;
//     });
// });
// avgGeneral = sumGeneral / countGeneral;

// console.log(avgGeneral);

// 2. drugi nacin odredjivanja prosecnog broja poz ocena


users.forEach(element => {
    sumGeneral += element.sumLikes();
    countGeneral += element.blogs.length;
});
avgGeneral = sumGeneral / countGeneral;
console.log(avgGeneral);


users.forEach(Element => {
    Element.blogs.forEach(blogs => {
        if (blogs.likes > avgGeneral) {
            console.log(blogs.title);
        }
    });
});





