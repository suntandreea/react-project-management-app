import Button from './Button.jsx';
import Tasks from './Tasks.jsx';

export default function SelectedProject({project, onDelete, tasks, onAddTask, onDeleteTask}) {
  const date = new Date(project.dueDate).toLocaleDateString('ro', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const projectTasks = tasks.filter(elem => elem.projectId === project.id);

  return <article className="w-[35rem] mt-16">
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
        <Button onClick={onDelete}>Delete </Button>
      </div>
      <p className="mb-4 text-stone-400">{date}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
    </header>
    <Tasks tasks={projectTasks} onAdd={onAddTask} onDelete={onDeleteTask}/>
  </article>
}
