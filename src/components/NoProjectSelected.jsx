import noProjectSelected from '../assets/no-projects.png'
import Button from './Button.jsx'
export default function NoProjectSelected({onStartSelect}){
    return <div className='text-center w-2/3 mt-24'>
        <img src={noProjectSelected} alt='empty task list' className='w-16 h-16 object-contain mx-auto' />
        <h2 className='text-xl font-bold text-stone-500 my-400'>No Project Selected</h2>
        <p className='text-stone-400 mb-4'>select aproject or add a new one</p>
        <p>
            <Button onClick={onStartSelect}>Create new project</Button>
        </p>
    </div>
}