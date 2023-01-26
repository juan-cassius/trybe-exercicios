let n = 5;
let linha = "";
let posicaoDaLinhaAtual = n-1;
let meio = (n+1/2)
let aEsquerda = meio;
let aDireita = meio;

for (let indexLinha = 0; indexLinha < n; indexLinha++) {
  for (let indexColuna = 0; indexColuna < n; indexColuna += 1) {
    if (indexColuna < posicaoDaLinhaAtual) {
      linha = linha + " ";
    } else {
      linha = linha + "*";
    }
  }
  console.log(linha);
  linha = "";
}