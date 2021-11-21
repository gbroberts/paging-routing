import makeElement from "../../utils/makeElement";

const cancelButton = function(action, id){
    const template = `
    <button id="${id}">
        ${action}
    </button>
    `;
    const element = makeElement(template);
    
    return element;
}

export default cancelButton;