import makeElement from "../utils/makeElement";

const tagline = function(tagLine='Where your todos are managed', className='tag-line'){
    const template = `<p class="${className}">${tagLine}</p>`
    const element = makeElement(template)

    return element
}

export default tagline