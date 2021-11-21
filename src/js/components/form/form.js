import makeElement from "../../utils/makeElement";

const form = function(singleTodo, action=null){
    let template = ``;
    if(action === 'edit'){
        template = `
        <form>
            <label for="todoId">ID</label>
            <input type="text" name="todoId" id="todoId" value="${singleTodo.id}" disabled>
            <div>
                <label for="category">Category</label>
                <select name="category" id="category">
                    <option value="">[Select an Option]</option>
                    <option value="home" ${(singleTodo.category === "home") ? "selected" : ""}>Home</option>
                    <option value="work" ${(singleTodo.category === "work") ? "selected" : ""}>Work</option>
                    <option value="school" ${(singleTodo.category === "school") ? "selected" : ""}>School</option>
                    <option value="family" ${(singleTodo.category === "family") ? "selected" : ""}>Family</option>
                    <option value="friends" ${(singleTodo.category === "friends") ? "selected" : ""}>Friends</option>
                </select>
                <label for="isCompleted">Completed</label>
                <input type="checkbox" name="isCompleted" checked="${singleTodo.isCompleted}">
            </div>
            <label for="title">To Do</label>
            <input type="text" name="title" id="title" value="${singleTodo.title}">
            <div>
                <label for="startDate">Start Date</label>
                <input type="text" name="startDate" id="startDate" value="${singleTodo.startDate}">
                <label for="startTime">Start Time</label>
                <input type="text" name="startTime" id="startTime" value="${singleTodo.startTime}">
            </div>
            <div>
                <label for="endDate">End Date</label>
                <input type="text" name="endDate" id="endDate" value="${singleTodo.endDate}">
                <label for="endTime">End Time</label>
                <input type="text" name="endTime" id="endTime" value="${singleTodo.endTime}">
            </div>
        </form>
    `;
    }else{
        template = `
        <form>
            <label for="todoId">ID</label>
            <input type="text" name="todoId" id="todoId" disabled>
            <div>
                <label for="category">Category</label>
                <select name="category" id="category">
                    <option value="">[Select an Option]</option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="school">School</option>
                    <option value="family">Family</option>
                    <option value="friends">Friends</option>
                </select>
                <label for="isCompleted">Completed</label>
                <input type="checkbox" name="isCompleted">
            </div>
            <label for="title">To Do</label>
            <input type="text" name="title" id="title">
            <div>
                <label for="startDate">Start Date</label>
                <input type="text" name="startDate" id="startDate">
                <label for="startTime">Start Time</label>
                <input type="text" name="startTime" id="startTime">
            </div>
            <div>
                <label for="endDate">End Date</label>
                <input type="text" name="endDate" id="endDate">
                <label for="endTime">End Time</label>
                <input type="text" name="endTime" id="endTime">
            </div>
        </form>
    `;
    }
    
    const element = makeElement(template);
    
    return element;
}

export default form;