import cssComponentHelper from './componentHelper.js';
const {
    initializeElement,
    findElementFromClassname,
    returnElementFromClassname
} = cssComponentHelper;

import {
    parseTodoItems
} from "./todoItemInterface.js";

import {
    mediaQueries
} from './componentConstObjects.js';

import {
    pluckItem
} from './todoItemInterface.js';

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
        
        mediaQueries.XS.addEventListener('change', (event) => {
            if(event.matches){
                console.log(`media query XS`)
            }          
        });
        
        mediaQueries.SM.addEventListener('change', (event) => {
            if(event.matches){
                console.log(`media query SM`)
            }          
        });
        
        mediaQueries.MD.addEventListener('change', (event) => {
            if(event.matches){
                console.log(`media query MD`)
            }          
        });
        
        mediaQueries.LG.addEventListener('change', (event) => {
            if(event.matches){
                console.log(`media query LG`)
            }          
        });
        
        mediaQueries.XL.addEventListener('change', (event) => {
            if(event.matches){
                console.log(`media query XL`)
            }          
        });
        
        mediaQueries.XXL.addEventListener('change', (event) => {
            if(event.matches){
                console.log(`media query XXL`)
            }          
        });
        
    })(_element_);

    const _events_ = {};

    _events_[className] = (async (el) => {

        el.addEventListener("addTodoItemToDocument", async (ev) => {
            const todoItem = await TodoItemComponent(el);
            
            if(todoItem.element instanceof HTMLDivElement){
                findElementFromClassname(todoItem.element)("todoItemInput")((child) => {
                    child.value = ev.detail.textInput;
                });
            }else {
                throw new Error(`ERROR: Did not find todoItem`);
            }
        }, {
            capture: true
        });

        el.addEventListener("removeTodoItem", async (ev) => {
            const children = Array.from(el.children);

            children.forEach(async (child, index) => {

                if(Object.is(child, ev.target)){
                    await pluckItem(index - 1);
                    ev.target.remove();    
                }

            });

        });

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