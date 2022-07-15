const onibus = {
  rodas: 8,
  passageirosLimite: 40,
  portas: 2,
};

onibus.janelas = 20;

delete onibus.rodas;

console.log(onibus);
console.log(onibus.janelas);
