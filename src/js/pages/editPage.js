import {logo} from "../components/logo";
import makeHeader from "../components/header";
import tagline from "../components/tagline";
import form from "../components/form/form";
import Button from "../components/button/Button";
import Router from "../routes/router";
import { getStore } from "../redux/store";
import reducer from "../redux/reducer";

const editPage = function(props){
    const page = document.createElement('div');
    page.classList.add('editPage');
    const header = document.createElement('header');
    header.classList.add('page-header');
    const h1 = makeHeader('h1', logo, 'grahams-logo');
    const tag = tagline('Edit your todo below', 'tag-line');
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error');


    header.append(h1);
    header.append(tag);
    header.append(errorContainer);

    page.append(header);

    function cancelEdit(e){
        e.preventDefault();
        Router('/todos');
    }

    function editTodo(e){
        e.preventDefault();
        const formReference = page.querySelector('#editForm');
        const formValidation = formReference.checkValidity();
        
        if(formValidation){
            const editedTodo = {
                id:formReference.elements['todoId'].value,
                category:formReference.elements['category'].value,
                title:formReference.elements['title'].value,
                isCompleted:formReference.elements['isCompleted'].checked,
                startDate:formReference.elements['startDate'].value,
                startTime:formReference.elements['startTime'].value,
                endDate:formReference.elements['endDate'].value,
                endTime:formReference.elements['endTime'].value
            }
            const index = getStore().findIndex(todo => todo.id === editedTodo.id)
            if(index === -1){
                errorContainer.innerText = "No todo matches that ID. Please go back to the todo list and try again.";
            }else{
                const action={
                    type:"edit",
                    payload:{index, editedTodo},
                    cb:()=> Router('/todos')
                }
                reducer(action);
            }

        }else{
            errorContainer.innerText = "Please fill in all the fields";
        }
        
    }

    if(props !== null){
        const pageForm = form(props, 'edit');

        const cancelButton = Button('Cancel','cancel');
        const editTodoButton = Button('Edit Todo', 'edit');
        cancelButton.addEventListener('click', cancelEdit);
        editTodoButton.addEventListener('click', editTodo);
        editTodoButton.setAttribute('type', 'submit');

        pageForm.append(cancelButton);
        pageForm.append(editTodoButton);
        page.append(pageForm);
    }else{
        const errorParagraph = document.createElement('p');
        errorParagraph.classList.add("error");
        errorParagraph.innerText = "No Todo information detected. Press the button below to return.";
        const goBackButton = Button('Take Me Back', 'return');
        goBackButton.addEventListener('click', cancelEdit)
        page.append(errorParagraph);
        page.append(goBackButton);
    }
    

    return page;
}

export default editPage;