import Input from "./Input"
import {useRef} from  'react';
import Modal from "./Modal";

export default function NewProject ({onAdd, onCancel}) {

    const modal = useRef()
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;       
        const enteredDuedate = dueDate.current.value;

        //   validation

        if(enteredTitle.trim()==='' || enteredDescription.trim()==='' || enteredDuedate.trim()===''){
            modal.current.open();
            return;
        }


        onAdd({title: enteredTitle, 
               description: enteredDescription,
               dueDate: enteredDuedate
        })
    }

    return (
    <>
     <Modal ref={modal} buttonCaption={'Close'}>
        <h2  className='text-xl font-bold text-stone-700 my-4 text-center ' >Invalid Input</h2>
        <p className=' text-stone-500 mb-4'> Please make sure you provide a valid value for every input field.</p>
     </Modal>
     <div className="w-[35rem] mt-16 ">
        <menu  className="flex items-center justify-end gap-4 my-4 ">  
            <button className="text-stone-800  hover:text-stone-950 " onClick={onCancel}>Cancel</button>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "   onClick={handleSave} >Save</button>
        </menu>

        <div>
            <Input  type='text' ref={title} label='Title' textArea={false}></Input>
            <Input ref={description} label='Description' textArea={true}></Input>
            <Input type='date'  ref={dueDate} label='Due Date' textArea={false}></Input>
        </div>
     </div>
    </>
)}