// Esse é o exercício de variáveis

// const birthCity = "Castro";
// const myName = "Juan Cassius";
// let birthYear = 1997;

// console.log("Nasci em "+birthCity+" e meu nome é "+myName+". Nasci no ano de "+birthYear+".");

// myName = 25; Não da certo porque constante não pode ter seu valor alterado. (TypeError: Assignment to constant variable.)

// console.log(myName);

// Esse é o exercício de Tipos

// let movie = "Avengers"; //string literal
// let score = 10.89; //number literal
// let isValid = true; //boolean
// let variavel; //undefined
// let color = null; //redefinição

//+, -, *, /, **

// let salary = 3500;

// console.log(salary + salary);
// console.log(3 ** 3);

//inrementar variável ++
// decrementar variável --
// Tem uma diferença de colocar esse tipo de incremento/decremento antes da variável e depoiss
// exemplo: ++salary e salary++
// += ou -= fazem com que a variável receba o valor dela mesma mais/menos 1.

// const base = 5;
// const heigth = 8;
// const area = base * heigth;
// const perimeter = 2 * 5 + 2 * 8;

// console.log(perimeter);
// console.log(area);

//Condicionadores

// let trybe = 16.40;

// if (trybe >= 14 && trybe <= 14.40){
//     console.log("Esquenta");
// }else if(trybe >= 16.30 && trybe < 17.50){
//     console.log("Aula ao vivo");
// }else if (trybe >=19.40 && trybe > 20){
//     console.log("Fechamento");
// }else{
//     console.log("Fora dos momentos síncronos");
// }

// const notaDesafio = 45;

// if (notaDesafio >= 80 &&  notaDesafio <= 100){
//     console.log("Parabens fpi aprovado!");
// }else if (notaDesafio >= 60 && notaDesafio <80 ){
//     console.log( "Ficou na espera");
// }else if(notaDesafio < 60 && notaDesafio >=0){
//     console.log("Não foi dessa vez");
// }else{
//     console.log("Aparentemente o valor digitado está inválido");
// }

// const currentHour = 15.35;
// let message = "";

// if(currentHour >= 22){
//     console.log("Dormir, não coma nada");
// }elseif(currentHour >= 18 && currentHour < 22){
//     console.log("Rango");
// }elseif(currentHour >= 14 && currentHour < 18){
//     console.log("Bolo e café");
// }elseif(){
//     console.log("");
// }elseif(){
//     console.log("");
// }else{
//     console.log("");
// }

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// const squirtle = "melhor pokemon inicial";

// console.log(!squirtle); // false

// let situacaoCandidato = "alou";

// switch (situacaoCandidato) {
//   case "aprovada":
//     console.log("parabeis");
//     break;
//   case "lista":
//     console.log("lista, foi quase");
//     break;
//   case "reprovada":
//     console.log("Reprovou ja era, estuda mais");
//     break;
//   default:
//     console.log("Valor passado incorreto");
// }

//Essa é a parte com exercícios do dia

//Exercício 1:

// const a = 2;
// const b = 4;

// console.log("Soma: " + (a + b));
// console.log("Subtração: " + (a - b));
// console.log("Multiplicação: " + a * b);
// console.log("Divisão: " + a / b);
// console.log("Módulo: " + (a % b));

// Exercício 2:

// const a = 3
// const b = 4
// const c= 1

// if (a > b  && a > c){
//     console.log("A maior")
// } else if (b > a && b > c){
//     console.log("B maior")
// }else if (c > a && c > b){
//   console.log("C é maior");
// }else {
//     console.log("Um ou mais valores está dando erro");
// }

// // Exercício 3

// const d = 1

// if (d > 0){
//     console.log("positivo");
// }else if (d == 0){
//     console.log("zero");
// } else if (d< 0){
//     console.log("negativo");
// }else{
//     console.log("valor inválido");
// }

// Exercício triângulo:

// const angA = 100;
// const angB = 35;
// const angC = 45;

// if (angA > 0 && angB > 0 && angC > 0 && angA + angB + angC === 180) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//Exercício da aula

// let num1 = 4;
// let num2 = 3;
// let resultado

// if (num1 === num2){
//     resultado = num1+ num2;
// }else {
//     resultado = num1 * num2;
// }
// console.log(resultado);

// Exercício do xadrez ->

// let chessPiece = "QuEeN";
// Nome das peças em inglês:
// pawn
// rook
// knight
// bishop
// queen
// king

// switch (chessPiece.toLowerCase()) {
//   case "pawn":
//     console.log(
//       "Ande duas se for a primeira vez que estiver andando, caso contrário ande um pra frente"
//     );
//     break;
//   case "rook":
//     console.log(
//       "Ande quantas casas quiser na vertical e horizontal se disponível"
//     );
//     break;
//     case "bishop":
//         console.log("Ande nas diagonais quantas casas que estiverem disponíveis quiser");
//     break;
//     case "knight":
//         console.log("Ande em L(2 casas para uma direção e 1 perpendicular a esta direção), pare somente na última das 3 casas que percorrer");
//     break;
//     case "queen":
//         console.log("Ande am qualquer direção quantas casas estiverem disponíveis que quiser");
//     break;
//     case "king":
//         console.log("Ande em qual direção quiser uma casa");
//     break;
//     default:
//         console.log("Nome de peça desconhecido");

// Exercício nota:

// let givenNote = 10;

// if (givenNote < 50) {
//   console.log("Sua nota é F");
// } else if (givenNote >= 50 && givenNote < 60) {
//   console.log("Sua nota é E");
// } else if (givenNote >= 60 && givenNote < 70) {
//   console.log("Sua nota é D");
// } else if (givenNote >= 70 && givenNote < 80) {
//   console.log("Sua nota é C");
// } else if (givenNote >= 80 && givenNote < 90) {
//   console.log("Sua nota é B");
// } else if (givenNote >= 90 && givenNote <= 100) {
//   console.log("Sua nota é A");
// } else {
//   console.log("Valor digitado não é uma nota válida");
// }

// Exercícios par e ímpar:

// const num1 = 2;
// const num2 = 3;
// const num3 = 2;

// par

// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// ímpar

// if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// Exercício lucro de vendas
// const custoProd = 2;
// const valorVenda = 4;

// let lucro = valorVenda - custoProd * 1.2;
// if(custoProd < 0 || valorVenda < 0){
//     console.log("Um dos valores inseridos é menor que zero");
// }
// console.log("O lucro é de "+lucro+" reais");

let salarioBruto = 1302;
let salarioDeduzido = 0;
let salarioLiquido = 0;

//Dedução do INSS
console.log(salarioBruto);

if (salarioBruto < 1556.95) {
  salarioDeduzido = salarioBruto - salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto < 2594.93) {
  salarioDeduzido = salarioBruto - salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.83) {
  salarioDeduzido = salarioBruto - salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
  salarioDeduzido = salarioBruto - 570.88;
} else {
  console.log("Valor inserido inválido");
}

if (salarioDeduzido < 1903.99) {
  salarioLiquido = salarioDeduzido;
} else if (salarioDeduzido >= 1903.99 && salarioDeduzido < 2826.66) {
  salarioLiquido = salarioDeduzido - (salarioDeduzido * 0.075 - 142.80);
} else if (salarioDeduzido >= 2826.66 && salarioDeduzido < 3751.06) {
  salarioLiquido = salarioDeduzido - (salarioDeduzido * 0.15 - 354.8);
} else if (salarioDeduzido >= 3751.06 && salarioDeduzido < 4664.68) {
  salarioLiquido = salarioDeduzido - (salarioDeduzido * 0.225 - 636.13);
} else if (salarioDeduzido >= 4664.68) {
  salarioLiquido = salarioDeduzido - (salarioDeduzido * 0.275 - 869.36);
}
console.log("Seu salário líquido será: R$"+salarioLiquido);