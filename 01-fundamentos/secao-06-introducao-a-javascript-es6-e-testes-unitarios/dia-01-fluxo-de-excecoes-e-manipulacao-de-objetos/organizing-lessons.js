const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const addTurn = (obj, key, value) => {
    obj[key] = value;
}
addTurn(lesson2, 'turno', 'noite');

const listKeys = (obj) => {
    return Object.keys(obj);
}

const objLength = (obj) => {
    return Object.keys(obj).length;
}

const listValues = (obj) => {
    return Object.values(obj);
}

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const totalStudents = (obj) => {
    let total = 0;
    const lessons = Object.keys(obj);
    for (index in lessons) {
        total += obj[lessons[index]].numeroEstudantes;
    }  
    return total;
}

const getValueByNumber = (obj, number) => {
    const values = Object.values(obj);
    return values[number];
}

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
    const entries = Object.entries(obj);
    let exists = false;
    for (index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) {
            exists = true;
        }
    }
    return isEqual;
}
