export default (() => {

    return {
        initializeElement: (element) => (parent) => (html) => (className) => {
            if(typeof html === 'string'){
                element.innerHTML = html;
            }else{
                throw new Error(`⛑ ERROR: _html_ within compnent, not of type 'string'.`);
            }
            
            if(typeof className === `string`){
                element.classList.add(className);
            }else{
                throw new Error(`⛑ ERROR: className within component, not of type 'string'.`);
            }

            if(parent){
                parent.appendChild(element);
            }else{
                throw new Error(`⛑ ERROR: Can not find the designated parent for this element.`);
            }

        },

        findElementFromClassname : (element) => (className) => (callback) => {
            for(let child of element.children){
                child.classList.forEach(($className => {
                    if($className === className){
                        callback(child);
                    }
                }))
            }
        },

        returnElementFromClassname : (element) => (className) => {
            for(let child of element.children){
                for(let $className of child.classList){
                    if($className === className){
                        return child;
                    }
                }
            }
        }
    }

})();