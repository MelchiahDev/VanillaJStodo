import TodoItem from "./todoItemComponent.js";

import ComponentHelper from './componentHelper.js';
const {
    initializeElement,
    findElementFromClassname,
    returnElementFromClassname
} = ComponentHelper;

import {
    insertTodoItemToLS
} from './todoItemInterface.js';

import {
    addTodoItemToDocumentEvent
} from './componentEvents.js';
import todoItemComponent from "./todoItemComponent.js";

import {
    mediaQueries
 } from './componentConstObjects.js';



export default async (parent) => {

    const _element_ = document.createElement('div');

    const className = 'todoSave'

    const classNames = {
        saveItemInput: "saveItemInput",
        saveButton: "saveButton"
    };

    const _html_ = /*html*/ `
        <input type="text" name="textInput" value="New todo" class=${classNames.saveItemInput}>
        <button class=${classNames.saveButton}>Save</button>
    `;

    initializeElement(_element_)(parent)(_html_)(className);



    const _css_ = {
        element: (async (el) => {
            const saveButton = returnElementFromClassname(el)(classNames.saveButton);
            const saveItemInput = returnElementFromClassname(el)(classNames.saveItemInput);

            el.style.display = "flex";
            el.style.flexDirection = "row";
            el.style.alignItems = "center";
            el.style.justifyContent = "space-between";
            el.style.marginBottom = "1rem";

            Array.from(el.children).forEach((elem) => {
                elem.style.marginBottom = "1rem";
            })


            if((window.innerHeight/window.innerWidth) > 1){ // Portrait
                el.style.flexDirection = "column";
                el.style.alignItems = "flex-start";

                saveItemInput.style.maxWidth = "18rem";
            }

            mediaQueries.SM.addEventListener('change', (ev) => {
                if(ev.matches){
                }
            });

            mediaQueries.MD.addEventListener('change', (event) => {
                if(event.matches){
                }          
            })
            mediaQueries.XL.addEventListener('change', (event) => {
                if(event.matches){
                }          
            })

        })(_element_),

        saveItemInput: (async (el) => {
            const className = classNames.saveItemInput;

            findElementFromClassname(el)(className)((child) => {
                child.style.padding = "0.5rem 1rem";
                child.style.border = "none";
                child.style.borderRadius = "0.5rem";
            });

            el.addEventListener('focusin', (event) => {
                if(event.target.className === className){
                    event.target.style.boxShadow = "0px 0px 10px 5px rgba(0,223,255,0.50)";
                }
            }, {
                passive: true
            });

            el.addEventListener('focusout', (event) => {
                if(event.target.className === className){
                    event.target.style.boxShadow = "none";
                }
            }, {
                passive: true
            });

        })(_element_),

        saveButton: (async (el) => {
            const className = classNames.saveButton;

            findElementFromClassname(el)(className)((child) => {
                if(child instanceof HTMLButtonElement){
                    child.style.color = "white";
                    child.style.backgroundColor = "dodgerblue";
                    child.style.padding = "0.5rem 1rem";
                    child.style.border = "none";
                    child.style.borderRadius = "0.5rem";
                }
            });

        })(_element_)
    }

    const _events_ = {};

    _events_[className] = (async (el) => {

        /**
        el.addEventListener(addTodoItemToDocumentEvent.state.eventName,async (event) => {
            const todoItem = await TodoItem(parent);
            todoItem.element.children[0].value = event.detail.textInput;
        });
        */

    })(_element_);

    _events_[classNames.saveItemInput] = (async (el) => {

        el.addEventListener('focusin', ev => {
            if(ev.target.classList.contains(classNames.saveItemInput)){
               const saveItemInput = returnElementFromClassname(el)(classNames.saveItemInput);
               
               if(saveItemInput instanceof HTMLInputElement){
                   saveItemInput.value = "";
               }
            }
        },{
            passive: true
        });

    })(_element_);

    _events_[classNames.saveButton] = (async (el) => {
        // This button will add items to localStorage.
        el.addEventListener('click', (event) => {
            if(event.target.classList.contains(classNames.saveButton)){

                const saveItemInput = returnElementFromClassname(el)(classNames.saveItemInput);
                addTodoItemToDocumentEvent.createEvent(saveItemInput.value);
                addTodoItemToDocumentEvent.dispatch(el);
                insertTodoItemToLS(saveItemInput.value);
                
                setTimeout(() => {
                    saveItemInput.value = "";
                }, 0);

            }
        }, {
            passive: true
        });

    })(_element_);

    return {
        element: _element_
    };
};