function showResult(userInput, result) {
  document
    .querySelector('#resultText')
    .innerHTML = `O somatório de <strong>${userInput}</strong> é <strong>${result}</strong>`;
}

function showError(error) {
  document.querySelector('#resultText').innerHTML = `<span style="color: red">${error}</span>`;
}

function onClickButton() {
  try {
    const inputNumber = document.querySelector('#number');
    const result = summationOf(inputNumber.value);
    showResult(inputNumber.value, result);
  } catch (xulambs) {
    showError(xulambs.message);
  }
}

window.onload = () => {
  document.querySelector('button')
    .addEventListener('click', onClickButton);
};
