let request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//   if (request.readyState == 1) {
//     console.log("uspostavljena konceij");
//   } else if (request.readyState == 2) {
//     console.log("poslat zahtev serveru");
//   } else if (request.readyState == 3) {
//     console.log("skidanje podataka");
//   } else if (request.readyState == 4) {
//     console.log("uspesno obaveljno");
//     console.log(request.responseText);
//   }
// });
// console.log(request);
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    let odgovor = request.responseText; // odgovor je uvek string
    let odgovorJS = JSON.parse(odgovor);
    console.log(odgovor);
    console.log(odgovorJS);
  } else if (request.readyState === 4) {
    console.log("nemoguce dobiti odgovor od servera");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/users/1"); // uspostavljanje konekcije
request.send(); // slanje zahteva
