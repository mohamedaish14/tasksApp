import Input from "./Input.jsx"
import {useRef} from 'react'
import Modal from "./Modal.jsx";


export default function NewProject({onAdd,onCancel}){
const modal=useRef();

    const title=useRef();
const description=useRef();
const duoDate=useRef();

function handelSave(){
    const enteredTitle=title.current.value;
    const enteredDescription=description.current.value;
    const enterdDuoDate=duoDate.current.value;

if(
    enterdDuoDate.trim()===''||
    enteredDescription.trim()===''||
    enteredTitle.trim()===''
){
modal.current.open()
return;
}

    onAdd({
        title:enteredTitle,
        description:enteredDescription,
    duoDate:enterdDuoDate});
}

    return(<>
    <Modal ref={modal}>
        <h2 className="text-xl font-bold text-red-600 my-4"> Invalid Input</h2>
        <h3 className=" text-stone-400 mb-4">it seems you forget to enter a value </h3>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick={handelSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">save</button></li>
            <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">cancel</button></li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Title" />
            <Input ref={description} label="description" textarea/>
            <Input type="date" ref={duoDate} label="Duo Date" />
        </div>
    </div>
    </>)
}