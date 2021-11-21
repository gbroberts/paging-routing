import home from "../pages/home";
import toDoPage from "../pages/toDoPage";
import notFound from "../pages/pageNotFound";
import deletePage from "../pages/deletePage";
import editPage from "../pages/editPage";
import addPage from "../pages/addPage";

const routes = {
    "/": home,
    "/todos": toDoPage,
    "/delete": deletePage,
    "/edit": editPage,
    "/add": addPage,
    "/*":notFound
};


// params that is page data......
const Router =  function (pathname, params=null)   {

    const isValidRoute =   Object.keys(routes).find(key => key===pathname)
     
    
      
    
     // loading and unloading pages into the div app
     const app = document.querySelector('#app')
     app.innerHTML = ''
 
     window.history.pushState(
         {},
         pathname,
         window.location.origin + pathname
     )
     
      
         // app.appendChild(routes[window.location.pathname]())
         if(isValidRoute === undefined || isValidRoute ===''){
             app.appendChild(notFound())
         }else{
 
             app.appendChild(routes[isValidRoute](params) ) 
         }
 
 }

export default Router