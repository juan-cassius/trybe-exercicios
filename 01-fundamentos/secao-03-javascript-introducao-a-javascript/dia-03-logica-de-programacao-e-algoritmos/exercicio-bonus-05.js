let n = 7;

let meio = (n + 1) / 2;
let aEsquerda = meio;
let aDireita = meio;


for (let indexLinha = 1; indexLinha <= meio; indexLinha++) {
  let linha = '';
  for (let indexColuna = 1; indexColuna <= n; indexColuna++) {
    if (indexColuna == aEsquerda || indexColuna == aDireita || indexLinha==meio) {
      linha += "*";
    } else {
      linha += " ";
    }
  }
    aDireita += 1;
  aEsquerda -= 1;
  console.log(linha);
}


for (var i = 0; i < 10; i++) { 

  console.log('teste'); 

} 