const numeratorInput = document.querySelector('#numerator');
const denominatorInput = document.querySelector('#denominator');
const spanResult = document.querySelector('#result');

function handleCalculateButtonClick() {
  const numeratorValue = Number(numeratorInput.value);
  const denominatorValue = Number(denominatorInput.value);

  // eslint-disable-next-line no-undef
  const result = divide(numeratorValue, denominatorValue);
  spanResult.innerHTML = result;
}

window.onload = () => {
  const calculateButton = document.querySelector('#calculateDivision');
  calculateButton.addEventListener('click', handleCalculateButtonClick);
};
