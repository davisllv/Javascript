const dog = {
  patas: 4,
  nome: "Davi",
};

const person = {
  name: "Davi",
  age: 19,
  heigth: 184,
  city: "Caxias do Sul",
};

console.log(person);

Object.assign(person, dog);
