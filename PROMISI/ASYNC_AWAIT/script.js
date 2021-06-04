// fetch vraca promise - asocijacija na promisej e then i catch
// upada u catch granu samo ako je doslo do network error-a
// sled od 4 koraka
// 1. FETCH json fajla
// 2.  return response.json()
// 3. Uzmemo podatke is response.json()
// 4. catch error
fetch("../JSON/fruits.json")
  .then((response) => {
    // reponse je objekat koji nosi sa sobom veliki broj atributa
    console.log("resolved", response);
    return response.json(); // response.json() je promise
  })
  .then((data) => {
    console.log("resolved1", data);
  })
  .catch((err) => {
    console.log("ERROR NE MOZE SE DOCI DO FAJLA", err);
  });

// ASYNC & AWAIT
// Asinhrona funkcija se prosledjuje kao parametar i ima zagrade
// kao rezultat vraca promise
let getTodos = async () => {
  let response = await fetch("../JSON/fruits.json"); // Vraca response zbog cega smo ranije koristili then i catch
  // AWAIT - cekaj dokle god se ne izvrsi komada koja je iza AWAIT
  //console.log(response);
  let data = await response.json();
  response = await fetch("../JSON/vegetables.json");
  data = await response.json();
  return data; // vracam promise, sto znaci da cu za njega morati da radim .then i . catch
};
// KADA JE JEDAN RED NE MORA {} I TACKA ZAREZ
console.log(1);
console.log(2);

getTodos()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected" err));

console.log(3);
console.log(4);
