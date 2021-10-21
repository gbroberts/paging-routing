import home from "../pages/home";
import toDoPage from "../pages/todoPage";
import notFound from "../pages/pageNotFound";

const routes = {
    "/": home,
    "/toDoPage": toDoPage
};


const Router = (pathName) =>{
    // Check if pathName in routes as property and store result
    const isValidRoute = routes.hasOwnProperty(pathName);

    // loading and unloading pages into the div app
    const app = document.querySelector('#app');
    // clearing out whatever is within the div#app
    app.innerHTML = '';

    window.history.pushState(
    {},
    pathName,
    window.location.origin + pathName
    )
    
    if(isValidRoute){
        app.appendChild(routes[window.location.pathname]());
    }else{
        app.appendChild(notFound())
    }
}

export default Router