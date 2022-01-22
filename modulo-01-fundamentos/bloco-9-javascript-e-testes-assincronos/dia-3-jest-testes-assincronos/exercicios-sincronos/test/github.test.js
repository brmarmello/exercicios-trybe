require('./fetchSimulator');
const { getGitHubUserInfos } = require('../src/github');

const expected = {
  name: 'Hugo Ferreira',
  company: 'Trybe',
  twitter: 'hugonardo',
  bio: 'Teste',
  location: 'Brazil',
};

describe('A função getGitHubUserInfos', () => {
  describe('quando a função fetch é resolvida', () => {

    it('os dados devem ser mapeados corretamente para um novo formato', async () => {
      expect.assertions(1);

      // const result = await getGitHubUserInfos("hugonardo");
      // expect(result).toEqual(expected);

      // Assim também funciona!! 😊
      await expect(getGitHubUserInfos("hugonardo"))
        .resolves.toEqual(expected);
    });

    it('função fetch deve ter sido chamada', async () => {
      expect.assertions(1);
      await getGitHubUserInfos("hugonardo");
      expect(fetch).toHaveBeenCalled(); // <- Isto é importante
    });

    it('a função `fetch` deve ter recebido o endpoint correto', async () => {
      expect.assertions(1);
      await getGitHubUserInfos("hugonardo");
      const user = 'hugonardo';
      const url = `https://api.github.com/users/${user}`;
      expect(fetch).toHaveBeenCalledWith(url); // <- Isto é importante
    });
  });

  describe('quando a função fetch é rejeitada', () => {
    it('deve retornar um erro \'Usuário inválido\'', async () => {
      expect.assertions(1);

      // try {
      //   await getGitHubUserInfos('usuario-inexistente');
      // } catch (error) {
      //   expect(error).toEqual(new Error('Usuário inválido'));
      // }

      // Assim também funciona!! 😊
      await expect(getGitHubUserInfos('usuario-inexistente'))
        .rejects.toEqual(new Error('Usuário inválido'))
    });
  });
});
