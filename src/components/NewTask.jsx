import {useRef, useState} from 'react';
import Modal from './Modal.jsx';

export default function NewTask({onAdd}) {
  const modalRef = useRef();
  const [task, setTask] = useState('');

  function handleClick() {
    if (task.trim() === '') {
      modalRef.current.openCustomModal();
    } else {
      onAdd(task);
      setTask('');
    }
  }

  return <div className="flex items-center gap-4">
    <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={task}
           onChange={(e) => setTask(e.target.value)} />
    <button className="text-stone-600 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    <Modal ref={modalRef} btnLabel="Close">
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Task</h2>
      <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
      <p className="text-stone-600 mb-4">Please make sure to fill in a name for your task.</p>
    </Modal>
  </div>
}
