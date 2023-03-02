const verifyEqual = (myNumber, number) => myNumber === number;

const lottery = (myNumber, callback) => {
  const prizeNumber = Math.floor(Math.random() * 5) + 1;
  return callback(myNumber, prizeNumber)
    ? 'Parabéns você ganhou'
    : 'Tente novamente';
};

console.log(lottery(2, verifyEqual));