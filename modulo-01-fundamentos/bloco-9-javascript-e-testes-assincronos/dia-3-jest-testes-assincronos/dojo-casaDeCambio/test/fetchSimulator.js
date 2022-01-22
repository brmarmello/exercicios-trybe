const baseEndpoint = 'https://api.exchangerate.host/latest?base=';

const expectedObject = {
  motd: {
    msg: 'Xablau',
    url: 'https://exchangerate.host/#/donate',
  },
  success: true,
  base: 'USD',
  date: '2022-01-17',
  rates: {
    AED: 3.672301,
    AFN: 105.000313,
    ALL: 107.180425,
    AMD: 481.580594,
    ANG: 1.809348,
  },
};

const fetchSimulator = async (url) => {
  if (url === undefined || url.endsWith('undefined')) {
    throw new Error('You must provide an url');
  }

  return {
    json: () => Promise.resolve(expectedObject),
  };
};

global.fetch = jest.fn(fetchSimulator);
global.handleRates = jest.fn(fetchSimulator);
global.handleRates.mockReturnValue();
global.handleBaseCurrency = jest.fn(fetchSimulator);
global.handleBaseCurrency.mockReturnValue();
afterEach(jest.clearAllMocks);

module.exports = {
  baseEndpoint,
  expectedObject,
};
