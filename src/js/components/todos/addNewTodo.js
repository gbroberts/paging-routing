import makeElement from "../../utils/makeElement";

const addNewTodo = function(){
    const template = `
    <div>
        <button>
            <img src="/data/assets/addIcon.svg" alt="Add new todo">
        </button>
    </div>
    `;
    const element = makeElement(template);
    
    return element;
}

export default addNewTodo;

