let btn1 = document.querySelector("#b1");
let btn2 = document.querySelector("#b2");
let input = document.querySelector("input");
let clock = null;

btn1.addEventListener("click", () => {
  if (clock === null) {
    clock = setInterval(() => {
      input.value++;
    }, 1000 / 10);
  }
});

btn2.addEventListener("click", () => {
  clearInterval(clock);
  clock = null;
});
