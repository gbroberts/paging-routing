import makeElement from "../../utils/makeElement"

const todoContainer = function (){
    const template = `
    <aside>
        <ul id="todos" class="todos">
        
        </ul>
    </aside>
    `

    return makeElement(template)
}

export default todoContainer