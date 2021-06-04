// console.log("prva linija koda");
// console.log("druga linija koda");
// // window.setTimeout();
// setTimeout(test, 3000); // test
// console.log("cetvrta linija koda");
// console.log("peta linija koda");

// function test() {
//   console.log("test funkcija");
// }
// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");
// let btn3 = document.querySelector("#btn3");
// btn1.addEventListener("click", function () {
//   console.log(this);
// });

// btn2.addEventListener("click", () => {
//   console.log(this);
// });

// btn3.addEventListener("click", klik);

// function klik() {
//   console.log(this);
// }

// klik();

let btn = document.querySelector("#btn");
let ispis = document.querySelector("#ispis");
let btn1 = document.querySelector("#dugme");
let clock = null;
btn.addEventListener("click", () => {
  if (clock === null) {
    clock = setTimeout(function () {
      let datum = new Date();
      let sati = datum.getHours();
      let min = datum.getMinutes();
      let sek = datum.getSeconds();
      ispis.innerHTML += `sada je ${sati}:${min}:${sek}`;
      clock = null;
    }, 2000);
  }
});

btn1.addEventListener("click", () => {
  clearTimeout(clock);
  clock = null;
});

// let clockInterval = null;

// console.log("prvalinija");
// console.log("drugalinija");
// clockInterval = setInterval(() => {
//   console.log("trecafunkcijaCALLBACK");
// }, 1000);
// console.log("cetvrtalinija");
// console.log("petalinija");

// setTimeout(() => {
//   clearInterval(clockInterval);
// }, 5000);
// console.log("sedmalinija");
// console.log("osmalinija");

let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let ispis1 = document.querySelector("#ispis2");
let clockInterval = null;

b1.addEventListener("click", () => {
  if (clockInterval === null) {
    clockInterval = setInterval(() => {
      let datum = new Date();
      let sati = datum.getHours();
      let min = datum.getMinutes();
      let sek = datum.getSeconds();
      ispis1.innerHTML = `sada je ${sati}:${min}:${sek}`;
    }, 1000 / 10);
  }
});

b2.addEventListener("click", () => {
  clearInterval(clockInterval);
  clockInterval = null;
});
