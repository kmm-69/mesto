const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

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
const popupViewImage = document.querySelector('.popup_type_photo');
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
