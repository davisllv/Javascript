const calculadora = {
  somar: function somar(arg1, arg2) {
    console.log(arg1 + arg2);
  },

  subtrair: function (arg1, arg2) {
    console.log(arg1 - arg2);
  },
  multiplicar: function (arg1, arg2) {
    console.log(arg1 * arg2);
  },
  dividir: function (arg1, arg2) {
    console.log(arg1 / arg2);
  },
};

calculadora.somar(10, 4);
calculadora.subtrair(10, 5);
calculadora.multiplicar(10, 2);
calculadora.dividir(20, 4);
