const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Olá Mundo!');
});

app.listen(3000, () => console.log("App rodando na porta 3000"));
