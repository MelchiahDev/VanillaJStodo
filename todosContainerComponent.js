import cssComponentHelper from './componentHelper.js';
const {
    initializeElement,
    findElementFromClassname,
    returnElementFromClassname
} = cssComponentHelper;

import {
    parseTodoItems
} from "./todoItemInterface.js";

import SaveTodoComponent from "./saveTodoComponent.js";
import TodoItemComponent from "./todoItemComponent.js";
import todoItemComponent from './todoItemComponent.js';



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

        const loadTodoItems = async () => {
            const itemValues = await parseTodoItems();

            for (const itemValue of itemValues){
                const { element } = await todoItemComponent(el);
                const todoItemInputElement = element.children[0];
                todoItemInputElement.value = itemValue;
            }
        }

        await SaveTodoComponent(el);
        loadTodoItems();

    })(_element_);
    
    return {
        element: _element_
    }
};