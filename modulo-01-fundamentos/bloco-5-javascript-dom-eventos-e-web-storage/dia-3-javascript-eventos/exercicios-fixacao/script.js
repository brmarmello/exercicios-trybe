function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ]
  const weekDaysList = document.querySelector('.week-days')

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index]
    const dayListItem = document.createElement('li')
    dayListItem.innerHTML = days

    weekDaysList.appendChild(dayListItem)
  }
}

createDaysOfTheWeek()

// Escreva seu código abaixo.

// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
]

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days') // Seleciona o elemento com id "days" que é nossa lista.

  // Para add os dias em nossa lista percorremos(usando "for") o array fornecido na questão.

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index] // Em cada iteração iremos armazenar o elemento atual(o dia)em uma variável que chamarei de "day".
    let dayItem = document.createElement('li') // Cria o "list item" que representa o dia na nossa lista.

    // Fazer as verificações solicitadas no exercício para acrescentar as classes conforme os requisitos.

    // Se for dia 24 ou 31, além da classe day, vamos add tbm a classe "holiday"e add o elemento dessa classe à lista.
    // Se for dia 4 ou 11 ou 18, além da classe day, vamos add tbm a classe "friday"e add o elemento dessa classe à lista.
    // Se não for nenhum dia já verificado, mas for dia 25, além da classe day, vamos add tbm as classes "holiday" e "friday", e add os elementos dessas classes à lista.
    // Por último, se não for nenhum dia já verificado anteriormente, add a classe "day" ao elemento e add ele como filho da nossa lista.
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday'
      dayItem.innerHTML = day
      getDaysList.appendChild(dayItem)
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday'
      dayItem.innerHTML = day
      getDaysList.appendChild(dayItem)
    } else if (day === 25) {
      dayItem.className = 'day holiday friday'
      dayItem.innerHTML = day
      getDaysList.appendChild(dayItem)
    } else {
      dayItem.innerHTML = day
      dayItem.className = 'day'
      getDaysList.appendChild(dayItem)
    }
  }
}
// Agora só falta chamar a função para que ela seja executada.
createDaysOfTheMonth()
