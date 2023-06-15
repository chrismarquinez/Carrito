import TaskForm from "./TaskForm"
import Task from "./Task"
import { useState } from "react"


const TaskList = () => {
    const [formData , setFormData ] = useState({
      name:"",
      completed: false

    })
     const {name} = formData
     
     const {handleInputChange} = (e) => {
      const {name , value} = e.target
      setFormData({...formData, [name]: value })

     };
  
     const createTask = async (e) => {

      e.prevenDefault();
      console.log(FormData)

     };

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm name={name} handleInputChange={handleInputChange} createTask={createTask}/>
      <div className="--flex-between --pb"></div>
        <p>
            
         <b>Total Tasks:</b> 0 

        </p>
       
       <p>
       <b>Completed Tasks:</b> 0
       </p>
        <hr/>
         
         <Task/>
         
         
       
    </div>
  )
}

export default TaskList
