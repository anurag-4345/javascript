let element =document.querySelector("#taskBox")
let taskElement ;
let textInput = document.getElementById("inputId");
let val;

let btn  = document.getElementById("btn")
let btn2  = document.getElementById("btn2")
btn.addEventListener("click",()=>{
    val = document.createTextNode(textInput.value)
    if(val !== "Task")
    {
    taskElement =document.createElement("li");
    taskElement.appendChild(val)
    element.appendChild(taskElement)
    btn2.style.visibility="visible" ;
    console.log("Add task")
    }else{
    textInput.placeholder = "please enter task"
    }
})
