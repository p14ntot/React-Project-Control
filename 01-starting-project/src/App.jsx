import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProjects";

import {useState} from 'react'

function App() {

  const [projectState,setprojectState] = useState({
    selectedProject: undefined, //null for add new project 
    project: [],
    tasks: []
  });

  const selectedProject = projectState.project.find(project => project.id === projectState.selectedProject)

  function handleAddTask(text){

      setprojectState((prevState)=>{

        const taskId= Math.random();
        const newTask = {
          text: text, 
          projectId: prevState.selectedProject,
          id: taskId
        }
        return{
          ...prevState,
          selectedProject:undefined,
          tasks: [...prevState.tasks, newTask]
        }
      })
  }

  function handleDeleteTask(id){
    setprojectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      };
    });
  }






  let content = <SelectedProject project={selectedProject}  onDelete={handleDeleteProject}  onAddTask={handleAddTask}  onDeleteTask={handleDeleteTask}  tasks={projectState.tasks}/>;
  if(projectState.selectedProject === undefined){
    content = <NoProjectSelected onStartNewProject={handleStartButton}/>
  }
  else if (projectState.selectedProject === null){
    content = <NewProject onAdd={addNewProject} onCancel={handleCancel} />
  }



  function handleStartButton(){
    setprojectState((prevState)  =>{
      return {
        ...prevState,
        selectedProject: null
      }
    })
  }

  function handleCancel(projectData){
    setprojectState((prevState)  =>{
      return {
        ...prevState,
        selectedProject: undefined
      }
    })
  }


  function addNewProject(projectData){
    setprojectState(prevState=>{

      const newProject={
        ...projectData, 
        id: Math.random()
      }
      return{
        ...prevState,
        selectedProject:undefined,
        project: [...prevState.project, newProject]
      }
    })
  }


  const handleSelectedProject = (id) => {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id
      };
    });
  };


  function handleDeleteProject () {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        project: prevState.project.filter((project)=>{project.id !== prevState.selectedProject})
      };
    });
  }
  


  return (
    
      
      <main className="h-screen flex gap-8 ">
        <SideBar  onStartNewProject={handleStartButton}  projects={projectState.project} onSelectProject={handleSelectedProject} selectedProjectId={projectState.selectedProject}/>
        {/* <Login/> */}
        {content}
  
      </main>
    
  );
}

export default App;
