export default class Card {
    constructor(name, link, cardTemplateSelector) {
        this._name = name;
        this._link = link;
        this._cardTemplateSelector = cardTemplateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector('.elements-template')
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.element__photo');
        this._like = this._element.querySelector('.element__like');
        this._setEventListeners();
        this._element.querySelector('.element__name').textContent = this._name;
        this._image.alt = this._name;
        this._image.src = this._link;
        return this._element;
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => {
            this._likeToggle();
        });

        this._element.querySelector('.element__delete-btn').addEventListener('click', () => {
            this._deleteCard();
        });

        this._image.addEventListener('click', () => {
            this._popupGrow();
        });
    }

    _likeToggle() {
        this._like.classList.toggle('element__like-active');
    }

    _deleteCard() {
        this._element.remove();
    }


    _popupGrow() {
        popupViewImage.querySelector('.popup__photo').src = this._link;
        popupViewImage.querySelector('.popup__photo-caption').textContent = this._name;
        popupViewImage.querySelector('.popup__photo').alt = this._name;
        openPopup(popupViewImage);
    }
}


