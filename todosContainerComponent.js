import cssComponentHelper from './componentHelper.js';
const {
    initializeElement,
    findElementFromClassname,
    returnElementFromClassname
} = cssComponentHelper;

import {
    loadTodoItems
} from "./todoItemInterface.js";

import SaveTodoComponent from "./saveTodoComponent.js";

export default async (parent) => {

    const _element_ = document.createElement("div");

    const className = "todos-container";

    const classNames = Object.freeze({
        
    });

    const _html_ = /*html*/`

    `;

    initializeElement(_element_)(parent)(_html_)(className);



    const _css_ = {};

    _css_[className] = (async (el) => {
        // Do nothing...
    })(_element_);

    const _events_ = {};

    _events_[className] = (async (el) => {

        await SaveTodoComponent(el);
        await loadTodoItems(el);

    })(_element_);
    
    return {
        element: _element_
    }
};