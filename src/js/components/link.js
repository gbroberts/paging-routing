import Router from "../routes/router";
import makeElement from "../utils/makeElement";

const onRequestNewPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path);
    return false;
}

const link = function(label="ui link", path="/", className="ui-link"){
    const template = `<a href="${path}" class="${className}" data-path="${path}">${label}</a>`;
    const element = makeElement(template);
    element.addEventListener('click', onRequestNewPage);
    
    return element;
}

export default link