let getTodos = (resource, callback) => {
  // 1. kreiramo XML objekat
  let req = new XMLHttpRequest();
  // 2. Otvaranje kreiranog zahteva
  req.open("GET", resource);
  // 3. Saljemo request
  req.send();
  // 4.
  req.addEventListener("readystatechange", () => {
    if (req.readyState == 4 && req.status == 200) {
      callback(req.responseText, undefined);
      // console.log(req.responseText);
    } else if (req.readyState == 4) {
      // console.log("ne mogu da dohvatim podatke");
      callback(undefined, "Ne mogu da dohvatim podatke");
    }
  });
};
// getTodos("../JSON/todos.json", () => {});
getTodos("../JSON/todos.json", (data, err) => {
  console.log("Callback okinuta");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    getTodos("../JSON/fruits.json", (data, err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        getTodos("../JSON/vegetables.json", (data, err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            getTodos("../JSON/cereals.json", (data, err) => {
              if (err) {
                console.log(err);
              } else {
                console.log(data);
              }
            });
          }
        });
      }
    });
  }
});
