export function openPopup(somePopup) {
    somePopup.classList.add('popup_opened');
    document.addEventListener('keyup', handleEscKey);
}

//закрытие попапа по Esc
export function handleEscKey(event) {
    if (event.key !== 'Escape') {
        return;
    }
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
}

//закрытие попапа
export function closePopup(somePopup) {
    somePopup.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleEscKey);
}
