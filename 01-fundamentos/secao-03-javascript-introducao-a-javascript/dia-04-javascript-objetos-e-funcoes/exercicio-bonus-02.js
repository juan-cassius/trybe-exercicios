let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];
function arrayOfNumbers(vector) {
  resultVector = [];
  for (index = 0; index < vector.length; index += 1) {
    let vectorWithinIndex = vector[index];
    for (
      let indexWithinIndex = 0;
      indexWithinIndex < vectorWithinIndex.length;
      indexWithinIndex += 1
    ) {
      if (vectorWithinIndex[indexWithinIndex] % 2 === 0) {
        resultVector.push(vectorWithinIndex[indexWithinIndex]);
      }
    }
  }
  return resultVector;
}
console.log(arrayOfNumbers(vector));
