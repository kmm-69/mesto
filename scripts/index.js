import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards } from './initialCards.js';
import { openPopup, handleEscKey, closePopup } from './utilits.js';

const elementsList = document.querySelector('.elements');
const elementsTemplateElement = document.querySelector('.elements-template');

//1.попап редактирования
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const profileEditButton = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close_type_profile');
const profileSubmitButton = document.querySelector('.popup__forms_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__surname');

//2.попап добавления
const popupCard = document.querySelector('.popup_type_add-card');
const popupAddButton = document.querySelector('.profile__addButton');
const popupAddCloseButton = document.querySelector('.popup__close_type_add-card');
const popupAddNameInput = document.querySelector('.popup__input_type_add-name');
const popupAddSourceInput = document.querySelector('.popup__input_type_source');
const popupSubmitButton = document.querySelector('.popup__saveButton_type_add-card');

//3.попап просмотра изображений
export const popupViewImage = document.querySelector('.popup_type_photo');
const popupViewCloseButton = document.querySelector('.popup__close_type_photo');

const buttonElement = popupCard.querySelector('.popup__saveButton');
const formEdit = document.querySelector('.popup__forms_type_edit')
const formAdd = document.querySelector('.popup__forms_type_add-button');

const config = {
    formSelector: '.popup__forms',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__saveButton',
    inactiveButtonClass: 'popup__saveButton_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

const formEditValidator = new FormValidator(config, formEdit);
formEditValidator.enableValidation();

const formAddValidator = new FormValidator(config, formAdd);
formAddValidator.enableValidation();

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
    formEditValidator.buttonDisable();
}

//добавление новых карточек
function formElementAdd(event) {
    event.preventDefault();
    const inputCardName = popupAddNameInput.value
    const inputCardLink = popupAddSourceInput.value
    popupAddNameInput.value = '';
    popupAddSourceInput.value = '';
    const newCard = new Card(inputCardName, inputCardLink);
    const cardElement = newCard.generateCard();
    elementsList.prepend(cardElement);
    closePopup(popupCard);
    formAddValidator.buttonDisable();
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
    const newCard = new Card(item.name, item.link);
    const cardElement = newCard.generateCard();
    elementsList.prepend(cardElement);
});

