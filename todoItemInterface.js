"use strict";

const state = {
    name : 'todoList',
    str : window.localStorage,
};

export const parseTodoItems = async () => {
    const { name, str } = state;
    const arr = JSON.parse(str.getItem(name));

    return arr;
}

export const insertTodoItemToLS = (textInput) => {
    const { name, str } = state;

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

   if(arr instanceof Array){
       return arr.length;
   }

};

export const fetchLastTodoItem = async () => {
    const arr = await parseTodoItems();
    
    if(arr instanceof Array){
     return arr[arr.length - 1];   
    }

};

export const pluckItem = async (elementNo) => {
    if (typeof elementNo !== 'number'){
        throw new TypeError();
    }

    const { name, str } = state;
    let arr = await parseTodoItems();

    if (arr instanceof Array){

        arr.splice(elementNo, 1);
        str.removeItem(name);
        str.setItem(name, JSON.stringify(arr));
                
    }else{
        throw new TypeError();
    }
}