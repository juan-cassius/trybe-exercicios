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

function dice(){
    return Math.ceil(Math.random()*6);
}
let d1 = dice();
let d2 = dice();
while(d1 === d2){
    d2 = dice();
}
console.log(d1,d2);