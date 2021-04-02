import Task from "./Task.jsx"
const Tasks = ({tasks,onDelete,onToggle}) => {
    return (
        <div>
            {tasks.map((task)=>(
                <Task key={task.id} task={task} onDlete={()=>onDelete(task.id)} onToggle={onToggle}/> 
            ))}
        </div>
    )
}
export default Tasks;