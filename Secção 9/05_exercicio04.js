const nomes = ["Davi", "Júlia", "Lilia", "Eder", "Fernando"];

if (nomes.includes("Cláudio")) {
  console.log("Davi Existe");
} else {
  console.log("Não existe");
}

const isNome = nomes.some((it) => it === "Davi");

if (isNome) {
  console.log("Davi Existe");
} else {
  console.log("Não existe");
}

nomes.forEach((it) => {
  if (it === "Cláudio") {
    console.log("Nome Encontrado");
    return;
  } else {
    console.log("Nome não encontrado");
    return;
  }
});
