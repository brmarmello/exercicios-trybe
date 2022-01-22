// O que é JSON e por que o usamos?
// JSON significa J ava S cript O bject N otation e é basicamente uma forma de representarmos dados como objetos Javascript:
{
  "trybers" [
    {
      "name": "Lauro Cesar",
      "github": "lauroandrade",
      "status": "#vqv"
    }
  ]
}

// Perceba o quão legível é o formato JSON, já que nossos dados ficam guardados como pares de key/value . A key (chave) fica no lado esquerdo e o value (valor) no lado direito. No array trybers, podem ser adicionados vários outros objetos.
// JSON está sempre presente em aplicações web modernas, pois é simples, interpretável e ainda funciona muito bem em aplicações JavaScript. Além disso, é compatível com diversas outras linguagens, que conseguem interpretá-lo e gerar códigos no formato, como Python, Java, PHP, Ruby, entre outras. Desse modo, as APIs retornam os dados no formato JSON, a fim de manter uma alta escalabilidade e independência.
// Apesar do nome, ele não é um objeto JavaScript, apenas é estruturado de forma que faz uso de chaves e valores. Então, por não ser um objeto nativo do JavaScript, precisamos traduzir ele para que fique a par da linguagem que estamos usando. Para isso existe a função JSON.parse() , assim como existe a função JSON.stringify() que transforma uma estrutura JavaScript em string.

// Vamos ver um breve exemplo a respeito disso. Para simplificar, no arquivo script.js , vamos forçar por meio das crases para que nosso JSON inicie-se como do tipo string.

// Crie um arquivo index.html e adicione o seguinte código:
// Também crie um arquivo script.js e adicione a lógica a seguir:
// Nesse script, utilizamos o JSON.parse() para analisar nosso json (nesse caso, uma string) e converter em um formato compatível com o JavaScript. Assim, temos mais poder sobre as informações e podemos manipular elas para, por exemplo, adicionar elas ao DOM.
