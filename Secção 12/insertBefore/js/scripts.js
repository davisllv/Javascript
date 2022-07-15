const newElement = document.createElement("h3");

const elementFather = document.querySelector(".container-principal");

const element = document.querySelector("p");

newElement.innerText = "Lorem Ipsun";

elementFather.insertBefore(newElement, element);

console.log(newElement);
