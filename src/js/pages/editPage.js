import {logo} from "../components/logo";
import makeHeader from "../components/header";
import tagline from "../components/tagline";
import link from "../components/link";
import form from "../components/form/form";

const editPage = function(props){
    const page = document.createElement('div');
    page.classList.add('editPage');
    const header = document.createElement('header');
    header.classList.add('page-header');
    const h1 = makeHeader('h1', logo, 'grahams-logo');
    const tag = tagline('Where your todos are managed', 'tag-line');
    const linkElem = link('to do app', '/todos', 'todoButton');

    header.append(h1);
    header.append(tag);
    header.append(linkElem);

    page.append(header);

    if(props !== null){
        const pageForm = form(props, 'edit');

        page.append(pageForm);
    }
    

    return page;
}

export default editPage;