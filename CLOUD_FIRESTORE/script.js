// pristup kolekciji

let coll1 = db.collection("customers");
console.log(coll1);

// pristup dokumentu

let doc1 = coll1.doc("customer-01");
console.log(doc1);

let doc2 = db.doc("customers/customer-02");
console.log(doc2);
/*
za pristup dokumentu:
let doc = db.collection("....").doc("....");
kod dokumenata imamo sledece metode:
    CRUD (Create, Read, Update, Delete)
    doc.set(...) -> Create
    doc.get(...) -> Read
    doc.update(...) -> Update
    doc.delete(...) -> Delete

Sve 4 metode kao rezultat vracaju PROMISE
Nakon poziva, potrebno je lancati
.then().catch()
*/

// 1. Create
let c3 = {
  name: "Laza",
  age: "33",
  addresses: ["beograd", "Loznica", "Novi Sad"],
  salary: 716.22,
}; // JS objekat

db.collection("customers")
  .doc("customer-03")
  .set(c3)
  .then(function () {
    console.log("uspesno dodat dokument");
  })
  .catch(function (error) {
    console.log(`ne moze se dodati dokument: ${error}`);
  });
let date1 = new Date("2021-06-15 11:15:00");
let date2 = new Date("2021-06-15 13:00:00");
db.collection("tasks")
  .doc("task-02")
  .set(
    {
      dodajme: "TARARA",
    },
    { merge: true }
  )
  .then(function () {
    console.log("uspesno dodat dokument");
  })
  .catch(function (error) {
    console.log("ne moze se dodati doukent ");
  });
