// AULA ASSÍNCRONA

// Para ACESSAR o conteúdo de uma tag HTML pelo JS.
/*
// Imprime no console todo o conteúdo da Div. Aqui há o OBJETO que representa o ELEMENTO. Ex. Retorna: <p id="paragraph" style="color: red;">Dê uma cor para este parágrafo!</p>
console.log(document.getElementById('paragraph'))

// Imprime o valor real do CONTEÚDO. Ex1. Retorna: Dê uma cor para este parágrafo!
// Retorna o conteúdo "seco"... ou seja, se tiver tags "strong" no texto por exemplo, ela sairá escrita também quando imprimir.Ex2.Retorna: Dê uma < strong > cor</strong > para este parágrafo!
console.log(document.getElementById('paragraph').innerHTML)

// Aqui nessa propriedade(innerText), FILTRA TUDO e aparece somente o valor que importa na impressão. Ex. Retorna: Dê uma cor para este parágrafo!
console.log(document.getElementById('paragraph').innerText)
*/

/*
// Para ACESSAR e ALTERAR o conteúdo de uma tag HTML pelo JS.

document.getElementById('paragraph').innerText =
  'Novamente troque a cor do parágrafo.'
*/
