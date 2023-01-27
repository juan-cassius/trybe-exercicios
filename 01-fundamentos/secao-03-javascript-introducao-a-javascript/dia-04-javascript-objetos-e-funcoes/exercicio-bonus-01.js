let algarismsToNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
function romanToDecimal(algsIn) {
  const len = algsIn.length;
  let numbersOut = algarismsToNumbers[algsIn[len - 1]];
  let atual = algarismsToNumbers[algsIn[len - 1]];
  for (let index = 2; index <= len; index++) {
    const prox = algarismsToNumbers[algsIn[len - index]];
    atual <= prox ? (numbersOut += prox) : (numbersOut -= prox);
  }
  return numbersOut;
}
console.log(romanToDecimal("XIII"));