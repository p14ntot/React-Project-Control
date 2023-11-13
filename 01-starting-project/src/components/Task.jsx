import NewTask from "./NewTask";

const Task = ({ onAddTask , onDeleteTask, tasks}) => {
    return ( <section>
        <h2 className=" text-2xl font-bold text-stone-700">Tasks</h2>
        {/* <p>New Task</p> */}
        <NewTask  onAddTask={onAddTask}/>

        {tasks.length === 0 && (
        <p className="my-4 text-stone-800">This project does not have any tasks!</p>
      )}
        {tasks.length > 0 && (  
        <ul  className="p-4 mt-8 rounded-md bg-stone-100">
              {tasks.map((task) => ( 
                 <li key={task.id} className="flex justify-between my-4">
                    <span>{task.text}</span>
                    <button className=" text-stone-700 hover:text-red-500" onClick={() => onDeleteTask(task.id)}>Delete this task!</button> 
                 </li> ))}
        </ul>)}




    </section> );
}
 
export default Task;


