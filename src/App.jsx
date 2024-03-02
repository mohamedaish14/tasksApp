import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import Sidebar from "./components/sidebar.jsx";
import { useState } from "react";
function App() {
  const [projectState,setProjectState]=useState({
    //currentAction
    selectedProjectId:undefined,
    projects:[],
    tasks:[]
  });
  function handleAddTask(text){
    setProjectState(prevState=>{
      const taskId=Math.random();
      const newtask={text:text,
        projectId:prevState.selectedProjectId,
      id:taskId};
      return{
        ...prevState,
       tasks:[...prevState.tasks,newtask]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectState(prevState=>{
    return{
      ...prevState,
      tasks:prevState.tasks.filter((task)=>task.id!==id),
    };
  });}

  function handleDelete(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter((project)=>project.id!=prevState.selectedProjectId)
      };
    });
  }

function handleSelectProject(projectId){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:projectId,
      };
    });

  }
function handleStartAddProject(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null,
      };
    });

  }

function handleAddProject(projectData){
  setProjectState(prevState=>{
    const newProject={...projectData,id:Math.random()};
    return{
      ...prevState,
      selectedProjectId:undefined,
      projects:[...prevState.projects,newProject]
    }
  })
}

function handleCancle(){
  setProjectState(prevState=>{
    return{
      ...prevState,
      selectedProjectId:undefined
    };
  });
}

const selectedProject=projectState.projects.find(
  (project)=>project.id===projectState.selectedProjectId)



  let content=<SelectedProject
   project={selectedProject}
    onDelete={handleDelete}
    onDeleteTask={handleDeleteTask}
      onAddTask={handleAddTask} 
      tasks={projectState.tasks}/> ;

  if(projectState.selectedProjectId===undefined){
    content= <NoProjectSelected   onStartSelect={handleStartAddProject}/>
  }else if(projectState.selectedProjectId===null){
    content= <NewProject onCancel={handleCancle} onAdd={handleAddProject}/>
  }
 

console.log(projectState);

  return (
    <main className="h-screen my-8 flex gap-8">
    <Sidebar
     onSelectProject={handleSelectProject}
    onStartSelect={handleStartAddProject}
     projects={projectState.projects} 
     />
    {content}
    </main>
  );
}

export default App;
