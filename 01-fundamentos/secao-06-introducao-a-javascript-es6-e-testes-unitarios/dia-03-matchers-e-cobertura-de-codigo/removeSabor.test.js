const removeBebida = require('./removeBebida');

describe('Testando a função removeBebida', () => {
  it('Remover agua', () => {
    expect(removeBebida(['agua', 'suco', 'refrigerante'], 'agua')).toEqual([
      'suco',
      'refrigerante',
    ]);
  });
});
