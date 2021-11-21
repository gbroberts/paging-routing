import makeElement from "../../utils/makeElement";

const todo = function ({id,category,title,isCompleted,startDate,startTime,endDate,endTime}) {
  const template = `       
  <li class="${category}" data-key="${id}">
    <div>
      <h2>${title}</h2>
      <p>Due: ${endDate}</p>
      <p class="complete"></p>
    </div>    
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