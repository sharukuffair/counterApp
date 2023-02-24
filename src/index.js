import "./styles.css";

let minusEle = document.querySelector(".minus");
let plusEle = document.querySelector(".plus");
let counterEle = document.querySelector(".counter");

function increment() {
  let value = parseInt(counterEle.textContent);
  value = value + 1;
  counterEle.textContent = value;
}

function decrement() {
  let value = parseInt(counterEle.textContent);
  value = value - 1;
  counterEle.textContent = value;
}

minusEle.addEventListener("click", () => {
  decrement();
});

plusEle.addEventListener("click", () => {
  increment();
});
