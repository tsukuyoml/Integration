const modalButton = document.querySelector('.modal-button')
const modalContent = document.querySelector('.modal-content')


function openModal (evt, modalId) {
    evt.preventDefault();
    const modalWindow = document.getElementById(modalId);
    modalWindow.classList.add('open');
}

function stopAscoat (evt) {
    evt.stopPropagation();
}

function closeModal (evt, modalId) {
    evt.preventDefault();
    const modalWindow = document.getElementById(modalId);
    modalWindow.classList.remove('open');
}