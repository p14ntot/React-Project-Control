import { useState } from "react";

const NewTask = ({onAddTask}) => {

    const [enternedTask , setEnternedTask] = useState('');

    function handleChange(event) {
        setEnternedTask(event.target.value);
    }

    function handleClick() {
        if(enternedTask.trim()===''){
            return;
        }
        onAddTask(enternedTask);
        setEnternedTask('');
    }

    return ( <div className="flex gap-5 items-center">
        <input type="text" className=" w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} ></input>
        <button className=" text-stone-700  hover:text-stone-950 " onClick={handleClick}> Add task</button>
    </div> );
}
 
export default NewTask;



