import Button from './Button.jsx';

export default function Sidebar({projects, onAdd, onSelect, selectedId}) {

  function getClasses(projectId) {
    let classes = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
    if (selectedId === projectId) {
      classes += " bg-stone-800 text-stone-200";
    } else {
      classes += " text-stone-400";
    }
    return classes;
  }

  return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
    <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
    <div>
      <Button onClick={onAdd}>+ Add Project</Button>
    </div>

    {projects.length > 0 && <ul className="mt-8">
      {projects.map(proj => <li key={proj.id} onClick={() => onSelect(proj.id)}>
        <button className={getClasses(proj.id)}>
        {proj.title}
        </button>
      </li>)}
    </ul>}

  </aside>
}
