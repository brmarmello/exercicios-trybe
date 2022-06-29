/*
const express = require('express');

const app = express(); // 1 - Cria uma nova aplicação Express;

app.get('/hello', handleHelloWorldRequest); // 2 - Diz ao Express que, quando uma requisição com método GET for recebida no caminho /hello, a função handleHelloWorldRequest deve ser chamada;

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3 - Pede ao Express que crie um servidor HTTP e escute por requisições na porta 3001;

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4 - Ao tratar uma requisição com método GET no caminho /hello, enviar o status HTTP 200 que significa OK e a mensagem 'Hello World!'.
}
/*
Para iniciar a aplicação, execute o comando abaixo no diretório da aplicação:
node index.js
Agora, vá até o seu navegador (pode ser o Chrome) e abra a url http://localhost:3001/hello .
*/

/* index.js */
const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
