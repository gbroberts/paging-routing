import {logo} from "../components/logo";
import makeHeader from "../components/header";
import tagline from "../components/tagline";
import link from "../components/link";
import { getStore } from "../redux/store";
import todoContainer from "../components/todos/todoContainer";
import todo from "../components/todos/todo"

const toDoPage = function(){
    const todoList = getStore();
    const page = document.createElement('div');
    const container = todoContainer();
    const header = document.createElement('header');
    header.classList.add('page-header');
    const h1 = makeHeader('h1', logo, 'ui-header');
    const tag = tagline('What have we got to do today?', 'tag-line');
    const linkElem = link('Home', '/', 'home-link');
    header.append(h1);
    header.append(tag);
    header.append(linkElem);
    page.append(header);
    console.log(page);

    function render(){
        if(todoList !== null){
            const ul = container.querySelector('ul');

            const elements = todoList.map(item => todo(item))

            elements.forEach(element => {
                ul.append(element);
            });
            page.append(ul);
        }
    }



    render()



    return page;
}

export default toDoPage