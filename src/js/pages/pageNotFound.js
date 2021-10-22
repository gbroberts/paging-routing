import makeElement from "../utils/makeElement"
import link from "../components/link"
import makeHeader from "../components/header"
import { logo } from "../components/logo"
import tagline from "../components/tagline"

const notFound = function(){
    let pageTemplate = `
        <div></div>
    `

    const page = makeElement(pageTemplate)

    const header = document.createElement('header');
    header.classList.add('page-header');
    const h1 = makeHeader('h1', logo, 'ui-header');
    const tag = tagline('What have we got to do today?', 'tag-line');
    header.append(h1);
    header.append(tag);

    const homeLink = link("take me back", "/", "back-to-safety")

    let mainTemplate = `
        <main class="notFoundMain">
            <div class="error404">
                <p><span>404 error |</span> Page not found</p>
            </div>
        </main>
    `
    const pageMain = makeElement(mainTemplate)
    pageMain.append(homeLink)
    
    page.append(header)
    page.append(pageMain)

    return page;
}

export default notFound