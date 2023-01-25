let array = ["java", "javascript", "python", "html", "css"];
let maior = 0;
let menor = 0;
for (let index = 0; index < array.length; index++) {
  if (array[maior].length < array[index].length) {
    maior = index;
  } else {
    maior = maior;
  }
  if (array[index].length < array[menor].length) {
    menor = index;
  } else {
    menor = menor;
  }
}
console.log(
  "A maior palavra é: " + array[maior] + " e a menor palavra é: " + array[menor]
);
