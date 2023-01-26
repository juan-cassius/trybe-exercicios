let n = 7;
let linha = "";
let posicaoDaLinhaAtual = n-1;

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
  posicaoDaLinhaAtual -= 1;
}
