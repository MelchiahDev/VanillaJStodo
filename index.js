import todoContainerComponent from "./todosContainerComponent.js";

(async () => {

    const mainContainer = document.getElementById("main-container");
    await todoContainerComponent(mainContainer);

})();