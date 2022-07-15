const textElement = document.createElement("p");

const fatherElement = document.querySelector("h2");

textElement.innerText = "Lorem Ipsun";

fatherElement.appendChild(textElement);
