let getTodos = (resource) => {
  // 4.
  // 1. kreiramo XML objekat
  let req = new XMLHttpRequest();
  // 2. Otvaranje kreiranog zahteva
  req.open("GET", resource);
  // 3. Saljemo request
  req.send();

  return new Promise((resolve, reject) => {
    req.addEventListener("readystatechange", () => {
      if (req.readyState == 4 && req.status == 200) {
        // callback(req.responseText, undefined);
        // console.log(req.responseText);
        resolve(req.responseText);
      } else if (req.readyState == 4) {
        // console.log("ne mogu da dohvatim podatke");
        // callback(undefined, "Ne mogu da dohvatim podatke");
        reject("ne mogu da dohvatim podatke");
      }
    });
  });
};

getTodos("../JSON/fruits.json")
  .then((data) => {
    console.log(data);
    return getTodos("../JSON/vegetables.json");
  })
  .then((data) => {
    console.log(data);
    return getTodos("../JSON/cereals.json");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("KRAJ");
