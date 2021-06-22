// // Dohvaatanje jednog dokumenta iz kolekcije
// db.collection("customers")
//   .doc("customer-01")
//   .get()
//   .then((doc) => {
//     if (doc.exists) {
//       let t = doc.data();
//       console.log(t);
//     } else {
//       console.log(`No document with id:${doc.id}`);
//     }
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// db.collection("customers")
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// Dohvatanje svih dokumenata iz koleckcije, samo u nekom redosledu

// db.collection("users")
//   .orderBy("prezime", "asc")
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// Dohvatanje svih dokumenata iz koleckcije, samo u nekom redosledu samo se sortira po vise polja

// db.collection("users")
//   .orderBy("ime", "asc")
//   .orderBy("prezime", "asc")
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// dohvatanje ogranicenog broja dokumenata iz kolekcije
// db.collection("users")
//   .orderBy("ime", "asc")
//   .orderBy("prezime", "asc")
//   .limit(2)
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// Dohvatanje dokumenata iz kolekcije koji zadovoljavaju odredjene uslove (filtriranje dokumenata)

// dohvati sve korisnike mlade od 30 godina
// db.collection("customers")
//   .where("age", "<", 100)
//   //   .orderBy("age", "desc") - where i order buy mogu da se komb samo sa kompozitnim indeksom (sva polja navadena u where se nalaze i u orderbuy nakon where-a)
//   //   .orderBy("ime", "desc")
//   //   .limit(2)
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// dohvatanje dokumenata koji ima nesto u nizu

// db.collection("customers")
//   .where("addresses", "array-contains", "Nis")
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// dohvatiti sve korinsnike koji imaju 25 ili 31 godinu
// db.collection("customers")
//   .where("age", "in", [25, 30])
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// dohvatiti sve korisnike koji ziveu nisu ili loznici

// db.collection("customers")
//   .where("addresses", "array-contains-any", ["Nis", "Beograd"])
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });
///////////////////////////////////////////////
// Iz kolekcije customers procitati sve klijente sortirane po imenu
// db.collection("customers")
//   .orderBy("name", "asc")
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// Iz kolekcije customers pocitati sve klijente koji
// imaju adres u nisu
// db.collection("customers")
//   .where("addresses", "array-contains", "Nis")
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// imaju platu evecu ili jednaku od 500

// db.collection("customers")
//   .where("salary", ">=", 500)
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// imaju platu izmedju 300 i 800
// db.collection("customers")
//   .where("salary", ">", 300)
//   .where("salary", "<", 800)
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });
// imaju adresu u nisu ili beogradu

// db.collection("customers")
//   .where("addresses", "array-contains-any", ["Nis", "Beograd"])
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// imaju 22, 25 ili 28 godina
// db.collection("customers")
//   .where("age", "in", [22, 25, 28])
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// imaju platu manju od 900 i imaju 30 godina
// db.collection("customers")
//   .where("salary", "<", "900")
//   .where("age", "==", 30)
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// db.collection("tasks")
//   .doc("task-03")
//   .set({
//     description: "Voznja rolera",
//     due_date: "2021-08-15 11:00:00",
//     priority: false,
//     start_date: "2021-06-15 15:15:00",
//     title: "roleri voznjica",
//   })
//   .then(function () {
//     console.log("uspesno dodat dokument");
//   })
//   .catch(function (error) {
//     console.log(`ne moze se dodati dokument: ${error}`);
//   });

// db.collection("tasks")
//   .doc("task-04")
//   .set({
//     description: "Voznja auta",
//     due_date: "2020-08-15 15:00:00",
//     priority: true,
//     start_date: "2020-06-15 10:15:00",
//     title: "voznja",
//   })
//   .then(function () {
//     console.log("uspesno dodat dokument");
//   })
//   .catch(function (error) {
//     console.log(`ne moze se dodati dokument: ${error}`);
//   });

//  iz kolekcije task procitati sve nazive sortirane po nazivu
// db.collection("tasks")
//   .orderBy("title", "asc")
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// su prioritetni
// db.collection("tasks")
//   .where("priority", "==", true)
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });
// treba da se izvrse u tekucoj godini
// let datum = new Date("2020 - 00 - 00");
// let datum1 = firebase.firestore.Timestamp.fromDate(datum);
// db.collection("tasks")
//   .where("start_date", ">=", datum1)
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

// su zavrseni

// let datum = new Date("2021-06-15");
// let datum1 = firebase.firestore.Timestamp.fromDate(datum);
// db.collection("tasks")
//   .where("due_date", "<", datum1)
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });
// tek treba da pocnu
// let datum = new Date("2021-06-15");
// let datum1 = firebase.firestore.Timestamp.fromDate(datum);
// db.collection("tasks")
//   .where("start_date", ">", datum1)
//   .get()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       let t = doc.data();
//       let id = doc.id;
//       console.log(`Documente #${id}`);
//       console.log(t);
//     });
//   })
//   .catch((err) => {
//     console.log("greska je ", err);
//   });

class Film {
  constructor(z, r, g, o) {
    this.zanr = z;
    this.reziser = r;
    this.godina = g;
    this.ocena = o;
  }
  set zanr(x) {
    this._zanr = x;
  }
  set reziser(x) {
    this._reziser = x;
  }
  set godina(x) {
    this._godina = x;
  }
  set ocena(x) {
    this._ocena = x;
  }
  get zanr() {
    return this._zanr;
  }
  get reziser() {
    return this._reziser;
  }
  get godina() {
    return this._godina;
  }
  get ocena() {
    return this._ocena;
  }
}
let film1 = new Film("Komedija", "Gordan", 2000, 7);
let film2 = new Film("Triler", "George Lucas", 2002, 5);
let film3 = new Film("Sportski", "Gordan", 1999, 3);
let film4 = new Film("Akcija", "George Lucas", 2021, 5);
let film5 = new Film("Drama", "Gordan", 1915, 10);

db.collection("filmovi")
  .doc("film1")
  .set(film1)
  .then(function () {
    console.log("uspesno dodat dokument");
  })
  .catch(function (error) {
    console.log(`ne moze se dodati dokument: ${error}`);
  });
db.collection("filmovi")
  .doc("film2")
  .set(film2)
  .then(function () {
    console.log("uspesno dodat dokument");
  })
  .catch(function (error) {
    console.log(`ne moze se dodati dokument: ${error}`);
  });

db.collection("filmovi")
  .doc("film3")
  .set(film3)
  .then(function () {
    console.log("uspesno dodat dokument");
  })
  .catch(function (error) {
    console.log(`ne moze se dodati dokument: ${error}`);
  });
db.collection("filmovi")
  .doc("film4")
  .set(film4)
  .then(function () {
    console.log("uspesno dodat dokument");
  })
  .catch(function (error) {
    console.log(`ne moze se dodati dokument: ${error}`);
  });
db.collection("filmovi")
  .doc("film5")
  .set(film5)
  .then(function () {
    console.log("uspesno dodat dokument");
  })
  .catch(function (error) {
    console.log(`ne moze se dodati dokument: ${error}`);
  });
