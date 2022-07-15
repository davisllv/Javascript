document.getElementsByTagName("h1")[0].innerText = "Olá mundo";
document.getElementById("text").innerText = "Oi Davi";

console.log(document.getElementById("text"));

console.log(document.getElementsByClassName("thing")[0]);

console.log(document.querySelector("h2"));

document.querySelector("h2").appendChild = document.createElement("p");
