import Router from "./routes/router";
import { dataFetcher } from "./utils/dataFetcher";
import { createStore } from "./redux/store";


const onAppInit = async function(e){
    let employees = await dataFetcher('./data/todo.json')

    createStore(employees)
    Router(window.location.pathname)
   
}

window.addEventListener('load', onAppInit)