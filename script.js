let button = document.querySelector(".button");
let hidden = document.querySelector(".hidden");
let card = document.querySelector(".card");
let body = document.querySelector(".container");

button.addEventListener("click", () => {
  hidden.style.display = "block";
  card.style.display = "none";
  body.style.display = "flex";
  body.style.alignItems = "center";
  body.style.justifyContent = "center";
  body.style.height = "100vh";
});
