//добавление карточек
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

//открытие попапа
function openPopup(somePopup) {
    togglePopup();
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
    const newCard = { name: popupAddNameInput.value, link: popupAddSourceInput.value };
    popupAddNameInput.value = '';
    popupAddSourceInput.value = '';
    renderCard(newCard);
    closePopup(popupCard);
}

//функция создания карточек
function addCard(card) {
    const item = elementsTemplateElement.content.cloneNode(true);
    const popupElementName = item.querySelector('.element__name');
    const popupElementSource = item.querySelector('.element__photo');

    const popupDeleteButton = item.querySelector('.element__delete-btn');
    const popupLikeButton = item.querySelector('.element__like');
    const popupViewImagePhoto = document.querySelector('.popup__photo');
    const popupViewImageCaption = document.querySelector('.popup__photo-caption');

    popupElementName.textContent = card.name;
    popupElementSource.src = card.link;
    popupElementSource.alt = card.name;

    popupDeleteButton.addEventListener('click', deleteCard);
    popupLikeButton.addEventListener('click', likeToggle);


    popupElementSource.addEventListener('click', function popupGrow() {
        popupViewImagePhoto.src = card.link;
        popupViewImageCaption.textContent = card.name;
        popupViewImagePhoto.alt = card.name;
        openPopup(popupViewImage);
    });

    return item;
}

//рендеринг карточки
function renderCard(card) {
    const cardRendered = addCard(card);
    elementsList.prepend(cardRendered);
}


//проход по массиву
initialCards.forEach(card => {
    renderCard(card);
})

//удаление карточки
function deleteCard(event) {
    const item = event.target.closest('.element');
    item.remove();
}

//лайк карточки
function likeToggle(event) {
    event.target.classList.toggle('element__like-active');
}

function togglePopup() {
    const inputList = Array.from(popupCard.querySelectorAll('.popup__input'));
    const buttonElement = popupCard.querySelector('.popup__saveButton');
    const inactiveButtonClass = ('popup__saveButton_inactive');
    toggleButtonState({ inputList, buttonElement, inactiveButtonClass });
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