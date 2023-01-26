let n = 5;
for (let index = 0; index < n; index++) {
  let coluna = "";
  for (let index1 = 0; index1 <= index; index1++) {
    coluna += "*";
  }
  console.log(coluna);
}
