// O script abaixo exemplifica um dos usos do localStorage. Recomendamos tirar um tempo para analisar bem cada função.
// Um bom ponto de atenção para decidir quando você deve usar um ou outro é perguntar a si mesmo sobre a importância da permanência da informação que você vai armazenar.

/*
const button = document.getElementById('add-button')
const input = document.getElementById('phrases-input')
const list = document.getElementById('phrases-list')

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases'))
  const phraseText = input.value
  oldList.push(phraseText)
  localStorage.setItem('phrases', JSON.stringify(oldList))
  insertPhraseInDOM()
}

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'))
  const listLength = phrasesList.length - 1
  const phraseText = phrasesList[listLength]
  const phrase = document.createElement('li')
  phrase.innerText = phraseText
  list.appendChild(phrase)
}

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]))
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'))
    const listLength = phrasesList.length - 1
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li')
      listElement.innerText = phrasesList[index]
      list.appendChild(listElement)
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage)

window.onload = function () {
  initialRenderization()
}
*/

// E o próximo script tem a mesma funcionalidade que o anterior. Mas a diferença se dá no momento em que você fecha a sua aba ou o seu navegador. Lhe encorajamos a experimentar por si só e ver o que acontece.

const button = document.getElementById('add-button')
const input = document.getElementById('phrases-input')
const list = document.getElementById('phrases-list')

function addPhraseToSessionStorage() {
  if (sessionStorage.getItem('phrases') === null) {
    sessionStorage.setItem('phrases', JSON.stringify([]))
  }
  const oldList = JSON.parse(sessionStorage.getItem('phrases'))
  const phraseText = input.value
  oldList.push(phraseText)
  sessionStorage.setItem('phrases', JSON.stringify(oldList))
  insertPhraseInDOM()
}

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(sessionStorage.getItem('phrases'))
  const listLength = phrasesList.length - 1
  const phraseText = phrasesList[listLength]
  const phrase = document.createElement('li')
  phrase.innerText = phraseText
  list.appendChild(phrase)
}

button.addEventListener('click', addPhraseToSessionStorage)

// Tenha em mente que os usos do webStorage são extremamente amplos e não estão limitados a esses exemplos. Acreditamos na sua criatividade para fazer coisas mais engenhosas que essas que mostramos. As ferramentas estão em suas mãos e não se esqueça de tirar quaisquer dúvidas com colegas e instrutores. ;)
