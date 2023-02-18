// string recebida
'1 cerveja';
// retorno da função
'1 copo de água';

// string recebida
'1 cerveja, 2 shots e 1 catuaba';
// retorno da função
'4 copos de água';

// string recebida
'2 caipirinhas';
// retorno da função
'2 copos de água';

const hydrate = (string) => {
  const extractedNumbers = string.match(/\d+\.\d+|\d+/g).map(Number);
  let cups = 0;
  for (let index of extractedNumbers) {
    cups += index;
  }
  if (cups === 1) {
    cups = `${cups} copo de água`;
  } else cups = `${cups} copos de água`;
  return cups;
};

hydrate('tome 2 ou 3 cops dágua');

module.exports = hydrate;
console.log(hydrate('tome 0ou 1 cops '));