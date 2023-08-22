const contas = require("./contas");

test("Soma 2+5 esperado 7 como resultado",()=>{
    espect(contas.soma(2,5)).toB(7)

})


test("Multiplicacao 2*5 esperado 10 como resultado", () => {
  expect(contas.multiplicacao(2, 5)).toBe(10);
});