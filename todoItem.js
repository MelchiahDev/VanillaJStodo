import cssComponentHelper from './cssComponentHelper.js';
const { findElementFromClassname } = cssComponentHelper;

export default (async (parent) => {

    const _element_ = document.createElement("div");

    const classNames = {
        button: "btn",
        todoItemInput: "todoItemInput",
        todoItemDelBtn: "todoItemDelBtn",
        totoItemDoneBtn: "todoItemDoneBtn"
    };

    const _html_ = /*html*/ `
        <input type="text" name="" class="${classNames.todoItemInput}" value="">
        <button type="submit" class="btn ${classNames.todoItemDelBtn}">Delete</button>
        <button type="submit" class= "btn ${classNames.totoItemDoneBtn}">Done</button>
    `;

    (async () => {

        _element_.innerHTML = _html_;
        _element_.className = "todoItem";

        if(parent){
            parent.appendChild(_element_);
        }else{
            throw new Error(`⛑ ERROR: Can not find the designated parent for this element.`);
        }

    })();

    const _css_ = {
        element: (async (el) => {

            el.style.color = "white";
            el.style.margin = "1rem 0";

        })(_element_),

        itemInput: (async (el) => {
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


        })(_element_),

        button: (async (el) => {
            const className = classNames.button;

            findElementFromClassname(el)(className)((child) => {
                child.style.backgroundColor = "white";
                child.style.padding = "0.5rem 1rem";
                child.style.border = "none";
                child.style.borderRadius = "0.5rem";
                child.style.color = "white";
            });


        })(_element_),

        deleteBtn: (async (el) => {
            const className = classNames.todoItemDelBtn;

            findElementFromClassname(el)(className)((child) => {
                child.style.backgroundColor = '#E94F2D';
                child.style.color = "white";
            });

        })(_element_),

        doneBtn: ( async (el) => {
            const className = classNames.totoItemDoneBtn;

            findElementFromClassname(el)(className)((child) => {
                child.style.backgroundColor = 'limegreen';
            });


        })(_element_)
    }


    return {
        element: _element_
    };
});