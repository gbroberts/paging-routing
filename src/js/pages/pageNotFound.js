import makeElement from "../utils/makeElement"
import link from "../components/link"

const notFound = function(){
    let headerTemplate = `
        <header class="page-not-found center-in-page">
            <h1>404 page not found</h1>
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
    const homeLink = link("Home Page", "/", "back-to-safety")

    pageHeader.append(homeLink)


    return pageHeader;
}

export default notFound