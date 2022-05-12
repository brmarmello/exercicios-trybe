// Uma coisa importante para se ter em mente na hora de produzir é o escopo e a interação dos testes. Para isso, existem algumas divisões arbitrárias que nos ajudam a pensar uma ordem de desenvolvimento de testes, sendo as mais comuns:

    //Testes unitários: Trabalham presumindo um escopo limitado a um pequeno fragmento do seu código com interação mínima entre recursos externos.Ex: Uma função com um fim específico, como uma função que soma dois números:

    // ./funcoes/calculo/soma.js

    // Testes de integração: Trabalham presumindo a junção de múltiplos escopos (que tecnicamente devem possuir, cada um, seus próprios testes) com interações entre eles. Ex: Uma função de calculadora que usa funções menores que eu posso testar isoladamente/ de forma unitária:

    // ./funcoes/calculadora.js


    // Testes de Ponta-a-ponta: Chamados também de Fim-a-fim (End-to-End; E2E), esses testes pressupõe um fluxo de interação completo com a aplicação, de uma ponta a outra. Aqui, poderíamos pensar uma API que utiliza nossa calculadora - assim como diversas outras funções mais complexas - na hora de realizar uma operação de venda de produtos. Esse teste é o mais completo pois garante que todos os demais testes estão ou serão desenvolvidos (pensando na prática do TDD que veremos mais adiante).
    // Um exemplo prático disso, são os avaliadores de projetos de front-end: Eles pressupõem que toda cadeia de recursos deve estar funcionando para correta renderização das páginas. O que é avaliado com interações de uma ponta a outra dessa aplicação são os requisitos, na prática.

// Evidentemente isso pode variar a depender do contexto e da forma como os grupos trabalham, mas no geral, existe sempre uma relação de escopo / interação que é definida durante o desenvolvimento de testes, e quanto maior o número de escopos diferentes e situações de interação prevista dentro desses escopos, maior a coesão e a confiabilidade do seu projeto.

/*
Sobre a estrutura:
Nossa função deverá receber um parâmetro "media";
Responder com "reprovado" ou "aprovado".
Sobre os comportamentos esperados:
1 - Se passado um valor menor que 7, por exemplo 4, a resposta deve ser "reprovado";
2 - Se passado um valor maior que 7, por exemplo 9, a resposta ser "aprovado";
3 - E, não podemos esquecer do "OU", sendo assim, se passado 7, a resposta deve ser "aprovado";
Essa estrutura é tudo o que precisamos para escrever nossos testes, antes mesmo de falarmos sobre código.
*/

// npm install -D mocha chai