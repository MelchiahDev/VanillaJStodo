import SaveTodo from "./saveTodoComponent.js";
import { loadTodoItems } from "./todoItemInterface.js";

(async () => {

    const todosContainer = document.getElementById("todos-container");
    const todoEntry = await SaveTodo(todosContainer);
    loadTodoItems(todosContainer);

})();