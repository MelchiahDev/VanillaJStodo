import ComponentHelper from './componentHelper.js';
const {
    initializeElement,
    findElementFromClassname,
    returnElementFromClassname
} = ComponentHelper;

import {
    insertTodoItemToLS
} from './todoItemInterface.js';

export default (async (parent) => {

    const _element_ = document.createElement('div');

    const classNames = {
        saveItemLabel: "saveItemLabel",
        saveItemInput: "saveItemInput",
        saveButton: "saveButton"
    };

    const _html_ = /*html*/ `
        <label for="textInput" class=${classNames.saveItemLabel}>New Item</label>
        <input type="text" name="textInput" class=${classNames.saveItemInput}>
        <button class=${classNames.saveButton}>Save</button>
    `;

    initializeElement(_element_)(parent)(_html_)('todoSave');

    const _css_ = {
        saveItemLabel: (async (el) => {
            const className = classNames.saveItemLabel;

            findElementFromClassname(el)(className)((child) => {
                child.style.color = "white";
                child.style.fontSize = "1.2rem";
                child.style.marginRight = "2rem";
            });

        })(_element_),

        saveItemInput: (async (el) => {
            const className = classNames.saveItemInput;

            findElementFromClassname(el)(className)((child) => {
                child.style.marginRight = "2rem";
                child.style.padding = "0.5rem 1rem";
                child.style.width = "20rem";
                child.style.border = "none";
                child.style.borderRadius = "0.5rem";

            });

            el.addEventListener('mouseover', (event) => {
                if(event.target.className === className){
                    event.target.style.backgroundColor = "green";
                }
            }, {
                passive: true
            });

            el.addEventListener('mouseout', (event) => {
                if(event.target.className === className){
                    event.target.style.backgroundColor = "white";
                }
            }, {
                passive: true
            });

        })(_element_),

        saveButton: (async (el) => {
            const className = classNames.saveButton;

            findElementFromClassname(el)(className)((child) => {
                child.style.color = "white";
                child.style.backgroundColor = "dodgerblue";
                child.style.padding = "0.5rem 1rem";
                child.style.border = "none";
                child.style.borderRadius = "0.5rem";
            });

        })(_element_)
    }

    const _events_ = {};

    _events_[classNames.saveButton] = (async (el) => {
        // This button will add items to localStorage.

        const InputTextElement = returnElementFromClassname(el)(classNames.saveItemInput);

        el.addEventListener('click', (event) => {
            if(event.target.classList.contains(classNames.saveButton)){
                insertTodoItemToLS(InputTextElement.value);
            }
        }, {

        });

    })(_element_);

    return {
        element: _element_
    };
})