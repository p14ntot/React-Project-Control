import Button from "./Button";
const SideBar = ({onStartNewProject,  projects, onSelectProject, selectedProjectId }) => {
    return (  
        <aside className="bg-black w-1/3 text-white px-8 py-16 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl ">Your Projects</h2>
            <div>
                <Button onClick={onStartNewProject}  children={'+ Add new Project'}/>     
            </div>

            <ul className="mt-8 ">
                {projects.map((project) => {
                    let cssClasses='w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-slate-200 hover:bg-stone-800'

                    if(project.id === selectedProjectId){
                        cssClasses += ' bg-stone-800 text-stone-200 '
                    } else {
                        cssClasses += ' text-stone-400'
                    }
                    return(
                    <li key={project.id}> 
                        <button 
                        className={cssClasses}
                        onClick={() => onSelectProject(project.id)}>
                        {project.title} 
                        </button>
                    </li>
                )})}
            </ul>


        </aside>   
);
}
   

export default SideBar;