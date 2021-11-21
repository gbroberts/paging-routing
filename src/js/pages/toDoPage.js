import {logo} from "../components/logo";
import makeHeader from "../components/header";
import tagline from "../components/tagline";
import { getStore } from "../redux/store";
import todoContainer from "../components/todos/todoContainer";
import todo from "../components/todos/todo";
import addNewTodo from "../components/todos/addNewTodo";
import Router from "../routes/router";

const toDoPage = function(){
    const todoList = getStore();
    const page = document.createElement('div');
    const container = todoContainer();
    const header = document.createElement('header');
    header.classList.add('page-header');
    const h1 = makeHeader('h1', logo, 'ui-header');
    const tag = tagline('What have we got to do today?', 'tag-line');

    header.append(h1);
    header.append(tag);
    page.append(header);

    function onDeleteTodo(e) {
        const todoId = e.currentTarget.parentElement.dataset.key;
        const todo = getStore().filter((todo) => todo.id === todoId);
        Router('/delete', todo[0]);
    }

    function onEditTodo(e){
        const todoId = e.currentTarget.parentElement.dataset.key;
        const todo = getStore().filter((todo) => todo.id === todoId);
        Router('/edit', todo[0]);
    }

    function render(){
        if(todoList !== null){
            const ul = container.querySelector('ul');

            const elements = todoList.map(item => todo(item))

            elements.forEach(element => {
                ul.append(element);
                element.querySelector('#deleteTodo').addEventListener('click', onDeleteTodo);
                element.querySelector('#editTodo').addEventListener('click', onEditTodo);
            });
            page.append(ul);
        }
    }

    render()

    const addTodoIcon = addNewTodo();
    page.append(addTodoIcon);

    return page;
}

export default toDoPage