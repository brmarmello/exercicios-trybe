const input1 = document.querySelector('#numero1')
const input2 = document.querySelector('#numero2')
const btnSoma = document.querySelector('.soma')
const btnSubtracao = document.querySelector('.subtracao')
const paragrafoResultado = document.querySelector('.resultado')

function soma() {
  if (input1.value !== '' && input2.value !== '') {
    paragrafoResultado.innerHTML =
      parseInt(input1.value) + parseInt(input2.value)
  } else {
    alert('Falta um número')
    paragrafoResultado.innerHTML = ''
  }
}

btnSoma.addEventListener('click', soma)

function subtracao() {
  if (input1.value !== '' && input2.value !== '') {
    paragrafoResultado.innerHTML =
      parseInt(input1.value) - parseInt(input2.value)
  } else {
    alert('Falta um número')
    paragrafoResultado.innerHTML = ''
  }
}

btnSubtracao.addEventListener('click', subtracao)
