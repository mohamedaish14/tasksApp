import Button from "./Button.jsx";
import SelectedProject from "./SelectedProject.jsx";

export default function Sidebar({onStartSelect,projects,onSelectProject,SelectedProjectId}){
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">your projects</h2>
        <Button onClick={onStartSelect}>+ Add Project</Button>
        <ul className="my-5 ">
            {projects.map((project)=>{
                let csslasses='w-full text-left px-2 py-2 rounded-sm my-1  hover:text-stone-600'
                if(project.id===SelectedProjectId){
                    csslasses+='bg-stone-800 text-stone-200'
                }else{
                    csslasses +='text-stone-400'
                }
                return(
            <li key={project.id}>
                <button 
                onClick={()=>onSelectProject(project.id)}
                className={csslasses}>
                {project.title}
                 </button>
                 </li>);
            })}
        </ul>
    </aside>
}