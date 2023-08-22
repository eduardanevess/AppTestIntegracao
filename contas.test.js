const contas = require('./contas');

test("Soma 2+5 esperado 7 como resultado",()=>{
    expect(contas.soma(2,5)).toBe(7)
})


test("Subtracao 2-5 esperado -3 como resultado", () => {
  expect(contas.subtracao(2, 5)).toBe(-3);
});

test("Divisao 2/5 esperado 0.4 como resultado", () => {
  expect(contas.divisao(2, 5)).toBe(0.4);
});

test("Multiplicacao 2*5 esperado 10 como resultado", () => {
  expect(contas.multiplicacao(2, 5)).toBe(10);
});
