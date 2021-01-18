export default (() => {

    return {
        findElementFromClassname : (element) => (className) => (callback) => {

            for(let child of element.children){
                child.classList.forEach(($className => {
                    if($className === className){
                        callback(child);
                    }
                }))
            }
        }
    }

})();