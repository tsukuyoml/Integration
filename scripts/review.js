const fullName = document.getElementById('input-full_name');
const phone = document.getElementById('input-phone');
const companyName = document.getElementById('input-company-name');
const textInput = document.getElementById('review-text-input');

function sendMail (evt) {
    const params = {
        fullName: fullName.value,
        phone: phone.value,
        companyName: companyName.value,
        review: textInput.value
    };
    emailjs.send('service_tamkq4b', 'template_5rz4mdk', params);
    closeModal(evt, 'review_form');
    fullName.value = '';
    phone.value = '';
    companyName.value = '';
    textInput.value = '';
};