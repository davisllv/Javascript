const nome = ["Davi", "Júlia"];

const nome2 = ["Diogenes", "Emanuel", "Fernando", "Lilia", "Matheus", "Arthur"];

function testarTamanho(array) {
  if (array.length < 5) {
    console.log("Poucos Elementos");
  } else {
    console.log("Muitos Elementos");
  }
}

testarTamanho(nome);
testarTamanho(nome2);
