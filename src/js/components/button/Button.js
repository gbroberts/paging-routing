import makeElement from "../../utils/makeElement";
import styles from "./styles.module.scss";

const cancelButton = function(label, id){
    const template = `
    <button class="${styles.buttonBase}" id="${id}">
        ${label}
    </button>
    `;
    const element = makeElement(template);
    
    return element;
}

export default cancelButton;