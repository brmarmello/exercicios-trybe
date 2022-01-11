// No último exercício, você deve ter reparado que está usando em conjunto callbacks e assincronicidade, que nesse caso correspondem a:

// operação assíncrona : retorno de user depois de um certo tempo, que varia;
// callbacks : as funções userFullName e userNationality , que são chamadas depois que o usuário é retornado.

// Nesse caso, a operação assíncrona sempre finaliza com sucesso, e existe uma callback que atua sobre o resultado desse sucesso. Mas isso não reflete por completo todas as operações assíncronas.
// Suponha que você esteja pegando dados de usuário via requisição em um outro servidor. Podemos garantir que essa requisição vai ocorrer sempre com sucesso? E se houver uma falha de conexão? E se o servidor não estiver funcionando no momento da requisição? Esses casos são exemplos de fatores externos, sobre os quais não se tem controle algum e que precisam ser tratados.
// Ou seja, da mesma forma que se tem uma callback para quando a operação assíncrona tem sucesso, também precisaria ter uma callback para quando a operação assíncrona termina com erro.

// Para fixar

// Vamos botar tudo isso em prática com este exercício de fixação:
// 1 - Adicione uma callback e trate o erro retornado.
// A função getCountry abaixo tem aproximadamente 50% de chance em obter, com sucesso, um país. Ela utiliza uma callback para poder realizar qualquer operação sobre o país retornado.

// Adicione um segundo parâmetro, que deve ser uma callback , na função getCountry ;
// Retorne essa callback na função getCountry de forma que trate a mensagem de erro.
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);
