const nameField = document.querySelector('#name-field')
const phoneField = document.querySelector('#phone-field');
const messageField = document.querySelector('#message-field')
const errorContainer = document.querySelector('.error-message');
const submitButton = document.querySelector('.button');
const modalWindow = document.querySelector('#rent_out_success')
const modalButton = document.querySelector('.modal-button')
const modalContent = document.querySelector('.modal-content')

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (phoneField.value.length < 1) {
        errorContainer.textContent = 'Это поле не должно быть пустым';
        return;
    } else {
        errorContainer.textContent = '';
        nameField.value = '';
        phoneField.value = '';
        messageField.value = '';
        modalWindow.classList.add('open');
    }
});

modalButton.addEventListener('click', (evt) => {
    modalWindow.classList.remove('open');
});

modalWindow.addEventListener('click', (evt) => {
    modalWindow.classList.remove('open');
});

modalContent.addEventListener('click', (evt) =>{
    evt.stopPropagation();
});