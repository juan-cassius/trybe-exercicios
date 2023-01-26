// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
// };

// diasDaSemana.1; // SyntaxError: Unexpected number
// console.log(diasDaSemana['1']); // domingo

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };

//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank

//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000

//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

//   let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//       nome: 'Jake',
//       sobrenome: 'Peralta',
//       endereco: {
//         rua: 'Smith Street',
//         bairro: 'Brooklyn',
//         cidade: 'Nova Iorque',
//         estado: 'Nova Iorque',
//       },
//     },
//   };
//   console.log(usuario)
//   console.log(usuario['id']); // 99
//   console.log(usuario.email); // jakeperalta@gmail.com

//   console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//   console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//   let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];

//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10

//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey

//Para Fixar - Objetos

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medal: {
//         golden: 2,
//         silver:3
//     }
// }
// console.table(player.name+ player.lastName+"    "+player.age)

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log(player.bestInTheWorld.length);
// console.log(player.medal.golden+"     "+ player.medal.silver);

//For in

// let pizzas = {
//     sabor: 'Palmito',
//     preco: 39.90,
//     bordaCatupiry: true
// };
// for(let key in pizzas){
// console.log(pizzas[key]);
// }
// let pizzasDoces = ['Chocolate', 'Maçã', 'Morango'];
// for (let key in pizzasDoces){
//     console.log(key,pizzasDoces[key]);
// }

//For on
// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let position in food) {
//     console.log(position);
//   };
//   //resultado: 0, 1, 2;

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
//   for(let key in car){
//     console.log(key, car[key]);
//   }

//Para fixar - funções

// function somaNumeros(num1, num2) {
//   return num1 * num2;
// }
// function subtraiNumeros(num1, num2) {
//   return num1 - num2;
// }
// function multiplicaNumeros(num1,num2){
//     return num1*num2;
// }
// function divideNumeros(num1,num2) {
//     return num1/num2;
// }
// function restoNumeros(num1,num2){
//     return num1%num2;
// }
// console.log(somaNumeros(3,4))
// console.log(subtraiNumeros(7,2))
// console.log(multiplicaNumeros(8,2))
// console.log(restoNumeros(7,2))

// function comparaNumeros(num1,num2,num3){
//     const nume1 = num1
//     const nume2 = num2
//     const nume3 = num3
//     if (nume1 > nume2 && nume1 > nume3){
//         return nume1;
//     }else if(nume2 > nume1 && nume2> nume3){
//         return nume2
//     }else return nume3
// }
// console.log(comparaNumeros(3,213,123));

// function sinalValor(valor){
//     if(valor > 0){
//         return 'positive'
//     }else if(valor == 0){
//         return 'zero'
//     }else return 'negative'
// }
// console.log(sinalValor(1));

// function angulosTriangulo(ang1, ang2, ang3) {
//   if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) {
//     return false;
//   } else if (ang1 + ang2 + ang3 == 180) return true;
//   else return false;
// }
// console.log(angulosTriangulo(45, 4, 90));
let a = "ffwefwfwf";
let array = 'wfewfwfwe'

console.log( typeof array);