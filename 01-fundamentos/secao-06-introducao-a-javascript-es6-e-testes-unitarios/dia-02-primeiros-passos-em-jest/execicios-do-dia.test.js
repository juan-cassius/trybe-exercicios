const myRemove = require('./exercicios-do-dia');
describe('function myRemove with entry', () => {
  test('([1, 2, 3, 4], 3) return [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('([1 ,2 ,3 ,4], 3) not return [1,2,3,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('([1, 2, 3, 4], 3) return [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
