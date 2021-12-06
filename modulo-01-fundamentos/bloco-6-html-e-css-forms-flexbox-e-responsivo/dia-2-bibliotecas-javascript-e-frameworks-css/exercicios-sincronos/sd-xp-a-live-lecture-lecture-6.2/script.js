const button = document.querySelector('#btn-dont-click');

button.addEventListener('click', () => {
  const divModal = document.querySelector('div.modal');
  const objModal = new bootstrap.Modal(divModal);
  objModal.show();
});
