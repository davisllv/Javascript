function testarPrimo(numero) {
  for (let i = 2; i <= numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
const isPrime = testarPrimo(9);

if (isPrime) {
  console.log("É Primo");
} else {
  console.log("Não é primo");
}

// let numero = 19;
// let divisoes = 0;

// for (let i = 1; i <= numero; i++) {
//   if (numero % i === 0) divisoes++;
// }

// if (divisoes === 2) {
//   console.log("É Primo");
// } else {
//   console.log("Não é primo");
// }
