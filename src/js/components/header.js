import makeElement from "../utils/makeElement"

const makeHeader = function (elementType='h1', label="ui heading", className="ui-heading"){
     const template = `<${elementType} class="${className}"> ${label} </ ${elementType}>`
     const element = makeElement(template)

     return element
}

export default makeHeader