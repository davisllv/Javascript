let div = document.querySelector(".container");

let text = document.querySelector("p");

let btn = document.querySelector("button");

div.addEventListener("click", () => {
  console.log("Clicou na Div");
});

text.addEventListener("click", (ev) => {
  ev.stopPropagation();
  console.log("Clicou no texto");
});

btn.addEventListener("click", (ev) => {
  ev.stopPropagation();
  console.log("Clicou no botão");
});
