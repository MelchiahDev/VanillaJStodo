"use strict";

import TodoItem from "./todoItemComponent.js";

const parseTodoItems = async () => {
    const name = 'todoList';
    const str = window.localStorage;
    const arr = JSON.parse(str.getItem(name));

    return arr;
}

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
   
export const fetchItemCount = async () => {
   const arr = await parseTodoItems();

   if(arr){
       return arr.length;
   }

};

export const fetchLastTodoItem = async () => {
    const arr = await parseTodoItems();
    
    if(arr){
     return arr[arr.length - 1];   
    }

};

export const loadTodoItems = async (element) => {
    const itemsAmount = await fetchItemCount();

    for(let i = 0; i < itemsAmount; i++){
        await TodoItem(element);
    }
};