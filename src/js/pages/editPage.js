import {logo} from "../components/logo";
import makeHeader from "../components/header";
import tagline from "../components/tagline";
import link from "../components/link";
import form from "../components/form/form";
import Button from "../components/button/Button";

const editPage = function(props){
    const page = document.createElement('div');
    page.classList.add('editPage');
    const header = document.createElement('header');
    header.classList.add('page-header');
    const h1 = makeHeader('h1', logo, 'grahams-logo');
    const tag = tagline('Edit your todo below', 'tag-line');
    const linkElem = link('to do app', '/todos', 'todoButton');

    header.append(h1);
    header.append(tag);
    header.append(linkElem);

    page.append(header);

    function cancelEdit(e){
        e.preventDefault();
        console.log('cancel');
    }

    function editTodo(e){
        e.preventDefault();
        console.log('edit');
    }

    if(props !== null){
        const pageForm = form(props, 'edit');

        const cancelButton = Button('Cancel','cancel');
        const editTodoButton = Button('Edit Todo', 'edit');
        cancelButton.addEventListener('click', cancelEdit);
        editTodoButton.addEventListener('click', editTodo);

        pageForm.append(cancelButton);
        pageForm.append(editTodoButton);
        page.append(pageForm);
    }
    

    return page;
}

export default editPage;