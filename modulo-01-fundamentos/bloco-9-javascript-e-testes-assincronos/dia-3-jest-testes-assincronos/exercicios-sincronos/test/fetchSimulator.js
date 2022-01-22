const VALID_USERNAME = 'hugonardo';
const VALID_URL = `https://api.github.com/users/${VALID_USERNAME}`;

const data = {
  name: 'Hugo Ferreira',
  company: 'Trybe',
  twitter_username: 'hugonardo',
  bio: 'Teste',
  location: 'Brazil',
};

const fetchSimulator = async (url) => {
  if (!url || url !== VALID_URL) {
    throw new Error('Usuário inválido');
  }

  return {
    json: () => Promise.resolve(data),
  };
};

global.fetch = jest.fn(fetchSimulator);
afterEach(jest.clearAllMocks);

module.exports = fetchSimulator;
