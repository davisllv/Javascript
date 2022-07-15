const cachorro = {
  raça: null,

  setRaca: function (raca) {
    this.raca = raca;
  },

  getRaca: function () {
    return this.raca;
  },
};

cachorro.setRaca("Pastor Alemão");
console.log(cachorro.getRaca());
