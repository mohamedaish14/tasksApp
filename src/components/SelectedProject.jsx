import  Tasks from './Tasks.jsx'
export default function SelectedProject({project,onDelete,onDeleteTask,onAddTask,tasks}){
    const formattedDate= new Date(project.duoDate).toLocaleDateString('en-US',{
        year:'numeric',
       month:'short',
        day:'numeric'   });
return(
    <div className="w-[35rem]  mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex item-center justify-between">
                <h1>{project.title}</h1>
                <button className=" text-stone-600 hover:text-stone-900" onClick={onDelete}>Delete</button>
            </div>
            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </header>
        <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
)
}