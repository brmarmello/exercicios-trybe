const { describe, expect, it } = require('@jest/globals');
const { createPresentationMessage, forceFail, reset } = require('../../src/callbacks/callbacks');

describe('A função createPresentationMessage', () => {
  beforeEach(() => {
    reset();
  });

  it('retorna erro quando falha', (feito) => {
    forceFail()
    const expectedError = new Error('Explodiu');

    function acao(err, result) {
      try {
        expect(err).not.toBeNull();
        expect(err).toEqual(expectedError);
        expect(result).toBeNull();
        feito();
      } catch (error) {
        feito(error);
      }
    }

    createPresentationMessage('Xuxa', acao);
  });

  it('retorna corretamente a string', (feito) => {
    const expectedString =
      'Oi galerinha! Meu nome é Xuxa e minha comida favorita é algodão doce.';

    function callback(err, result) {
      try {
        expect(result).toBe(expectedString);
        expect(err).toBeNull();
        feito();
      } catch (error) {
        feito(error);
      }
    }

    createPresentationMessage('Xuxa', callback);
  });
});
