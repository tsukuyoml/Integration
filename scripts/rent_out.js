const phoneField = document.querySelector('#phone-field');
const errorContainer = document.querySelector('.error-message');
const submitButton = document.querySelector('.button');
const modalWindow = document.querySelector('#rent_out_success')
const modalButton = document.querySelector('.modal-button')

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (phoneField.value.length < 1) {
        errorContainer.textContent = 'Это поле не должно быть пустым';
        return;
    } else {
        errorContainer.textContent = '';
        modalWindow.classList.add('open');
    }
});

modalButton.addEventListener('click', (evt) => {
    modalWindow.classList.remove('open');
});

modalWindow.addEventListener('click', (evt) => {
    modalWindow.classList.remove('open');
});