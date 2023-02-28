const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    const item = createItem('item', 'unidade', 5, 10);
    expect(item).toEqual({
      name: 'item',
      quantity: 10,
      unit: 'unidade',
      price: 5,
    });
  });
  it('utiliza zero como quantidade padrão', () => {
    const item = createItem('item', 'unidade', 5);
    expect(item).toEqual({
      name: 'item',
      quantity: 0,
      unit: 'unidade',
      price: 5,
    });
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(5, 'unidade', 5, 10)).toThrow();
  });
  it('Lança um erro se o preço do item não é um número', () => {
    expect(() => createItem('item', 'unidade', '5', 10)).toThrow();
  });
  it('cria um item válido', () => {
    const item = createItem('item', 'unidade', 5, 10);
    expect(item).toEqual({
      name: 'item',
      quantity: 10,
      unit: 'unidade',
      price: 5,
    });
  });
  it('Lança um erro se o preço do item é menor ou igual a zero', () => {
    expect(() => createItem('item', 'unidade', 0, 10)).toThrow();
  });
});
