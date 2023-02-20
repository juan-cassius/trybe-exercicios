let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (obj, key, value) => (obj[key] = value);

addKey(lesson2, 'turno', 'noite');
// console.log(lesson2);

listKeys = (obj) => Object.keys(obj);
// console.log(listKeys(lesson2));

sizeObj = (obj) => Object.keys(obj).length;
// console.log(sizeObj(lesson2));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);