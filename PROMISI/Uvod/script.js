// 1. kreiramo XML objekat
let req = new XMLHttpRequest();
// 2. Otvaranje kreiranog zahteva
req.open("GET", "./JSON/todos.json");
// 3. Saljemo request
req.send();
// 4.
req.addEventListener("readystatechange", () => {
  if (req.readyState == 4 && req.status == 200) {
    console.log(req.responseText);
  } else if (req.readyState == 4) {
    console.log("ne mogu da dohvatim podatke");
  }
});
// PRIMER CALLBACK FUNKCIJE
let myFunc = (callbackFunction) => {
  let value = 5;
  let value2 = 6;
  callbackFunction(value, value2);
};

myFunc((val1, val2) => {
  console.log(val1 + val2);
});
