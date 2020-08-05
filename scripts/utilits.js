//открытие попапа
function openPopup(somePopup) {
    somePopup.classList.add('popup_opened');
    document.addEventListener('keyup', handleEscKey);
}

//закрытие попапа по Esc
function handleEscKey(event) {
    if (event.key !== 'Escape') {
        return;
    }
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
}

//закрытие попапа
function closePopup(somePopup) {
    somePopup.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleEscKey);
}

//деактивация кнопки
function buttonDisable(buttonElement, inactiveButtonClass) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
}