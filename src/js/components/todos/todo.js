import makeElement from "../../utils/makeElement";
import {editIcon} from "./icons/editIcon";
import {deleteIcon} from "./icons/deleteIcon";

const todo = function ({id,category,title,isCompleted,startDate,startTime,endDate,endTime}) {
  const template = `       
  <li class="${category}" data-key="${id}">
     <h2>${title}</h2>
     <p>Due: ${endDate}</p>
     <p class="complete"></p>
     <p class="controls" data-key="${id}">
      <button id="editTodo">${editIcon}</button>
      <button id="deleteTodo">${deleteIcon}</button>
     </p>      
  </li>        
  `;
  const templateHolder = makeElement(template);
  if(isCompleted){
    templateHolder.querySelector('.complete').innerText.value = 'Completed';
    return templateHolder;
  }
  else{
    return templateHolder;
  }

};

export default todo;