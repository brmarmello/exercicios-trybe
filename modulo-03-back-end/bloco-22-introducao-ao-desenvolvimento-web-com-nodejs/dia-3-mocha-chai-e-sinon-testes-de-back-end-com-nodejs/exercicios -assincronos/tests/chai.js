// O chai nos ajudará com as asserções, ou seja, ele nos fornece maneiras de dizermos o que queremos testar e então ele validará se o resultado condiz com o esperado.
// Até aqui não estamos testando nada de fato, apenas descrevemos o teste. Para de fato testar nossa função precisamos chamá-la passando o input desejado e então validar se a resposta é aquela que esperamos.
// Sem as ferramentas de testes, observe que fizemos essa verificação utilizando alguns ifs, o que é bem trabalhoso:

const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}

// Essa validação é o que chamamos de assertion, "asserção" ou, em alguns casos, "afirmação". Para nos ajudar com essa tarefa temos o chai, que nos fornece diversos tipos de validações diferentes.
// Usaremos a interface expect do chai em nossos exemplos, que significa de fato o que é esperado para determinada variável:

const resposta = calculaSituacao(4);

expect(resposta).equals('reprovado');

// No código acima, estamos chamando nossa função e, logo em seguida, afirmamos que seu retorno, armazenado na constante resposta, deve ser igual (equals) a 4.
// Muito mais legível e simples!