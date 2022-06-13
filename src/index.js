document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.getElementById("create-task-form");
  
  taskForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const taskDescription = document.getElementById("new-task-description");
    const li = document.createElement("li");
    li.textContent= taskDescription.value;
    let btn= document.createElement('button')
  
  btn.addEventListener('click',handleDelete)
  btn.textContent= 'x'

  li.appendChild(btn)
  
    appendNewTask(li);
    e.target.reset();
    
  })
  
});


const appendNewTask = li => {
  document.getElementById("tasks").appendChild(li);
};

function handleDelete(e){
  e.target.parentNode.remove()}

  


