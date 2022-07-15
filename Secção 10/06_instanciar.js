function criarCarro({ marca, portas, motor, potencia }) {
  let carro = Object.create({});
  carro.marca = marca;
  carro.portas = portas;
  carro.motor = motor;
  carro.potencia = potencia;

  return carro;
}

const Mustang = criarCarro({
  marca: "Ford",
  portas: 2,
  motor: "V8",
  potencia: "500cv",
});

console.log(Mustang);
