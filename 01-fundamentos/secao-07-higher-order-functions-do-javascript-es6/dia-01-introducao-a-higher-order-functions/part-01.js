const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const createEmployee = (name) => {
    const email = name.toLowerCase().split(' ').join('_');
    return {
        nomecompleto: name,
        email: `${email}@trybe.com`
    }
} 
// console.log(createEmployee('Pedro Guerra'));
// console.log(newEmployees(createEmployee));

const verifyEqual = (myNumber, number) => myNumber === number;

const lottery = (myNumber, callback) => {
  const prizeNumber = Math.floor(Math.random() * 5) + 1;
  return callback(myNumber, prizeNumber)
    ? 'Parabéns você ganhou'
    : 'Tente novamente';
};
// console.log(lottery(2, verifyEqual));

const compareAnswers = (answerKey, studentAnswers) => {
  if (answerKey === studentAnswers) {
    return 1;
  }
  if (studentAnswers === 'N.A') {
    return 0;
  }
  return -0.5;
};

const testResult = (answerKey, studentAnswers, compare) => {
  count = 0;
  for (let index = 0; index < answerKey.length; index += 1) {
    count += compare(answerKey[index], studentAnswers[index]);
  }
  return `Resultado final: ${count} pontos`;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// console.log(testResult(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
