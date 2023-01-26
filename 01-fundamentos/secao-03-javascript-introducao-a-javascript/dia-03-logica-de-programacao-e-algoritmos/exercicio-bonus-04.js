let n = 7;
let linha = "";

let meio = (n + 1) / 2;
let aEsquerda = meio;
let aDireita = meio;

for (let indexLinha = 0; indexLinha <= meio; indexLinha++) {
  for (let indexColuna = 0; indexColuna <= n; indexColuna++) {
    if (indexColuna > aEsquerda && indexColuna < aDireita) {
      linha += "*";
    } else {
      linha += " ";
    }
  }
  console.log(linha);
  linha = '';
  aDireita += 1;
  aEsquerda -= 1;
}