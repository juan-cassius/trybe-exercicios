let motor = true;
const ligaDesligaMotor = () => {
  motor = !motor;
  return motor;
};

const circleArea = (radius) => Math.PI * radius ** 2;

const longestWord = (phrase) => {
  splittedPhrase = phrase.split(' ');
  let longestWord = '';
  for (let index in splittedPhrase) {
    if (splittedPhrase[index].length > longestWord.length) {
      longestWord = splittedPhrase[index];
    }
  }
  return longestWord;
};

const substituaX = (string, nome) => {
  let splittedPhrase = string.split(' ');
  for (let index in splittedPhrase) {
    if (splittedPhrase[index] === 'x') {
      splittedPhrase[index] = nome;
    }
  }
  return splittedPhrase.join(' ');
};
console.log(substituaX('Tryber x aqui!', 'Juan'));

const minhasSkills = (retorno) => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  let retornoFinal = `${retorno} Minhas 3 principais habilidades são: ${skills
    .sort()
    .join(', ')}`;
    return retornoFinal;
};

console.log(minhasSkills(substituaX('Tryber x aqui!', 'Juan')));
