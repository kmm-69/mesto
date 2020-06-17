const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit');
const popupCloseButton = popup.querySelector('.popup__close');


const popupToggle = function () {
    popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);


// Находим форму в DOM
let popupSubmitButton = document.querySelector('.popup__forms');  // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = document.querySelector('.popup__input_type_name');  // Воспользуйтесь инструментом .querySelector()
    let jobInput = document.querySelector('.popup__input_type_job'); // Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value

   

    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__surname');


    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

   popupToggle();

}



// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupSubmitButton.addEventListener('submit', formSubmitHandler);



