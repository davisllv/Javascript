const nombre = "Davi da Silva";
const age = 19;
const cnh = true;

if (age >= 18 && cnh) {
  console.log(nombre + ", Você pode dirigir carros");
} else if (age >= 18 && !cnh) {
  console.log(nombre + ", Você não pode dirigir, visto que não possui CNH!");
} else {
  console.log(
    nombre +
      ", Você não pode dirigir, visto que não possui carteira, tampouco é maior de idade!"
  );
}
