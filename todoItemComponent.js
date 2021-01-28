import cssComponentHelper from './componentHelper.js';
const {
    initializeElement,
    findElementFromClassname,
    returnElementFromClassname
} = cssComponentHelper;

import {
    addTodoItemToDocumentEvent,
    removeTodoItemEvent
} from './componentEvents.js';

import {
    mediaQueries
} from './componentConstObjects.js';

import {
    fetchLastTodoItem
} from './todoItemInterface.js';



export default async (parent) => {

    const _element_ = document.createElement("div");

    const className = 'todoItem';

    const classNames = Object.freeze({
        button: "btn",
        buttonContainer: "buttonContainer",
        todoItemInput: "todoItemInput",
        todoItemDelBtn: "todoItemDelBtn",
        todoItemDoneBtn: "todoItemDoneBtn"
    });

    const classNameREG = /todoItem/;

    const classNamesREG = Object.freeze({
        button: /btn/,
        buttonContainer: /buttonContainer/,
        todoItemInput: /todoItemInput/,
        todoItemDelButton: /todoItemDelBtn/,
        todoItemDoneBtn: /todoItemDoneBtn/
    });

    const _html_ = /*html*/ `
        <input type="text" name="" class="${classNames.todoItemInput}" value=""/>
        <div class="${classNames.buttonContainer}">
            <button type="submit" class= "btn ${classNames.todoItemDoneBtn}">✔️</button>
            <button type="submit" class="btn ${classNames.todoItemDelBtn}">✖️</button>
        </div>
    `;

    initializeElement(_element_)(parent)(_html_)(className);
    


    const _css_ = {
        element: (async (el) => {
            const todoItemInput = returnElementFromClassname(el)(classNames.todoItemInput);

            el.style.color = "white";
            el.style.margin = "1rem 0";
            el.style.display = "flex";
            el.style.alignItems = "center";
            el.style.justifyContent = "space-around";

            Array.from(el.children).forEach((elem) => {
                elem.style.marginBottom = "1rem";
            })

            if((window.innerHeight/window.innerWidth) > 1){ // Portrait
                el.style.flexDirection = "column";
                el.style.alignItems = "flex-start";

                todoItemInput.style.width = "18rem";
            }

        })(_element_)
    }


    _css_[classNames.todoItemInput] = (async (el) => {
        const className = classNames.todoItemInput;

        findElementFromClassname(el)(className)((child) => {
            if(child instanceof HTMLElement){

                child.style.marginRight = "2rem";
                child.style.padding = "0.5rem 1rem";
                child.style.maxWidth = "20rem";
                child.style.border = "none";
                child.style.borderRadius = "0.5rem";
                child.style.opacity = 0.5;

            }
        });

        el.addEventListener('mouseover', (event) => {
            if(event.target.className === className){
                event.target.style.opacity = 1;
            }
        }, {
            passive: true
        });

        el.addEventListener('mouseout', (event) => {
            if(event.target.className === className){
                event.target.style.opacity = 0.5;
            }
        }, {
            passive: true
        });

    })(_element_);

    
    _css_[classNames.buttonContainer] = (async (el) => {
        const className = classNames.buttonContainer;

        findElementFromClassname(el)(className)((child) => {

            findElementFromClassname(child)(classNames.button)((child) => {
                if(child instanceof HTMLButtonElement){
                    child.style.padding = "0.5rem 1rem";
                    child.style.borderRadius = "0.5rem";
                }
            });

            findElementFromClassname(child)(classNames.todoItemDelBtn)((child) => {
                if(child instanceof HTMLButtonElement){
                    child.style.color = "white";
                    child.style.backgroundColor = "tomato";
                }
            });

            findElementFromClassname(child)(classNames.todoItemDoneBtn)((child) => {
                if(child instanceof HTMLButtonElement){
                    child.style.color = "white";
                    child.style.backgroundColor = "limegreen";
                }              
            });

        });


    })(_element_);



    const _events_ = {};


    _events_[className] = (async (el) => {

        // Do nothing...

    })(_element_);


    _events_[classNames.buttonContainer] = (async (el) => {
        // Don nothing...
    })(_element_);


    _events_[classNames.todoItemDelBtn] = (async (el) => {

        el.addEventListener('click', async (event) => {
            if(classNamesREG.todoItemDelButton.test(event.target.className)){
                removeTodoItemEvent.createEvent();
                removeTodoItemEvent.dispatch(el);
            }
        });

    })(_element_);



    return {
        element: _element_
    };
};