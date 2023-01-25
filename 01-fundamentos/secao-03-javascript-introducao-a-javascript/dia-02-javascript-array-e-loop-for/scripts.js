//Arrays

// let pizzas = ['4 queijos', 'Frango com catupiri', 'Marguerita', 'Palmito', 'Chocolate']

//pizzas[4] = 'Peito de Peru';

// pizzas.push('Peito de Peru');
// pizzas.length;

// console.log(pizzas);
// console.log(pizzas.length);
// console.log(pizzas.sort());
// console.log(pizzas[1]);
// for(let index =0; index < pizzas.length; index +=1){
//     console.log(pizzas[index]);
// }

//Para adicionar no começo é só usar a função unshift()

// pizzas.unshift('2 Queijos');
// console.log(pizzas);

//Remover o último elemento do Array usa-se a função pop()
//Remover o primeiro da lista é só usar a função shift()

//Para descobrir qual a posição de um elemento usamos a função indexOf()

//For

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let name of names){
//     console.log(name);
// }

//While

// let counter = 0;

// while (counter !== 5) {
//     console.log(counter);
//     counter += 1;
// }
// console.log(counter);

// function dice(){
//     return Math.ceil(Math.random()*6);
// }
// let d1 = dice();
// let d2 = dice();
// while(d1 === d2){
//     d2 = dice();
// }
// console.log(d1,d2);

//Aula síncrona - MegaSena

// let primeiraJogada = [12, 34, 6, 14, 28, 50];
// let primeiroNumero = Math.floor(Math.random() * 60 + 1);
// let segundoNumero = Math.floor(Math.random() * 60 + 1);
// let terceiroNumero = Math.floor(Math.random() * 60 + 1);
// let quartoNumero = Math.floor(Math.random() * 60 + 1);
// let quintoNumero = Math.floor(Math.random() * 60 + 1);
// let sextoNumero = Math.floor(Math.random() * 60 + 1);

// let megaSenaSorteio = [primeiroNumero,segundoNumero,terceiroNumero,quartoNumero,quintoNumero,sextoNumero];
// console.log(megaSenaSorteio);

//Exercícios do dia de Arrays

// let numbers = [5, 9, 3, 123, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let media = 0;
// let maiorNumero = 0;
// let impares = 0;
// let menorNumero = numbers[0];

// for (let index = 0; index < numbers.length; index++) {
// Requisito 1
//   console.log(numbers[index]);

// Requisito 2
// soma += numbers[index];

// Requisito 4
// if (numbers[index] > 20) {
//   // console.log('valor maior que 20');
// } else {
//   // console.log('valor menor ou igual a 20');
// }

//Requisito 5
// if (numbers[index] > maiorNumero) {
//   maiorNumero = numbers[index];
// } else {
//   maiorNumero = maiorNumero;
// }

//Requisito7
// if (numbers[index] < menorNumero) {
//   menorNumero = numbers[index];
// } else {
//   menorNumero = menorNumero;
// }

//Requisito 6
//   if (numbers[index] % 2 !== 0) {
//     impares++;
//   } else {
//     impares = impares;
//   }
// }
//Requisito 3
// media = soma / numbers.length;
//console.log(media);

//Requisito 5 CONTINUAÇÃO
// console.log(maiorNumero);

//Requisito 6 CONTINUAÇÃO
// console.log(impares);

//Requisito 7 CONTINUAÇÃO
// console.log(menorNumero);

//Requisito 8
let arrayTeste = [];
for (let index = 0; index < 25; index++) {
  arrayTeste[index] = index + 1;
}
// console.log(arrayTeste);

//Requisito 9
for (let index = 0; index < arrayTeste.length; index++) {
  // console.log(arrayTeste[index]/2);
}

//Exercício Bubblesort

let numero = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       // Pra fazer crescente e decrescente é só inverter o sinal
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }
//Requisito 1
// console.log(numbers);

//Requisito 2
// console.log(numbers.reverse());//Má prática

//Requisito 3
// let aux = [];
// for (let index = 0; index <= numero.length - 1; index++) {
//   if (index == numero.length-1) {
//     aux[numero.length - 1] = numero[numero.length - 1] * 2;
//   } else {
//     aux[index] = numero[index] * numero[index + 1];
//   }
// }

// console.log(numero);
// console.log(aux);

