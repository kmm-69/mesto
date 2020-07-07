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

//1. попап редактирования
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');

const editProfileButton = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close_type_profile');
const submitButton = document.querySelector('.popup__forms_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__surname');


const openPopup = function () {
    popupProfile.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

}

const closePopup = function () {
    popupProfile.classList.remove('popup_opened');

}

function formSubmitHandler(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}


editProfileButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
submitButton.addEventListener('submit', formSubmitHandler);


//2. попап добавления
const popupCard = document.querySelector('.popup_type_add-card');
const addButton = document.querySelector('.profile__addButton');
const popupAddCloseButton = document.querySelector('.popup__close_type_add-card');
const addNameInput = document.querySelector('.popup__input_type_add-name');
const addSourceInput = document.querySelector('.popup__input_type_source');
const submitAddButton = document.querySelector('.popup__saveButton_type_add-card');

const addFormElement = document.querySelector('.popup__forms_type_add-button');
const formAddCard = document.querySelector('.popup__container_type_add-card');


const openAddPopup = function () {
    popupCard.classList.add('popup_opened');

}

const closeAddPopup = function () {
    popupCard.classList.remove('popup_opened');
}


function addCard(card) {
    const initialCard = elementsTemplateElement.content.cloneNode(true);

    initialCard.querySelector('.element__name').textContent = card.name;
    initialCard.querySelector('.element__photo').src = card.link;
    initialCard.querySelector('.element__delete-btn').addEventListener('click', deleteCard);
    initialCard.querySelector('.element__like').addEventListener('click', likeToggle);
    initialCard.querySelector('.element__photo').addEventListener('click', function popupGrow() {
        popupViewImage.querySelector('.popup__photo').src = card.link;
        popupViewImage.querySelector('.popup__photo-caption').textContent = card.name;
        openViewPopup();
    });


    elementsList.prepend(initialCard);
};



function deleteCard(event) {
    const initialCard = event.target.closest('.element');
    initialCard.remove();
}

function likeToggle(event) {
    event.target.classList.toggle('element__like-active');
}

function formElementAdd(event) {
    event.preventDefault();
    const newName = addNameInput.value;
    const newLink = addSourceInput.src;
    const newCard = { name: newName, link: newLink };
    addNameInput.value = '';
    addSourceInput.src = '';
    addCard(newCard);
    closeAddPopup();
}

initialCards.forEach(card => {
    addCard(card);

})


addButton.addEventListener('click', openAddPopup);
popupAddCloseButton.addEventListener('click', closeAddPopup);
submitAddButton.addEventListener('click', formElementAdd);



//3.попап просмотра изображений
const popupViewImage = document.querySelector('.popup_type_photo');
const popupViewClose = document.querySelector('.popup__close_type_photo');
const popupViewCloseButton = document.querySelector('.popup__close_type_photo');

const openViewPopup = function () {
    popupViewImage.classList.add('popup_opened');
}

const closeViewPopup = function () {
    popupViewImage.classList.remove('popup_opened');
}

popupViewCloseButton.addEventListener('click', closeViewPopup);



