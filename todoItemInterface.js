"use strict";

import TodoItem from "./todoItemComponent.js";

export const insertTodoItemToLS = (textInput) => {
    const name = 'todoList'
    const str = window.localStorage;

    if(str.getItem(name) === null){
        const arr = [];
        str.setItem(name, JSON.stringify(arr));
    }

    if(str.getItem(name)){
        const arr = JSON.parse(str.getItem(name));
        arr.push(textInput);
        str.setItem(name, JSON.stringify(arr));
    }
}
   
export const fetchItemCount = () => {
    const name = 'todoList'
    const str = window.localStorage;
    let count = 0;
    
    const arr = JSON.parse(str.getItem(name));

    for(let item in arr){
        count++;
    }

    return count;

};

export const fetchTodoItemText = () => {



};

export const loadTodoItems = async (element) => {
    const itemsAmount = fetchItemCount();

    for(let i = 0; i < itemsAmount; i++){
        await TodoItem(element);
    }
};