const { describe, expect, it } = require('@jest/globals');
const { expectedObject, baseEndpoint } = require('./fetchSimulator');
const { fetchCurrency } = require('../api');

describe('A função fetchCurrency', () => {

  describe('dado um cenário de sucesso', () => {
    it('a função fetch foi chamada com o valor recebido como parâmetro', async () => {
      const currency = 'xulambs';
      await fetchCurrency(currency);
      expect(fetch).toHaveBeenCalledWith(`${baseEndpoint}${currency}`);
    });

    it('a função handleRates foi chamada com as cotações recebidas do fetch', async () => {
      const currency = 'xulambs';
      await fetchCurrency(currency);
      expect(handleRates).toHaveBeenCalledWith(expectedObject.rates);
    });

    it('a função handleBaseCurrency foi chamada com o código da moeada base recebida do fetch', async () => {
      const currency = 'xulambs';
      await fetchCurrency(currency);
      expect(handleBaseCurrency).toHaveBeenCalledWith(expectedObject.base);
    })
  });

  describe('dado um cenário de erro', () => {
    describe('a função fetch trouxe uma promise rejeitada', () => {
      it('a função handleHates não é chamada', async () => {
        expect.assertions(1); // Para evitar falsos-positivos

        try {
          const currency = undefined;
          await fetchCurrency(currency);
        } catch (error) {
          // Atenção ao .not na linha abaixo
          expect(handleRates).not.toHaveBeenCalledWith();
        }
      });

      it('a função handleBaseCurrency não é chamada', async () => {
        expect.assertions(1); // Para evitar falsos-positivos

        try {
          const currency = undefined;
          await fetchCurrency(currency);
        } catch (error) {
          // Atenção à negação na linha abaixo
          expect(handleBaseCurrency).not.toHaveBeenCalledWith();
        }
      });
    });
  });
});
