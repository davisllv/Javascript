function criarCarro({ marca, portas, motor, potencia }) {
  this.marca = marca;
  this.portas = portas;
  this.motor = motor;
  this.potencia = potencia;
}

const mustang = new criarCarro({
  marca: "Ford",
  portas: 2,
  motor: "V8",
  potencia: "500cv",
});

console.log(Mustang);
