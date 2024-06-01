import {useRef} from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({onAdd, onCancel}) {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const modalRef = useRef();

  function handleAdd() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDate = dateRef.current.value;

    if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDate.trim() === '') {
      modalRef.current.openCustomModal();
    } else {
      onAdd({
        title: enteredTitle,
        description: enteredDesc,
        dueDate: enteredDate
      });
    }
  }

  return <article className="w-[35rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4">
      <li>
        <button className="text-stone-700 hover:text-stone-950" onClick={onCancel}>Cancel</button>
      </li>
      <li>
        <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
                onClick={handleAdd}>Save
        </button>
      </li>
    </menu>

    <div>
      <Input label="Title" type='text' ref={titleRef} />
      <Input label="Description" isTextarea ref={descRef} />
      <Input label="Due Date" type='date' ref={dateRef} />
    </div>

    <Modal ref={modalRef} btnLabel="Close">
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Data</h2>
      <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
      <p className="text-stone-600 mb-4">Please make sure to fill in all fields.</p>
    </Modal>
  </article>
}
