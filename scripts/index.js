const popup = document.querySelector('.popup');
const editProfileButton = document.querySelector('.profile__edit');
const popupCloseButton = popup.querySelector('.popup__close');
const submitButton = document.querySelector('.popup__forms');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__surname');



const openPopup = function() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

}


const closePopup = function() {
    popup.classList.remove('popup_opened');
}


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}

editProfileButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
submitButton.addEventListener('submit', formSubmitHandler);

