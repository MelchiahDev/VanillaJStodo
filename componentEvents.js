// saveTodoComponent -> element
export const addTodoItemToDocumentEvent = Object.freeze({
    state: Object.seal({
        eventName: "addTodoItemToDocument",
        event: undefined,
    }),
    createEvent(textInput) {
        if(typeof textInput !== "string"){
            throw new TypeError();
        }

        this.state.event = new CustomEvent(this.state.eventName, {
        detail: {
            textInput: textInput
        },
        bubbles: true
        })

    },
    dispatch(element){

        if(element && this.state.event){
            element.dispatchEvent(this.state.event);
        }else {
            throw new Error(`ERROR: event does not exist`);
        }
    }
});