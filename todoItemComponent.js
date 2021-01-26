import cssComponentHelper from './componentHelper.js';
const {
    initializeElement,
    findElementFromClassname,
    returnElementFromClassname
} = cssComponentHelper;

import {
    addTodoItemToDocumentEvent
} from './componentEvents.js';


export default async (parent) => {

    const _element_ = document.createElement("div");

    const className = 'todoItem';

    const classNames = Object.freeze({
        button: "btn",
        todoItemInput: "todoItemInput",
        todoItemDelBtn: "todoItemDelBtn",
        todoItemDoneBtn: "todoItemDoneBtn"
    });

    const _html_ = /*html*/ `
        <input type="text" name="" class="${classNames.todoItemInput}" value="">
        <button type="submit" class="btn ${classNames.todoItemDelBtn}">Delete</button>
        <button type="submit" class= "btn ${classNames.todoItemDoneBtn}">Done</button>
    `;

    initializeElement(_element_)(parent)(_html_)(className);
    


    const _css_ = {
        element: (async (el) => {

            el.style.color = "white";
            el.style.margin = "1rem 0";

        })(_element_)
    }

    _css_[classNames.todoItemInput] = (async (el) => {
        const className = classNames.todoItemInput;

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


    })(_element_);

    _css_[classNames.button] = (async (el) => {
        const className = classNames.button;

        findElementFromClassname(el)(className)((child) => {
            child.style.backgroundColor = "white";
            child.style.padding = "0.5rem 1rem";
            child.style.border = "none";
            child.style.borderRadius = "0.5rem";
            child.style.color = "white";
        });

    })(_element_) 

    _css_[classNames.todoItemDelBtn] = (async (el) => {
        const className = classNames.todoItemDelBtn;

        findElementFromClassname(el)(className)((child) => {
            child.style.backgroundColor = '#E94F2D';
            child.style.color = "white";
        });

    })(_element_);

    _css_[classNames.todoItemDoneBtn] = ( async (el) => {
        const className = classNames.todoItemDoneBtn;

        findElementFromClassname(el)(className)((child) => {
            child.style.backgroundColor = 'limegreen';
        });

    })(_element_);



    const _events_ = {};

    _events_[className] = (async (el) => {

        parent.addEventListener(addTodoItemToDocumentEvent.state.eventName, (event) => {
            // Do nothing...
        });

    })(_element_);

    _events_[classNames.todoItemDelBtn] = (async (el) => {

        el.addEventListener('click', (event) => {
            if(event.target.classList.contains(classNames.todoItemDelBtn)){
                el.remove();
            }
        });

    })(_element_);



    return {
        element: _element_
    };
};