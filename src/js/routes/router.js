import home from "../pages/home";
import toDoPage from "../pages/todoPage";




const Router = (pathName) =>{
    const routes = {
        "/": home(),
        "/toDoPage": toDoPage()
    };
    
    // loading and unloading pages into the div app
    const app = document.querySelector('#app');
    // clearing out whatever is within the div#app
    app.innerHTML = '';

    window.history.pushState(
        {},
        pathName,
        window.location.origin + pathName
    )
    
    app.appendChild(routes[window.location.pathname]);
}

export default Router