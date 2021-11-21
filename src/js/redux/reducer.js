import {getStore, updateStore} from './store'

function reducer (action){
    const store = getStore();
    let index = null;
    let newStore = null;
    switch(action.type){
        case "delete":
            // grabbing the current store
            index = action.payload.index;
            newStore = [...store.slice(0,index), ...store.slice(index+1)]
            updateStore(newStore);
            action.cb();
            break;
        case "edit":
            index = action.payload.index;
            newStore = [...store.slice(0,index), action.payload.editedTodo, ...store.slice(index+1)]
            updateStore(newStore);
            action.cb();
            break;
        case "add": 
            newStore = [...store, action.payload.newTodo]
            updateStore(newStore);
            action.cb();
            break;
        default: return store
    }
}


export default reducer 