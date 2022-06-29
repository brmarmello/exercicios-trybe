// Roteamento:

const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('Hello World!');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
		// Requisições para rota GET `/` são resolvidas aqui!
    res.send('Hello World! Get');
  })
  .post(function (req, res) {
		// Requisições para rota POST `/` são resolvidas aqui!
    res.send('Hello World! post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
