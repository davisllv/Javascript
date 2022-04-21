const numeros = [1, 2, 3, 4, 5];

const isNumber = numeros.some((it) => it === 4);

console.log(isNumber ? "Tem quatro" : "Não tem Número");
