export default class FormValidator {
    constructor(config, formElement) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._formElement = formElement;
    }

    enableValidation() {
        const formList = Array.from(document.querySelectorAll('.popup__forms'));
        formList.forEach((form) => {
            form.addEventListener('submit', evt => {
                evt.preventDefault();
            });
            this._setEventListeners();
        });
    }

    _showInputError = (formElement, inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._errorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError = (formElement, inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._errorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _isValid = (formElement, inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        }
    };

    _setEventListeners = (formElement) => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        const inactiveButtonClass = (this._inactiveButtonClass);
        this._toggleButtonState({ inputList, buttonElement, inactiveButtonClass });
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(formElement, inputElement);
                this._toggleButtonState({ inputList, buttonElement, inactiveButtonClass });
            });
        });
    };

    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState = ({ inputList, buttonElement, inactiveButtonClass }) => {
        if (this._hasInvalidInput(inputList)) {
            buttonDisable(buttonElement, inactiveButtonClass);
        } else {
            this._buttonEnable(buttonElement, inactiveButtonClass);
        }
    };

    _buttonEnable(buttonElement) {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.removeAttribute('disabled', true);
    }

}
