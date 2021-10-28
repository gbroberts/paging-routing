import makeElement from "../../utils/makeElement";

const addNewTodo = function(){
    const template = `
    <div class="create-todo">
        <button>
            <img src="/data/assets/add-icon.svg" alt="Add new todo">
        </button>
    </div>
    `;
    const element = makeElement(template);
    
    return element;
}

export default addNewTodo;

