const fullName = document.getElementById('input-full_name');
const phone = document.getElementById('input-phone');
const companyName = document.getElementById('input-company-name');
const textInput = document.getElementById('review-text-input');
const errorMessage = document.querySelector('.error-message');

function closeModal (evt, modalId) {
    evt.preventDefault();
    const modalWindow = document.getElementById(modalId);
    modalWindow.classList.remove('open');
    errorMessage.textContent = '';
    fullName.value = '';
    phone.value = '';
    companyName.value = '';
    textInput.value = '';
}

function sendMail (evt) {
    if (fullName.value.length < 1 ||
        companyName.value.length < 1 ||
        textInput.value.length < 1
    ) {
        errorMessage.textContent = 'Необходимо заполнить поля: "Ваше ФИО", "Сервис поиска жилья" и "Текст отзыва"';
    } else {
        const params = {
            fullName: fullName.value,
            phone: phone.value,
            companyName: companyName.value,
            review: textInput.value
        };
        // emailjs.send('service_tamkq4b', 'template_5rz4mdk', params);
        console.log(params)
        closeModal(evt, 'review_form');
        openModal(evt, 'success-message')
    };
};