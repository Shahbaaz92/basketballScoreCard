let scoreEl1 = document.querySelector(".score1-el");
let scoreEl2 = document.querySelector(".score2-el");

let btn11El = document.querySelector(".btn1-1-el");
let btn21El = document.querySelector(".btn2-1-el");
let btn31El = document.querySelector(".btn3-1-el");
let btn12El = document.querySelector(".btn1-2-el");
let btn22El = document.querySelector(".btn2-2-el");
let btn32El = document.querySelector(".btn3-2-el");

let score1 = Number(scoreEl1.textContent);
let score2 = Number(scoreEl2.textContent);

let reset = document.querySelector(".reset");

///Functions
btn11El.addEventListener("click", function () {
  score1 = score1 + 1;
  scoreEl1.textContent = score1;
});
btn21El.addEventListener("click", function () {
  score1 = score1 + 2;
  scoreEl1.textContent = score1;
});
btn31El.addEventListener("click", function () {
  score1 = score1 + 3;
  scoreEl1.textContent = score1;
});

btn12El.addEventListener("click", function () {
  score2 = score2 + 1;
  scoreEl2.textContent = score2;
});
btn22El.addEventListener("click", function () {
  score2 = score2 + 2;
  scoreEl2.textContent = score2;
});
btn32El.addEventListener("click", function () {
  score2 = score2 + 3;
  scoreEl2.textContent = score2;
});

reset.addEventListener("click", function () {
  scoreEl1.textContent = 0;
  scoreEl2.textContent = 0;
});
