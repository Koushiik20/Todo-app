const todos=[];
function addTodo(){
    todos.push({
        title:document.querySelector("#title").value
    })
    render();
}
function deleteFirstTodo(){
    todos.shift()
    render();
}
function deleteLastTodo(){
    todos.pop()
    render();
}

function deleteTodo(id){
    todos.splice(id,1)
    render();
}
function createTodo(todo,id){
    const div=document.createElement("div");
    const h3El=document.createElement("h3");
    const btnEl=document.createElement("button");
    h3El.innerHTML=todo.title;
    btnEl.innerHTML="Delete";
    btnEl.setAttribute("onclick",`deleteTodo(${id})`)
    div.appendChild(h3El);
    div.appendChild(btnEl);
    return div;
}
function render(){
    document.querySelector("#todos").innerHTML="";
    for(let i=0;i<todos.length;i++){
        const element=createTodo(todos[i],i)
        document.querySelector("#todos").appendChild(element);
    }
}