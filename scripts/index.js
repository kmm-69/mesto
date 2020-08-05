import Card from './Card.js';
import FormValidator from './FormValidator.js';

const FormEditValidator = new FormValidator(config, formEdit);
FormEditValidator.enableValidation();

const FormAddValidator = new FormValidator(config, formAdd);
FormAddValidator.enableValidation();

//заполенение полей при открытии редактирования профиля
function insertProfilePopupText() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

//отправка формы 
function formSubmitHandler(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
}

//добавление новых карточек
function formElementAdd(event) {
    event.preventDefault();
    const inputCardName = popupAddNameInput.value
    const inputCardLink = popupAddSourceInput.value
    popupAddNameInput.value = '';
    popupAddSourceInput.value = '';
    const NewCard = new Card(inputCardName, inputCardLink);
    const cardElement = NewCard.generateCard();
    elementsList.prepend(cardElement);
    closePopup(popupCard);
    buttonDisable(buttonElement, 'popup__saveButton_inactive');
}


profileEditButton.addEventListener('click', () => {
    openPopup(popupProfile)
    insertProfilePopupText()
});
popupCloseButton.addEventListener('click', () => closePopup(popupProfile));
profileSubmitButton.addEventListener('submit', formSubmitHandler);

popupAddButton.addEventListener('click', () => openPopup(popupCard));
popupAddCloseButton.addEventListener('click', () => closePopup(popupCard));
popupSubmitButton.addEventListener('click', formElementAdd);

popupViewCloseButton.addEventListener('click', () => closePopup(popupViewImage));

popupProfile.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup_opened')) {
        closePopup(popupProfile);
    }
});

popupCard.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup_opened')) {
        closePopup(popupCard);
    }
});

popupViewImage.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup_opened')) {
        closePopup(popupViewImage);
    }
});

initialCards.forEach((item) => {
    const NewCard = new Card(item.name, item.link);
    const cardElement = NewCard.generateCard();
    elementsList.prepend(cardElement);
});

