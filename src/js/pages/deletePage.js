import {logo} from "../components/logo";
import makeHeader from "../components/header";
import tagline from "../components/tagline";
import todoContainer from "../components/todos/todoContainer";
import todoDisplay from "../components/todos/todoDisplay";
import Button from "../components/button/Button";
import Router from "../routes/router";
import { getStore } from "../redux/store";
import reducer from "../redux/reducer";

const deletePage = function(props){
    const page = document.createElement('div');
    page.classList.add('deletePage');
    const container = todoContainer();
    const header = document.createElement('header');
    header.classList.add('page-header');
    const h1 = makeHeader('h1', logo, 'grahams-logo');
    const tag = tagline('Deleting your todos since 2021', 'tag-line');

    header.append(h1);
    header.append(tag);
    page.append(header);

    function cancelDelete(e){
        Router('/todos');
    }

    function deleteTodo(e){
        if(props !== null){
            const removeTodo = props;
            const index = getStore().findIndex(todo => todo.id === removeTodo.id)
            const action ={
                type:"delete",
                payload:{index},
                cb: ()=> Router('/todos')
            }
            reducer(action);
        }
    }

    if(props !== null){
        const todoToDelete = todoDisplay(props);
        const ul = container.querySelector('ul');
        ul.append(todoToDelete);
        page.append(ul);
        const cancelButton = Button('Cancel','cancel');
        const deleteTodoButton = Button('Delete Todo', 'delete');
        cancelButton.addEventListener('click', cancelDelete);
        deleteTodoButton.addEventListener('click', deleteTodo);
        page.append(cancelButton);
        page.append(deleteTodoButton);
    }else{
        const errorParagraph = document.createElement('p');
        errorParagraph.classList.add("error");
        errorParagraph.innerText = "No Todo information detected. Press the button below to return.";
        const goBackButton = Button('Take Me Back', 'return');
        goBackButton.addEventListener('click', cancelDelete)
        page.append(errorParagraph);
        page.append(goBackButton);
    }

    return page
}

export default deletePage;