// // Primeiro requisito terminado
// const girafa = true;
// const elefante = true;
// const macaco = false;

// const compareTrue = (value1, value2) => {
//   //   console.log(value1, value2);
//   return value1 && value2 ? true : false;
// };
// //Teste 1
// console.log(compareTrue(false, true));
// console.log(compareTrue(false, true));
// console.log(compareTrue(true, true));
// // Segundo requisito - em andamento
// const splitSentence = (sentence) => {
//   let splittedSentence = sentence.split(" ");
//   return splittedSentence;
// };
// //Teste 2
// console.log(splitSentence("go Trybe"));
// console.log(splitSentence("vamo que vamo"));
// console.log(splitSentence("foguete"));
// //Terceiro requisito
// const concatName = (completeName) => {
//   let nameArray = completeName;
//   return `${nameArray[nameArray.length - 1]}, ${nameArray[0]}`;
// };
// //Teste 3
// console.log(concatName(["Juan", "Cassius", "Carneiro", "Pereira"]));
// console.log(concatName(["foguete", "não", "tem", "ré"]));
// console.log(concatName(["captain", "my", "captain"]));

// //Quarto requisito
// const footballPoints = (wins, ties) => {
//   return `${wins * 3 + ties}`;
// };
// //Teste 4
// console.log(footballPoints(14, 8));
// console.log(footballPoints(1, 2));
// console.log(footballPoints(0, 0));

// //Quinto requisito
// const highestNumber = (numberArray) => {
//   let highestTemp = numberArray[0];
//   console.log(highestTemp);
//   for (let numAtual of numberArray) {
//     numAtual > highestTemp ? (highestTemp = numAtual) : (numAtual += 0);
//   }

//   return highestTemp;
// };

// console.log(highestNumber([1, 4, 2, 3, 4, 5, 6]));

// const highestCount = (numberArray) => {
//   let highestImport = highestNumber(numberArray);
//   console.log(highestImport);
//   let countHighest = 0;
//   for (let indexArrayN of numberArray) {
//     console.log(indexArrayN);
//     highestImport === indexArrayN ? (countHighest += 1) : (countHighest += 0);
//   }
//   return countHighest;
// };
// //Teste 5
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 4, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount([0, 0, 0]));

// //Sexto requisito
// const calcTriangleArea = (base, height) => {
//   return `${(base * height) / 2}`;
// };
// //Teste triângulo
// console.log(calcTriangleArea(10, 50));

// const calcRectangleArea = (base, height) => {
//   return `${base * height}`;
// };
// //Teste retângulo
// console.log(calcRectangleArea(10, 50));

// const calcAllAreas = (base, height, form) => {
//   if (form === "retângulo") {
//     return `O valor da área do retângulo é de: ${calcRectangleArea(
//       base,
//       height
//     )}`;
//   } else if (form === "triângulo") {
//     return `O valor da área do triângulo é de: ${calcTriangleArea(
//       base,
//       height
//     )}`;
//   } else return `Não foi possível fazer o cálculo, insira uma forma geométrica`;
// };
// //Teste 6
// console.log(calcAllAreas(10, 50, "retângulo"));
// console.log(calcAllAreas(10, 50, "triângulo"));
// console.log(calcAllAreas(10, 50, "quadrado"));

// //Sétimo requisito
// const catAndMouse = (mouse, cat1, cat2) => {
//   const distCat1 = mouse - cat1;
//   const distCat2 = mouse - cat2;
//   if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
//     return cat2;
//   } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
//     return cat1
//   }else {
//     return `os gatos trombam e o rato foge`;
//   }
// };
// //Teste 7
// console.log(catAndMouse(0,3,2 ));
// console.log(catAndMouse(0,6, 12));
// console.log(catAndMouse(0,3, 3));

//Oitavo requisito
const fizzBuzz = (numberArray) => {
  let div3And5 = [];
  for (let actual in numberArray) {
    actual = Number(actual);
    console.log(typeof actual);
    switch (numberArray[actual]) {
     
      case (numberArray[actual]% 3===0):
        div3And5[actual]+="fizz";
      case (numberArray[actual]%5 ===0):
        div3And5[actual]+="Buzz";
        break;
      case (!(numberArray[actual] % 5 === 0 && numberArray[actual] % 3 === 0)):
        div3And5[actual]="bug!";
    }
    //   console.log(actual);
    //  if (numberArray[actual] % 3 === 0) {
    //     div3And5.push("fizz");
    //   }
    //   if (numberArray[actual] % 5 === 0) {
    //     div3And5.push("Buzz");
    //   }
    //   if{
    //     div3And5.push('bug!')
    // }}
    // return div3And5;
  }
  return div3And5;
};
console.log(fizzBuzz([1,2,3,6,5,3,2]));

//Nono requisito
const encode = (message)  => {
for (let index in message){ 
   switch (index)
  case ('a'):
    

}
}

