import {logo} from "../components/logo";
import makeHeader from "../components/header";
import tagline from "../components/tagline";
import form from "../components/form/form";
import Button from "../components/button/Button";
import Router from "../routes/router";
import { getStore } from "../redux/store";
import reducer from "../redux/reducer";
import keyGenerator from "../utils/key";


const addPage = function(props){
    const page = document.createElement('div');
    page.classList.add('editPage');
    const header = document.createElement('header');
    header.classList.add('page-header');
    const h1 = makeHeader('h1', logo, 'grahams-logo');
    const tag = tagline('Add your new todo below', 'tag-line');
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error');


    header.append(h1);
    header.append(tag);
    header.append(errorContainer);

    page.append(header);

    function cancelAdd(e){
        e.preventDefault();
        Router('/todos');
    }

    function addTodo(e){
        e.preventDefault();
        const formReference = page.querySelector('#addForm');
        const formValidation = formReference.checkValidity();
        
        if(formValidation){
            const newTodo = {
                id:formReference.elements['todoId'].value,
                category:formReference.elements['category'].value,
                title:formReference.elements['title'].value,
                isCompleted:formReference.elements['isCompleted'].checked,
                startDate:formReference.elements['startDate'].value,
                startTime:formReference.elements['startTime'].value,
                endDate:formReference.elements['endDate'].value,
                endTime:formReference.elements['endTime'].value
            }
            const index = getStore().findIndex(todo => todo.id === newTodo.id)
            if(index !== -1){
                errorContainer.innerText = "That todo id already exists. Please cancel the add todo and try again";
            }else{
                const action={
                    type:"add",
                    payload:{newTodo},
                    cb:()=> Router('/todos')
                }
                reducer(action);
            }
        }else{
            errorContainer.innerText = "Please fill in all the fields";
        }
    }

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');

    if(props === null){
        const pageForm = form(props, 'add');

        let formTodoId = null;

        do {
            formTodoId = keyGenerator();
        } while (-1 !== getStore().findIndex(todo => todo.id === formTodoId));

        pageForm.elements['todoId'].value = formTodoId;

        const cancelButton = Button('Cancel','cancel');
        const addTodoButton = Button('Add Todo', 'add');
        cancelButton.addEventListener('click', cancelAdd);
        addTodoButton.addEventListener('click', addTodo);
        addTodoButton.setAttribute('type', 'submit');

        buttonDiv.append(cancelButton);
        buttonDiv.append(addTodoButton);
        pageForm.append(buttonDiv);
        page.append(pageForm);
    }
    
    return page;
}

export default addPage;