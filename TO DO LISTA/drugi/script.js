// DOM
let uLzadaci = document.querySelector("ul");
let liZadaci = document.querySelectorAll("li");
let inputNoviZadatak = document.querySelector("#unesi");
let radioPocetak = document.querySelector("#dodajNaPocetak");
let radioKraj = document.querySelector("#dodajNaKraj");
// let btnDodaj = document.querySelector("#dodaj");

// 1. Nacin
// Kada dodamo novi li nece raditi jer taj novi li nece imati event listener koji je vezan na njega
// liZadaci.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.target);
//     e.target.remove();
//   });
// });

// REGEX
// // prvi nacin
// let reg = /[a-z0-9.]{30}/gi;
// // drugi nacin
// let reg2 = new RegExp(/[a-z]{30}/, "i");

// function validate(field, regex) {
//   console.log(regex.test(field.value));
// }

// 2. Nacin
uLzadaci.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.remove();
  }
});

inputNoviZadatak.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    let noviZadatak = inputNoviZadatak.value;
    if (noviZadatak == "" || noviZadatak == null) {
      alert("Input polje je praznp");
    } else {
      let noviZadatak = inputNoviZadatak.value;
      let liNoviZadatak = document.createElement("li");
      liNoviZadatak.textContent = noviZadatak;
      if (radioPocetak.checked) {
        uLzadaci.prepend(liNoviZadatak);
        inputNoviZadatak.value = "";
      } else {
        uLzadaci.appendChild(liNoviZadatak);
        inputNoviZadatak.value = "";
      }
    }
  }
});
