const phoneField = document.querySelector('#phone-field');
const errorContainer = document.querySelector('.error-message');
const submitButton = document.querySelector('.button');

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (phoneField.value.length < 1) 
        errorContainer.textContent = 'Это поле не должно быть пустым';
    else 
        errorContainer.textContent = '';
})