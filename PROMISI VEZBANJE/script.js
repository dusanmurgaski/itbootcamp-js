let divOrder = document.querySelector("#order");
let formOrder = document.querySelector("#order form");
let inputOrder = document.querySelector("#capacity");

function getItems(resource, func) {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      func(data);
    } else if (this.readyState == 4) {
      console.log("could not fetch data");
    }
  });
  request.open("GET", resource);
  request.send();
}

let click1 = (event) => {
  event.preventDefault();
  let capacity = inputOrder.value;
  console.log(capacity);
  let itemsNoStock = [];
  getItems("json/stock.json", (data) => {
    // Lokiga da se dohvate objekti koji nisu na stanju
    console.log(data);
    data.forEach((item) => {
      if (item.stock == 0) {
        itemsNoStock.push(item.id);
      }
    });
    //console.log(itemsNoStock);
    getItems("json/weights.json", (data) => {
      // Logika za tezine artikala
      let totalWeight = 0;
      data.forEach((item) => {
        // dali niz itemsnostock sadrzi item.id
        if (itemsNoStock.includes(item.id)) {
          // Potrebna je tezina artikla
          totalWeight += item.weight;
        }
      });
      // console.log(totalWeight);
      if (totalWeight > capacity) {
        let pMessage = document.createElement("p");
        pMessage.style.fontWeight = "bold";
        pMessage.style.fontSize = "24px";
        pMessage.textContent = "Not enough capacity in truck";
        divOrder.appendChild(pMessage);
      } else {
        getItems("json/prices.json", (data) => {
          // Logika za cene
          let totalPrice = 0;
          data.forEach((item) => {
            if (itemsNoStock.includes(item.id)) {
              totalPrice += item.price;
            }
          });
          let pMessage = document.createElement("p");
          pMessage.style.fontWeight = "bold";
          pMessage.style.fontSize = "24px";
          pMessage.textContent = `Total order price: ${totalPrice}RSD`;
          divOrder.appendChild(pMessage);
        });
      }
    });
  });
};
// funkcija click1 je tacna ali neprakticna zbog callback hell-a
// formOrder.addEventListener("submit", click1);
// zahvaljujuci njemu postoje then i catch
function getItemsReturnPromise(resource) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        resolve(data);
      } else if (this.readyState == 4) {
        reject("could not fetch data");
      }
    });
    request.open("GET", resource);
    request.send();
  });
}

let click2 = (event) => {
  event.preventDefault();
  let capacity = inputOrder.value;
  let itemsNoStock = [];
  getItemsReturnPromise("json/stock.json")
    .then((data) => {
      data.forEach((item) => {
        if (item.stock == 0) {
          itemsNoStock.push(item.id);
        }
      });
      return getItemsReturnPromise("json/weights.json");
    })
    .then((data) => {
      let totalWeight = 0;
      data.forEach((item) => {
        // dali niz itemsnostock sadrzi item.id
        if (itemsNoStock.includes(item.id)) {
          // Potrebna je tezina artikla
          totalWeight += item.weight;
        }
      });
      // console.log(totalWeight);
      if (totalWeight > capacity) {
        let pMessage = document.createElement("p");
        pMessage.style.fontWeight = "bold";
        pMessage.style.fontSize = "24px";
        pMessage.textContent = "Not enough capacity in truck";
        divOrder.appendChild(pMessage);
      } else {
        return getItemsReturnPromise("json/prices.json");
      }
    })
    .then((data) => {
      if (data !== undefined) {
        // TR CENA I NAZIV
        // u poslednjim TD stoji UKUPNO i cena ukupnih artikala
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
// formOrder.addEventListener("submit", click2);

async function clickGetItems() {
  let data1 = await getItemsReturnPromise("json/stock.json");
  let capacity = inputOrder.value;
  let itemsNoStock = [];
  data1.forEach((item) => {
    if (item.stock == 0) {
      itemsNoStock.push(item.id);
    }
  });
  // ovde radimo nesto sa podacima iz stock.json
  let data2 = await getItemsReturnPromise("json/weights.json");
  let totalWeight = 0;
  data2.forEach((item) => {
    // dali niz itemsnostock sadrzi item.id
    if (itemsNoStock.includes(item.id)) {
      // Potrebna je tezina artikla
      totalWeight += item.weight;
    }
  });
  // console.log(totalWeight);
  let pMessage = document.createElement("p");
  if (totalWeight > capacity) {
    pMessage.style.fontWeight = "bold";
    pMessage.style.fontSize = "24px";
    pMessage.textContent = "Not enough capacity in truck";
  } else {
    let data3 = await getItemsReturnPromise("json/prices.json");
    let totalPrice = 0;
    data3.forEach((item) => {
      if (itemsNoStock.includes(item.id)) {
        totalPrice += item.price;
      }
    });
    pMessage.style.fontWeight = "bold";
    pMessage.style.fontSize = "24px";
    pMessage.textContent = `Total order price: ${totalPrice}RSD`;
  }
  // ovde radimo sa weights
  return pMessage;
  // a ovde sa prices
}

let click3 = (event) => {
  event.preventDefault();
  clickGetItems()
    .then((para) => {
      divOrder.appendChild(para);
    })
    .catch((err) => {
      console.log(err);
    });
};

formOrder.addEventListener("submit", click3);
