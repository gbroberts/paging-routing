import makeElement from "../../utils/makeElement";

const todo = function ({id,category,title,isCompleted,startDate,startTime,endDate,endTime}) {
  const template = `       
  <li class="${category}" data-key="${id}">
    <div>
      <h2>${title}</h2>
      <p>Due: ${endDate}</p>
      <p class="complete"></p>
    </div>
    <p class="controls" data-key="${id}">
      <button id="editTodo"><img src="./data/assets/edit-icon.svg" alt="Edit"></button>
      <button id="deleteTodo"><img src="./data/assets/delete-icon.svg" alt="Delete"></button>
    </p>      
  </li>        
  `;
  const templateHolder = makeElement(template);
  if(isCompleted){
    templateHolder.querySelector('.complete').innerText = 'Completed';
    return templateHolder;
  }
  else{
    return templateHolder;
  }

};

export default todo;