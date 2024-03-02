import NewTask from "./NewTask";

export default function Tasks({tasks,onDelete,onAdd}){
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">NEW TASK</h2>
            <NewTask onAdd={onAdd} onDelete={onDelete} />
            {
            tasks.length===0&&(
            <p className="text-stone-800 mb-4">
               This project does not have any task yet.'</p>)}
           {tasks.length>0 && (<ul className="p-4 mt-8 rounded-md bg-stone-100">
            {
                tasks.map((task)=>(
                    <li key={task.id} className="flex justify-between my-4">
                        <span>{task.text}</span>
                        <button onClick={()=>onDelete(task.id)} className="text-stone-700 hover:text-red-500">Delete</button>
                    </li>
                ))
            }
                
            </ul>)}
        </section>
    );
}