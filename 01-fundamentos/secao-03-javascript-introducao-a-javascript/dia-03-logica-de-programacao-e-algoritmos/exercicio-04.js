let primo = [0];

for (let index = 2; index <= 50; index++) {
  primo[1] = true;
  for (let indexDivisor = 2; indexDivisor < index; indexDivisor++) {
    if (index % indexDivisor === 0) {
      primo[1] = false;
    }
  }
  if (primo[1]) {
  primo[0]=index;}
}
console.log(primo[0]);