window.onload = function () {
  const button = document.querySelector('#start-race-btn');

  const car1 = document.querySelector('.car1');
  const car2 = document.querySelector('.car2');

  function reset() {
    car1.style.marginLeft = '0px';
    car2.style.marginLeft = '0px';
  }

  reset();

  // 1. Qual o tipo do evento que deve ser escutado? (string)
  // 2. O que deve ser feito quando o evento for disparado? (function)
  button.addEventListener('click', function () {

    car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px';
    car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';


    if (parseInt(car1.style.marginLeft) > window.innerWidth) {
      alert('Carro VERMELHO ganhou!!!');
      reset();
    }

    if (parseInt(car2.style.marginLeft) > window.innerWidth) {
      alert('Carro VERDE ganhou!!!');
      reset();
    }
  });

  /**
   * PARA-CASA BÔNUS!
   *
   * Coloque uma borda no carrinho que for clicado, indicando que ele está selecionado;
   * Somente um carrinho pode ficar selecionado por vez;
   * Não coloque borda na seção de carrinhos;
   */
  // Event Bubbling
  document.querySelector('.car-section').addEventListener('click', function (event) {
    console.log('target:', event.target);
    console.log('currentTarget:', event.currentTarget);
  });
}
