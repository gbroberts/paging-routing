import {logo} from "../components/logo";
import makeHeader from "../components/header";
import tagline from "../components/tagline";
import link from "../components/link";

const home = function(){
    const header = document.createElement('header');
    header.classList.add('page-header');
    const h1 = makeHeader('h1', logo, 'ui-header');
    const tag = tagline('Where your todos are managed', 'tag-line');
    const linkElem = link('to do app', '/toDoPage', 'todoButton');
    header.append(h1);
    header.append(tag);
    header.append(linkElem);

    return header
}

export default home