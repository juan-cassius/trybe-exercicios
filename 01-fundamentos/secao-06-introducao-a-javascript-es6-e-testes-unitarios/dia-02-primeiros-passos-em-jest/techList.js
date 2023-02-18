const obj = {
  tech: 'nomeTecnologia',
  name: '',
};

const techList = (tech, name) => {
  if (tech.length === 0) return 'Vazio!';
  sortedTechArray = tech.sort();
  auxArray = [];
  for (let index of sortedTechArray) {
    auxArray.push({
      tech: index,
      name: name,
    });
  }
  return auxArray;
};

module.exports = techList;
