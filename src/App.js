import React, { useState,useEffect } from 'react'
import {BrowserRouter as Router,Route, useLocation} from 'react-router-dom'
import Hello from "./Components/Header.jsx"
import Tasks from "./Components/Tasks.jsx";
import AddTask from "./Components/AddTask.jsx";
import Footer from "./Components/Footer.jsx";
import About from "./Components/About.jsx";
import Register from "./Components/Register.jsx"

const App= () => {
  const [showAddTask,setShowAddTask]=useState(false);
  const [tasks , setTasks]=useState([]) //if we want to change any part of state we can use setTasks.
  //const [name,setName]=useState();
  /*function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query=useQuery();*/
  
   useEffect(() => {
     const getTasks=async()=>{
       const tasksFromServer=await fetchTasks()
       setTasks(tasksFromServer);
     }
     getTasks();
   },[])
   const fetchTasks= async() =>{
    const res=await fetch('http://localhost:5000/tasks')
    const data=await res.json()
    return data;
  }
  const fetchTask= async(id) =>{
    const res=await fetch(`http://localhost:5000/tasks/${id}`)
    const data=await res.json()
    return data;
  }

  const addTask = async(task) =>{     
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(task)
    })
    const data=await res.json();
    setTasks([...tasks,data])

    /*const id=Math.floor(Math.random()*1000)+1
    const newTask={id, ...task}
    setTasks([...tasks,newTask])*/
  
  }
//delete 
const deleteTask=async(id) =>{
      await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
      setTasks(tasks.filter((task)=>task.id!=id))
    }
//toogle reminder.
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updTask),
  })

  const data = await res.json()

  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    )
  )
}

  return (
    <Router>
    <div className="div1"> 
      
      <Route exact path='/' component={Register}  />
      <Route exact path='/home' exact render={(props)=>(
        <>
        <Hello title="To Do List" 
        onAdd={()=>setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}/>
        {showAddTask  && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={
          deleteTask} onToggle={toggleReminder}/>)
          :('No tasks to show')}
        </> 
      )}
      />

      <Route path='/about' component={About} />
      <Footer/>  
    
    </div>
    </Router>
    
    )
}
export default App

      //<Route path='/home' exact render={(props)=>(
