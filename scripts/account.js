const loginForm = document.querySelector('form');
const loginField = loginForm.querySelector('#login-field');
const passwordField = loginForm.querySelector('#password-field');
const submitButton = loginForm.querySelector('.login-button');
const errorContainer = loginForm.querySelector('.error-message');

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (loginField.value.length < 1) {
        errorContainer.textContent = 'Пожалуйста, введите логин';
    } else if (passwordField.value.length < 1) {
        errorContainer.textContent = 'Пожалуйста, введите пароль';
    } else {
        errorContainer.textContent = 'Неправильный логин или пароль';
    }
});