// 1. Iz fajla fruits.json dohvatiti i u konzoli ispisati svo voće koje u svom nazivu sadrži reč “berries” (koristiti fatch)
fetch("../JSON/fruits.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.includes("berries")) {
        console.log(data[i].name);
      }
    }
  })
  .catch((err) => {
    console.log("ne moze se doci do JSON fajla", err);
  });

// 2.  U fajlu fruits.json prebojati i u konzoli ispisati koliko naziva voća ne sadrži u svom imenu reč “berries (koristiti fatch)
fetch("../JSON/fruits.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let brojac = 0;
    for (let i = 0; i < data.length; i++) {
      if (!data[i].name.includes("berries")) {
        brojac++;
      }
    }
    console.log(brojac);
  })
  .catch((err) => {
    console.log("ne moze se doci do JSON fajla", err);
  });

// 3.Ispisati u konzoli najpre sve nazive voća iz fajla fruits.json, zatim u konzoli ispisati sve nazive povrća iz fajla vegetables.json (koristiti DOM, async i await).

let zadTri = async () => {
  let data;
  let data2;

  let response = await fetch("../JSON/fruits.json");
  if (response.status != 200) {
    throw new Error("ne mogu da doh podatke");
  } else {
    data = await response.json();
  }
  let response2 = await fetch("../JSON/vegetables.json");
  if (response2.status != 200) {
    throw new Error("ne mogu da doh podatke");
  } else {
    data2 = await response2.json();
  }
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);
  }
  for (let i = 0; i < data2.length; i++) {
    console.log(data2[i].name);
  }
};
zadTri();

//4.Ispisati naslov treće veličine (h3) “Fruits”, zatim iza njega u neuređenoj listi ispisati sve nazive voća iz fruits.json fajla. Potom ispisati naslov “Vegetables” iza koga sledi neuređena lista sa nazivima povrća iz vegetables.json fajla. (koristiti DOM, async i await).

let zadCet = async () => {
  let response = await fetch("../JSON/fruits.json");
  let response2 = await fetch("../JSON/vegetables.json");
  let data;
  let data2;
  if (response.status != 200) {
    throw new Error("ne mogu da dodj do podataka");
  } else {
    data = await response.json();
  }

  if (response2.status != 200) {
    throw new Error("ne mogu dda dodje do podataka");
  } else {
    data2 = await response2.json();
  }
  let body = await document.querySelector("body");
  let p1 = await document.createElement("p");
  let h3 = await document.createElement("h3");
  let ul = await document.createElement("ul");
  let tezinaVoca = 0;
  let tezinaPovrca = 0;
  let zbirTezine = 0;

  for (let i = 0; i < data.length; i++) {
    if (i == 0) {
      body.appendChild(h3);
      body.appendChild(p1);
      p1.appendChild(ul);
      h3.textContent = "Voće";
    }
    tezinaVoca += Number(data[i].tezina);

    let li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = data[i].name;
  }
  p1.innerHTML += `Tezina svog voca je ${tezinaVoca}`;

  let h3P = await document.createElement("h3");
  let ulP = await document.createElement("ul");
  let p2 = await document.createElement("p");
  for (let i = 0; i < data2.length; i++) {
    if (i == 0) {
      body.appendChild(h3P);
      body.appendChild(p2);
      p2.appendChild(ulP);
      h3P.textContent = "Povrce";
    }
    tezinaPovrca += Number(data2[i].tezina);

    let li = document.createElement("li");
    ulP.appendChild(li);
    li.textContent = data2[i].name;
  }
  p2.innerHTML += `Tezina svog povrca je ${tezinaPovrca}`;

  zbirTezine = tezinaPovrca + tezinaVoca;
  return zbirTezine;
};

zadCet()
  .then((data) => {
    document.body.innerHTML += `Tezina svega je ${data}`;
  })
  .catch((err) => {
    console.log("rejected", err);
  });
