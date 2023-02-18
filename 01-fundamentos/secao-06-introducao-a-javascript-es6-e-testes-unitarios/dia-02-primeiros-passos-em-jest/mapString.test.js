const { mapString, encode, decode } = require('./mapString');

describe('Verifica se encode', () => {
  test('é uma função', () => {
    expect(typeof encode).toBe('function');
  });
  test('(a) retorna "1")', () => {
    expect(encode('a')).toBe("1");
  });
  test('(e) retorna "2")', () => {
    expect(encode('e')).toBe("2");
  });
  test('(i) retorna "3"', () => {
    expect(encode('i')).toBe("3");
  });
  test('(o) retorna "4"', () => {
    expect(encode('o')).toBe("4");
  });
  test('("1") retorna "1"', () => {
    expect(encode('1')).toBe("1");
  });
  test('("1") tem tamanho de  1', () => {
    expect(encode("1").length).toEqual(1);
  });
});
describe('Verifica se decode', () => {
    test('é uma função', () => {
      expect(typeof decode).toBe('function');
    });
    test('(1) retorna "a"', () => {
      expect(decode("1")).toBe("a");
    });
    test('(2) retorna "e"', () => {
      expect(decode("2")).toBe("e");
    });
    test('(3) retorna "i"', () => {
      expect(decode("3")).toBe("i");
    });
    test('(4) retorna "o"', () => {
      expect(decode("4")).toBe("o");
    });
    test('(5) retorna "u"', () => {
      expect(decode("5")).toBe("u");
    });
    test('(a) retorna "a"', () => {
      expect(decode("a")).toBe("a");
    });
    test('("a") tem o tamanho de  1', () => {
      expect(encode("a").length).toEqual(1);
    });
  });
