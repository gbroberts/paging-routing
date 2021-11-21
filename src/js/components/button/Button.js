import makeElement from "../../utils/makeElement";

const cancelButton = function(label, id){
    const template = `
    <button id="${id}">
        ${label}
    </button>
    `;
    const element = makeElement(template);
    
    return element;
}

export default cancelButton;